import Scrollbar from 'smooth-scrollbar'

export function enableSmoothScroll(all) {
    // More info => https://idiotwu.github.io/smooth-scrollbar/
    const smoothScrollOptions = {
        damping: 0.3
    }

    all.forEach((el) => {
        Scrollbar.init(el, smoothScrollOptions)
    })
}