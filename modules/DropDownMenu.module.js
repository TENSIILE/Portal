export class DropDownMenu {

    static dropdown_menu = document.querySelector('.dropdown-menu')
    static dropdown      = document.querySelector('.dropdown')
    static main_btn_drop = document.querySelector('.dropdown #main-button')

    static init = () => {
        DropDownMenu.dropdown_menu = document.querySelector('.dropdown-menu')
        DropDownMenu.dropdown      = document.querySelector('.dropdown')
        DropDownMenu.main_btn_drop = document.querySelector('.dropdown #main-button')
    }

    static openDropdownMenu = () => {
        if (!DropDownMenu.dropdown_menu.children.length) return

        if (DropDownMenu.dropdown.classList.contains('show') && DropDownMenu.dropdown_menu.classList.contains('show')) {
            DropDownMenu.dropdown.classList.remove('show')
            DropDownMenu.dropdown_menu.classList.remove('show')
        } else {
            DropDownMenu.dropdown.classList.add('show')
            DropDownMenu.dropdown_menu.classList.add('show')
        }
    } 

    static setTextDropdownMenu = () => {
        for (let i = 0; i < DropDownMenu.dropdown_menu.children.length; i++) {
            DropDownMenu.dropdown_menu.children[i].addEventListener('click', () => {
                DropDownMenu.main_btn_drop.textContent = DropDownMenu.dropdown_menu.children[i].textContent
            })
        } 
    }
}