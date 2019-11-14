import { createDom } from './utils/dom'
const initContextMenu = function (el, options, e) {
  const { x, y } = e
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window
  const {
    menuList,
    width: menuWidth,
    hasIcon,
    hasSubMenu
  } = options
  let menu = document.querySelector('.__menu__wrapper')
  if (!menu) {
    menu = createDom('div', '__menu__wrapper')
    document.body.appendChild(menu)
  }
  let menuFragment = document.createDocumentFragment()
  menuList.map(item => {
    let menuItem = createDom('div', '__menu__item')
    let menuItemFragment = document.createDocumentFragment()
    if (hasIcon) {
      menuItemFragment.appendChild(createDom('span', '__menu__item-icon'))
    }
    menuItemFragment.appendChild(createDom('span', '__menu__item-label', item.label))
    menuItemFragment.appendChild(createDom('span', '__menu__item-tips', item.tips || ''))
    if (hasSubMenu) {
      menuItemFragment.appendChild(createDom('span', `__menu__item-right ${item.children ? 'show' : ''}`))
      if (item.children) {
        let menuSubWrapper = createDom('div', '__menu__sub__wrapper')
        let menuSubFragment = document.createDocumentFragment()
        item.children.map(subItem => {
          let menuSubItem = createDom('div', '__menu__sub__item')
          menuSubItem.innerHTML = `<span class="__menu__sub__item-label">${subItem.label}</span><span class="__menu__sub__item-tips">${subItem.tips || ''}</span>`
          if (subItem.fn) {
            menuSubItem.clickEvent = function (e) {
              e.stopPropagation()
              subItem.fn(document.elementFromPoint(x, y))
              document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
            }
            menuSubItem.addEventListener('click', menuSubItem.clickEvent, false)
          }
          menuSubFragment.appendChild(menuSubItem)
        })
        menuSubWrapper.appendChild(menuSubFragment)
        menuItemFragment.appendChild(menuSubWrapper)
      }
    }
    menuItem.appendChild(menuItemFragment)
    menuItem.onmousedown = function (e) {
      e.stopPropagation()
    }
    if (item.fn) {
      menuItem.clickEvent = function (e) {
        e.stopPropagation()
        item.fn(document.elementFromPoint(x, y))
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
      menuItem.addEventListener('click', menuItem.clickEvent, false)
    }
    menuFragment.appendChild(menuItem)
  })
  emptyElement(menu)
  menu.appendChild(menuFragment)
  let menuHeight = menu.offsetHeight
  let menuLeft = x + menuWidth + 1 > windowWidth ? windowWidth - menuWidth - 5 : x + 1
  let menuTop = y + menuHeight + 1 > windowHeight ? windowHeight - menuHeight - 5 : y + 1
  menu.style.top = `${menuTop}px`
  menu.style.left = `${menuLeft}px`
  menu.style.visibility = 'visible'
}
const emptyElement = function (el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild)
  }
}

export default {
  inserted: function (el, binding) {
    const { arg, value } = binding
    console.log(arg, value)
    const options = {
      width: 200,
      menuList: [],
      hasIcon: false,
      hasSubMenu: false,
      ...value
    }
    if (options.menuList.length > 0) {
      el.onmousedown = function (e) {
        e.stopPropagation()
        if (e.button === 2) {
          document.addEventListener('contextmenu', contextmenuEvent)
        } else {
          document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
        }
      }
      document.onmousedown = function () {
        document.removeEventListener('contextmenu', contextmenuEvent)
        document.querySelector('.__menu__wrapper') && (document.querySelector('.__menu__wrapper').style.visibility = 'hidden')
      }
      const contextmenuEvent = function (e) {
        e.preventDefault()
        initContextMenu(el, options, e)
      }
      for (let i = 0; i <= options.menuList.length; i++) {
        if (options.menuList[i].children && options.menuList[i].children.length > 0) {
          options.hasSubMenu = true
          break
        }
      }
    } else {
      throw new Error('At least set one menu list!')
    }
  }
}
