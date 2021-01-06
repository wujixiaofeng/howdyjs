interface IElement extends HTMLElement {
  $resize?: CustomResize
}

interface IOptions {
  immediate: true,
  direction: string[],
  scrollElSelector: string,
  lineColor: string,
  lineWidth: number,
  lineHoverColor: string,
  lineHoverWidth: number,
  tipLineColor: string,
  tipLineWidth: number,
  tipLineStyle: string,
  zIndex: number,
  needParentNodeOffset: boolean
}

interface ILine extends HTMLDivElement {
  mouseoverEvent?: EventListenerOrEventListenerObject,
  mouseoutEvent?: EventListenerOrEventListenerObject,
  mousedownEvent?: EventListenerOrEventListenerObject
}

class CustomResize {
  private el: IElement
  private options:IOptions
  private directionArr: string[]
  constructor({ el, options }) {
    if (el instanceof HTMLElement) {
      this.el = el
    } else if (typeof el === 'string') {
      this.el = document.querySelector(el) as HTMLElement
    }
    this.options = {
      immediate: false,
      direction: ['right'],
      scrollElSelector: null,
      lineColor: '#aab',
      lineWidth: 2,
      lineHoverColor: '#88f',
      lineHoverWidth: 4,
      tipLineColor: '#262626',
      tipLineWidth: 1,
      tipLineStyle: 'dashed',
      zIndex: 999,
      needParentNodeOffset: true,
      ...options
    }
    this.directionArr = this.options.direction || ['right']
    this.el.$resize = this
  }

  init () {
    const { position } = getComputedStyle(this.el)
    if (position === 'static') this.el.style.position = 'relative'
    this.directionArr.map(direction => {
      if (this.options.immediate) {
        let line = this.createLineEl(direction)
        this.el.appendChild(line)
      } else {
        let dashedLine = this.createDashedLineEl(direction)
        let line = this.createLineEl(direction, dashedLine)
        this.el.appendChild(dashedLine)
        this.el.appendChild(line)
      }
    })
  }

  private createDashedLineEl (direction) {
    const { tipLineColor, tipLineWidth, tipLineStyle, zIndex } = this.options
    let dashedLine = document.createElement('div')
    const cssText = `position:absolute;z-index: ${zIndex};visibility: hidden;`
    const isX = direction === 'left' || direction === 'right'
    dashedLine.style.cssText = isX
      ? `${cssText};top:0;bottom: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}`
      : `${cssText};left:0;right: 0;${direction}:0;border-${direction}:${tipLineWidth}px ${tipLineStyle} ${tipLineColor}`
    dashedLine.setAttribute('class', 'resize__dashed-line')
    return dashedLine
  }

