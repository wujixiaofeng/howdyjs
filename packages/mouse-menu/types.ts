export type MenuCallback<T = any> = (arg0?: any, arg1?: HTMLElement | null, arg2?: HTMLElement | null) => T
export type MenuSetting = {
  fn?: MenuCallback;
  label?: string | MenuCallback<string>;
  tips?: string | MenuCallback<string>;
  hidden?: boolean | MenuCallback<boolean>;
  disabled?: boolean | MenuCallback<boolean>;
  icon?: string | MenuCallback<string>;
  line?: boolean;
  children: MenuSetting[];
  customClass?: string;
}
export type CustomMouseMenuOptions = {
  menuList: MenuSetting[];
  menuWidth?: number;
  hasIcon?: boolean;
  iconType?: string;
  menuWrapperCss?: Record<string, string>;
  menuItemCss?: Record<string,string>;
  params?: any;
  appendToBody?: boolean;
  menuHiddenFn?: MenuCallback;
  el?: HTMLElement;
  customClass?: string;
}