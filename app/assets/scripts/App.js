import '../styles/styles.css'
import RevealOnScroll from './modules/RevealOnScroll'

let revealOnScroll = new RevealOnScroll();

if (module.hot) {
    module.hot.accept()
}