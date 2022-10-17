import { defineNuxtPlugin, useNuxtApp } from '#imports'
import type { RouterConfig } from '@nuxt/schema'

function shouldScrollToTop(route) {
  const prop = 'components'
  const Pages = Array.prototype.concat.apply([], route.matched.map((m) => {
    return Object.keys(m[prop]).map((key) => {
      return m[prop][key]
    })
  }))

  if (Pages.length === 1) {
    const { options = {} } = Pages[0]
    return options.scrollToTop !== false
  }
  return Pages.some(({ options }) => options && options.scrollToTop)
}

export default defineNuxtPlugin((nuxtApp) => {
  (nuxtApp.$router.options as RouterConfig).scrollBehavior = async (to, from, savedPosition) => {
    // If the returned position is falsy or an empty object, will retain current scroll position
    let position: ReturnType<RouterConfig['scrollBehavior']> = false
    const isRouteChanged = to !== from

    // savedPosition is only available for popstate navigations (back button)
    if (savedPosition) {
      position = savedPosition
    } else if (isRouteChanged && shouldScrollToTop(to)) {
      position = { top: 0, left: 0 }
    }

    return new Promise((resolve) => {
      // wait for the out transition to complete (if necessary)
      setTimeout(() => {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        if (to.hash) {
          let hash = to.hash
          // CSS.escape() is not supported with IE and Edge.
          if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
            hash = '#' + window.CSS.escape(hash.substring(1))
          }
          try {
            const el = document.querySelector(hash)
            if (el) {
              // scroll to anchor by returning the selector
              position = { el: hash }
              // Respect any scroll-margin-top set in CSS when scrolling to anchor
              const y = Number(getComputedStyle(el)['scroll-margin-top']?.replace('px', ''))
              if (y) {
                position['offset'] = { y }
              }
            }
            if (position) position['behavior'] = 'smooth'
          } catch (e) {
            console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
          }
        }

        resolve(position)
      }, 250)
    })
  }
})