  private createLineEl (direction: string, dashedLineEl?: HTMLDivElement) {
    const { immediate, scrollElSelector, lineColor, lineWidth, lineHoverColor, lineHoverWidth, zIndex, needParentNodeOffset } = this.options
    let line = document.createElement('div') as ILine
    let cssText = `position: absolute;background: ${lineColor};z-index: ${zIndex}`
    const isX = direction === 'left' || direction === 'right'
    const isBefore = direction === 'right' || direction === 'bottom'
    const isFlex = getComputedStyle(this.el.parentNode as HTMLElement).display === 'flex'
    line.style.cssText = isX
      ? `${cssText};width: ${lineWidth}px;top:0;bottom: 0;${direction}: -${lineWidth / 2}px;cursor: col-resize;`
      : `${cssText};height: ${lineWidth}px;left:0;right: 0;${direction}: -${lineWidth / 2}px;cursor: row-resize;`
    line.mouseoverEvent = function () {
      line.style.background = lineHoverColor
      line.style[isX ? 'width' : 'height'] = `${lineHoverWidth}px`
      line.style[direction] = `-${lineHoverWidth / 2}px`
    }
    line.mouseoutEvent = function () {
      line.style.background = lineColor
      line.style[isX ? 'width' : 'height'] = `${lineWidth}px`
      line.style[direction] = `-${lineWidth / 2}px`
    }
    const element = this.el
    line.mousedownEvent = function (e) {
      const el: HTMLElement = element || (e.target as HTMLElement).parentNode as HTMLElement
      const elParent = el.parentNode as HTMLElement
      let moveOffset:number
      const elSize = isX ? el.offsetWidth : el.offsetHeight
      const elParentSize = isX ? elParent.offsetWidth : elParent.offsetHeight
      const elOffset = isX ? el.offsetLeft : el.offsetTop
      const elParentOffset = needParentNodeOffset ? (isX ? elParent.offsetLeft : elParent.offsetTop) : 0
      const scrollEl:HTMLElement = scrollElSelector ? document.querySelector(scrollElSelector) : document.documentElement
      const scrollSize = isX ? scrollEl.scrollLeft : scrollEl.scrollTop
      document.body.style.userSelect = 'none'
      let moveValidFlag = true
      const resizeFn = () => {
        let resize = document.createEvent('HTMLEvents')
        resize.initEvent('resize', false, false)
        resize['direction'] = direction
        resize['moveOffset'] = moveOffset
        resize['moveOffsetPercent'] = moveOffset / elParentSize * 100
        if (isFlex) {
          resize[isX ? 'resizeWidth' : 'resizeHeight'] = isBefore ? moveOffset - elOffset + elParentOffset : elSize + elOffset - moveOffset - elParentOffset
          resize[isX ? 'resizeWidthPercent' : 'resizeHeightPercent'] = (isBefore ? (moveOffset - elOffset + elParentOffset) / elParentSize : (elSize + elOffset - moveOffset - elParentOffset) / elParentSize) * 100
        } else {
          resize[isX ? 'resizeWidth' : 'resizeHeight'] = isBefore ? moveOffset - elOffset : elSize + elOffset - moveOffset
          resize[isX ? 'resizeWidthPercent' : 'resizeHeightPercent'] = (isBefore ? (moveOffset - elOffset) / elParentSize : (elSize + elOffset - moveOffset) / elParentSize) * 100
        }
        element.dispatchEvent(resize)
      }
      document.onmousemove = function (e) {
        e.preventDefault()
        moveOffset = isX ? e.clientX - elParent.offsetLeft + scrollSize : e.clientY - elParent.offsetTop + scrollSize
        moveValidFlag = isBefore
          ? isFlex
            ? moveOffset >= (elOffset - elParentOffset) && moveOffset <= elParentSize
            : moveValidFlag = moveOffset >= elOffset && moveOffset <= elParentSize
          : isFlex
            ? moveValidFlag = moveOffset >= 0 && moveOffset <= elOffset - elParentOffset + elSize
            : moveValidFlag = moveOffset >= 0 && moveOffset <= (elOffset + elSize)
        if (moveValidFlag) {
          if (immediate) {
            resizeFn()
          } else {
            dashedLineEl.style.visibility = 'visible'
            if (isFlex) {
              dashedLineEl.style[direction] = isBefore ? `${elSize - moveOffset + elOffset - elParentOffset}px` : `${moveOffset + elParentOffset - elOffset}px`
            } else {
              dashedLineEl.style[direction] = isBefore ? `${elOffset + elSize - moveOffset}px` : `${moveOffset - elOffset}px`
            }
          }
        }
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        document.body.style.userSelect = 'auto'
        if (!immediate) {
          dashedLineEl.style.visibility = 'hidden'
          if (moveValidFlag) {
            resizeFn()
            dashedLineEl.style[direction] = 0
          }
        }
      }
    }
    line.setAttribute('class', 'resize__line')

    line.addEventListener('mousemove', line.mouseoverEvent)
    line.addEventListener('mouseout', line.mouseoutEvent)
    line.addEventListener('mousedown', line.mousedownEvent)
    return line
  }

  destroy () {
    ([...this.el.querySelectorAll('.resize__line')] as ILine[]).map((line) => {
      line.removeEventListener('mousemove', line.mouseoverEvent)
      line.removeEventListener('mouseout', line.mouseoutEvent)
      line.removeEventListener('mousedown', line.mousedownEvent)
      line.parentNode.removeChild(line)
    });
    [...this.el.querySelectorAll('.resize__dashed-line')].map(line => {
      line.parentNode.removeChild(line)
    })
  }
}

const mounted = (el, binding, userOptions) => {
  const { arg, value } = binding
  const customGlobalOptions = userOptions || {}
  let direction: string[]
  let options: IOptions
  if (arg) {
    if (arg === 'all') {
      direction = ['top', 'left', 'bottom', 'right']
    } else {
      direction = [arg]
    }
  }
  if (direction) {
    options = {
      ...customGlobalOptions,
      ...value,
      direction
    }
  } else {
    options = {
      ...customGlobalOptions,
      ...value
    }
  }
  const resize = new CustomResize({
    el,
    options
  })
  resize.init()
}
const unmounted = (el) => {
  el.$resize && el.$resize.destroy()
}

const ResizeDirective = {
  install (Vue, userOptions) {
    Vue.directive('resize', {
      mounted: (el, binding) => mounted(el, binding, userOptions),
      unmounted
    })
  },
  mounted,
  unmounted,
}

export default CustomResize
export {
  ResizeDirective
}
