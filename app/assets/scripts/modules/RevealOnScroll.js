import { throttle } from "lodash"

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item')
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle)
    }

    calcCaller() {
        console.log("function run")
        this.itemsToReveal.forEach(el => {
            this.calculateIfScrolledTo(el)
        })
    }

    calculateIfScrolledTo(el) {
        console.log("element was calculated")
        let scrollPercent = (el.getBoundingClientRect().y/window.innerHeight) * 100
        if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible")
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach((item) => {
            item.classList.add('reveal-item')
        })
    }
}

export default RevealOnScroll;