import { App, DirectiveBinding, h, render, ComponentPublicInstance } from 'vue';
import { CustomMouseMenuOptions } from './types';
import MouseMenu from './mouse-menu.vue';
import { createClassDom } from '../shared';

MouseMenu.install = (app: App): void => {
  app.component(MouseMenu.name, MouseMenu);
};

function CustomMouseMenu (options: CustomMouseMenuOptions) {
  const className = '__mouse__menu__container';
  let container:HTMLElement;
  if (document.querySelector(`.${className}`)) {
    container = document.querySelector(`.${className}`) as HTMLElement;
  } else {
    container = createClassDom('div', className);
  }
  const vm = h(MouseMenu, options);
  render(vm, container);
  document.body.appendChild(container);
  return vm.component?.proxy as ComponentPublicInstance<typeof MouseMenu>;
}

type MouseListenFn = (e: MouseEvent) => void
type TouchListenFn = (e: TouchEvent) => void

let MouseMenuCtx: any;
let longPressTimer: number;
let longPressTouchStart: TouchListenFn;
let longPressTouchEnd: TouchListenFn;
function addLongPressListener (el: HTMLElement, fn: TouchListenFn, longPressDuration = 500) {
  longPressTouchStart = (e: TouchEvent) => {
    MouseMenuCtx && MouseMenuCtx.close();
    e.preventDefault();
    if (longPressTimer) clearTimeout(longPressTimer);
    longPressTimer = window.setTimeout(() => {
      fn(e);
    }, longPressDuration);
  };
  longPressTouchEnd = () => {
    clearTimeout(longPressTimer);
  };
  el.addEventListener('touchstart', longPressTouchStart);
  el.addEventListener('touchmove', longPressTouchEnd);
  el.addEventListener('touchend', longPressTouchEnd);
  el.addEventListener('touchcancel', longPressTouchEnd);
}
function removeLongPressListener (el: HTMLElement) {
  el.removeEventListener('touchstart', longPressTouchStart);
  el.addEventListener('touchmove', longPressTouchEnd);
  el.removeEventListener('touchend', longPressTouchEnd);
  el.removeEventListener('touchcancel', longPressTouchEnd);
}

// 指令封装
let mouseDownEvent: MouseListenFn;
let longPressEvent: TouchListenFn;
const mounted = (el: HTMLElement, binding: DirectiveBinding<any>) => {
  const { value } = binding;
  if (value.menuList.length > 0) {
    mouseDownEvent = (e: MouseEvent) => {
      const MouseMenuCtx = CustomMouseMenu({
        el,
        ...value
      });
      if (e.button === 2) {
        if (typeof value.disabled === 'function' && value.disabled(value.params)) return;
        e.stopPropagation();
        document.oncontextmenu = (e: MouseEvent) => {
          e.preventDefault();
          const { x, y } = e;
          MouseMenuCtx.show(x,y);
        };
        document.onmousedown = () => {
          document.oncontextmenu = null;
          MouseMenuCtx.close();
        };
      } else {
        MouseMenuCtx.close();
      }
    };
    el.removeEventListener('mousedown', mouseDownEvent);
    el.addEventListener('mousedown', mouseDownEvent);
    if (value.useLongPressInMobile && 'ontouchstart' in window) {
      longPressEvent = (e: TouchEvent) => {
        if (typeof value.disabled === 'function' && value.disabled(value.params)) return;
        e.preventDefault();
        MouseMenuCtx = CustomMouseMenu({
          el,
          ...value
        });
        const { touches } = e;
        const { clientX, clientY } = touches[0];
        MouseMenuCtx.show(clientX, clientY);
        document.onmousedown = null;
        el.onmousedown = null;
        setTimeout(() => {
          document.onmousedown = () => MouseMenuCtx.close();
          el.onmousedown = () => MouseMenuCtx.close();
        }, 500);
      };
      removeLongPressListener(el);
      addLongPressListener(el, longPressEvent, value.longPressDuration || 500);
    } 
  } else {
    throw new Error('At least set one menu list!');
  }
};

const unmounted = (el: HTMLElement) => {
  el.removeEventListener('mousedown', mouseDownEvent);
  if ('touchstart' in window) {
    removeLongPressListener(el);
  }
};

const MouseMenuDirective = {
  mounted,
  unmounted
};

export { MouseMenuDirective, CustomMouseMenu };
export default MouseMenu;