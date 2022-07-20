class MobileMenu {
    constructor() {
        this.menuButton = document.querySelector('.hamburger')
        this.mobileMenu = document.querySelector('.navBar__menu__wrap')
        console.log(document.querySelector('.navBar__menu__mobile'))
        this.events()
    }

    events() {
        this.menuButton.addEventListener('click', () => this.toggleMenu())
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('revealed')
        console.log(this.mobileMenu)

    }
}

export default MobileMenu