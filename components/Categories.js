import { Request } from '../modules/Request.module.js'

export class Categories {
    constructor($where_render = null) {
        this.parentComponent  = document.querySelector($where_render)
    }

    async getCategoriesAsync() {
        this.categories       = await Request.getCategories(false)
        this.outputCategories = ''

        this.categories.map(category => {
            this.outputCategories += `
                <li id='${category.id}' class='item-category'>
                    <p>${category.title}</p>
                    <button class='deleteCategories'>
                        <i class='fa fa-trash-o' aria-hidden='true'></i>
                    </button>
                </li>
            `
        })
    }

    render() {
        this.parentComponent.innerHTML = `
            <div class="menu-categories">
                <ul>
                    ${this.outputCategories}
                </ul>
            </div>
            <div class='control-categories'>
                <p>Название категории</p>
                <div class="input-group flex-nowrap">
                    <input type="text" name='text-categories' id='text-categories' class="form-control" placeholder="Введите название категории"
                aria-describedby="addon-wrapping">
                </div>
                <button class='btn btn-primary btn-purple' id='save-categories'>Сохранить</button>
            </div>
        `
    }
}