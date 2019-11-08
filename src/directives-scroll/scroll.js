const createScrollBarTrack = (el, direction, options, scrollWrapper) => {
  el.style.position = 'relative'
  let isY = direction === 'y'
  let { scrollBarWidth, scrollBarOffsetX, scrollBarOffsetY, scrollBarThumbColor, scrollBarThumbHoverColor, scrollBarThumbBorderRadius, scrollBarTrackColor, speedOfClickToScroll } = options
  scrollBarThumbBorderRadius = scrollBarThumbBorderRadius ? scrollBarWidth / 2 : 0
  const track = document.createElement('div')
  let trackCssText = isY
    ? `position: absolute;right: 0;top: 0;height: 100%; width: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
    : `position: absolute;left: 0;bottom: 0;width: 100%; height: ${scrollBarWidth + scrollBarOffsetX * 2}px;background: ${scrollBarTrackColor};`
  track.style.cssText = trackCssText
  track.setAttribute('class', `scroll__track_${direction}`)
  scrollWrapper.appendChild(track)
  const thumb = document.createElement('div')
  let thumbCssText = isY
    ? `position: relative;top: 0;right: 0;width: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetY}px ${scrollBarOffsetX}px;box-sizing:border-box;cursor: pointer;`
    : `position: relative;bottom: 0;left: 0;height: ${scrollBarWidth + scrollBarOffsetX * 2}px;padding: ${scrollBarOffsetX}px ${scrollBarOffsetY}px;box-sizing:border-box;cursor: pointer;`
  const thumbInner = document.createElement('div')
  let thumbInnerCssText = `width: 100%;height:100%;background: ${scrollBarThumbColor};border-radius: ${scrollBarThumbBorderRadius}px;`
  let { offsetHeight, scrollHeight, offsetWidth, scrollWidth } = el
  let offsetSize = isY ? offsetHeight : offsetWidth
  let scrollSize = isY ? scrollHeight : scrollWidth
  let thumbSize = offsetSize / scrollSize * offsetSize
  thumbCssText += isY ? `height: ${thumbSize}px;` : `width: ${thumbSize}px`
  thumb.style.cssText = thumbCssText
  thumb.setAttribute('class', 'scroll__thumb')
  thumbInner.style.cssText = thumbInnerCssText
  thumbInner.setAttribute('class', 'scroll__thumb_inner')
  thumb.appendChild(thumbInner)
  track.appendChild(thumb)
  let elScrollTop = 0
  let isInThumbMouseMove = false
  const elScrollTopMax = scrollSize - offsetSize
  const thumbScrollTopMax = offsetSize - thumbSize
  if (isY) {
    el.onmousewheel = function (wheel) {
      if (!isInThumbMouseMove) {
        elScrollTop = wheel.deltaY < 0
          ? elScrollTop < -wheel.deltaY
            ? 0
            : elScrollTop + wheel.deltaY
          : elScrollTop >= elScrollTopMax - wheel.deltaY
            ? elScrollTopMax
            : elScrollTop + wheel.deltaY
        // scrollWrapper.style.transform = `translateY(${elScrollTop}px)`
        setTranslate(scrollWrapper, 'y', elScrollTop)
        thumb.style.transform = `translateY(${elScrollTop / scrollSize * offsetSize}px)`
        el.scrollTop = elScrollTop
      }
      return false
    }
  }
  thumb.onmouseenter = function () {
    thumbInner.style.background = scrollBarThumbHoverColor
  }
  thumb.onmouseleave = function () {
    thumbInner.style.background = scrollBarThumbColor
  }
  thumb.onmousedown = function (downEvent) {
    downEvent.stopPropagation()
    const thumbEl = downEvent.target.parentNode
    const beforeClientY = isY ? downEvent.clientY : downEvent.clientX
    let [thumbBeforeOffset] = thumbEl.style.transform.match(/\d+(\.\d+)?/) || [0]
    thumbBeforeOffset = ~~thumbBeforeOffset
    isInThumbMouseMove = true
    document.onmousemove = function (moveEvent) {
      document.body.style.userSelect = 'none'
      let { clientY, clientX } = moveEvent
      let thumbMoveOffset = (isY ? clientY : clientX) - beforeClientY + thumbBeforeOffset
      elScrollTop = thumbMoveOffset / offsetSize * scrollSize
      if (elScrollTop < 0) {
        thumbMoveOffset = 0
        elScrollTop = 0
      } else if (elScrollTop > elScrollTopMax) {
        thumbMoveOffset = thumbScrollTopMax
        elScrollTop = elScrollTopMax
      }
      // scrollWrapper.style.transform = isY ? `translateY(${elScrollTop}px)` : `translateX(${elScrollTop}px)`
      setTranslate(scrollWrapper, direction, elScrollTop)
      thumb.style.transform = isY ? `translateY(${thumbMoveOffset}px)` : `translateX(${thumbMoveOffset}px)`
      if (isY) {
        el.scrollTop = elScrollTop
      } else {
        el.scrollLeft = elScrollTop
      }
    }
    document.onmouseup = function () {
      isInThumbMouseMove = false
      document.body.style.userSelect = 'auto'
      document.onmousemove = null
      document.onmouseup = null
    }
  }
  track.onmousedown = function (e) {
    const trackEl = e.target
    let [thumbBeforeOffset] = trackEl.childNodes[0].style.transform.match(/\d+(\.\d+)?/) || [0]
    thumbBeforeOffset = ~~thumbBeforeOffset
    const clickPosition = isY ? (e.clientY - trackEl.getBoundingClientRect().top) : (e.clientX - trackEl.getBoundingClientRect().left)
    const thumbMoveOffset = clickPosition - thumbSize / 2
    const animateScroll = function () {
      let thumbScrollTop, breakAnimation
      if (thumbMoveOffset > thumbBeforeOffset) {
        thumbBeforeOffset += speedOfClickToScroll
        if (thumbBeforeOffset < thumbMoveOffset) {
          elScrollTop = thumbBeforeOffset / offsetSize * scrollSize
          thumbScrollTop = thumbBeforeOffset
          breakAnimation = false
        } else {
          elScrollTop = thumbBeforeOffset > thumbScrollTopMax ? elScrollTopMax : (thumbMoveOffset / offsetSize * scrollSize)
          thumbScrollTop = thumbBeforeOffset > thumbScrollTopMax ? thumbScrollTopMax : thumbMoveOffset
          breakAnimation = true
        }
      } else {
        thumbBeforeOffset -= speedOfClickToScroll
        if (thumbBeforeOffset > thumbMoveOffset) {
          elScrollTop = thumbBeforeOffset / offsetSize * scrollSize
          thumbScrollTop = thumbBeforeOffset
          breakAnimation = false
        } else {
          elScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset / offsetSize * scrollSize
          thumbScrollTop = thumbBeforeOffset < 0 ? 0 : thumbMoveOffset
          breakAnimation = true
        }
      }
      // scrollWrapper.style.transform = isY ? `translateY(${elScrollTop}px)` : `translateX(${elScrollTop}px)`
      setTranslate(scrollWrapper, direction, elScrollTop)
      thumb.style.transform = isY ? `translateY(${thumbScrollTop}px)` : `translateX(${thumbScrollTop}px)`
      if (isY) {
        el.scrollTop = elScrollTop
      } else {
        el.scrollLeft = elScrollTop
      }
      breakAnimation ? window.cancelAnimationFrame(animateScroll) : window.requestAnimationFrame(animateScroll)
    }
    window.requestAnimationFrame(animateScroll)
  }
}

const setTranslate = function (el, direction, value) {
  let { transform } = window.getComputedStyle(el)
  // let [a, b, c, d, x, y] = transform.match(/-?\d+\.?\d{0,}/g)
  let [a, b, c, d, x, y] = transform.slice(7, -1).split(',')
  if (direction === 'x') {
    el.style.transform = `matrix(${a},${b},${c},${d},${value},${y})`
  } else if (direction === 'y') {
    el.style.transform = `matrix(${a},${b},${c},${d},${x},${value})`
  }
}

export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
    el.style.overflow = 'hidden'
    const options = {
      direction: ['y'],
      scrollBarWidth: 6,
      scrollBarOffsetX: 0,
      scrollBarOffsetY: 0,
      scrollBarThumbColor: '#aab',
      scrollBarThumbBorderRadius: true,
      scrollBarTrackColor: 'transparent',
      scrollBarThumbHoverColor: '#889',
      speedOfClickToScroll: 20,
      ...value
    }
    let directionArr = []
    if (arg) {
      if (arg === 'all') {
        directionArr = ['x', 'y']
      } else {
        directionArr = [arg]
      }
    } else {
      directionArr = options.direction
    }
    const scrollWrapper = document.createElement('div')
    scrollWrapper.style.cssText = `position: absolute;top:0;left:0;bottom:0;right:0;transform:translate(0,0)`
    scrollWrapper.setAttribute('class', 'scroll__wrapper')
    el.appendChild(scrollWrapper)
    directionArr.map(item => {
      createScrollBarTrack(el, item, options, scrollWrapper)
    })
  }
}
