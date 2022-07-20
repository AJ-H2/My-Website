import '../styles/styles.css'
import RevealOnScroll from './modules/RevealOnScroll'
import MobileMenu from './modules/MobileMenu'

let revealOnScroll = new RevealOnScroll();
new MobileMenu()

if (module.hot) {
    module.hot.accept()
}