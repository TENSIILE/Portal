export class ContentAdmin {
    constructor($where_render = null, where_component) {
        this.parentComponent  = document.querySelector($where_render)

        this.where_component  = where_component

        this.render()
    }   

    static update() {
        const mainDataInfo = document.querySelector('#main-data-information')
        const childrens    = [...mainDataInfo.children]
        childrens.forEach(child => child.remove())
    }

    render() {
        if (this.where_component === 'made_requests') {
            this.parentComponent.innerHTML =
            `
                <div class='header_content'>
                    <h3>Сделанные заявки</h3>
                    <select id='combobox'>
                        <option selected>Выберите фильтр</option>
                        <option>Отклоненные</option>
                        <option>Новые</option>
                        <option>Принятые</option>
                    </select>
                </div>
                <div class="data w-100" id='main-data-information'>
                    
                </div>
            `
        } else {
            this.parentComponent.innerHTML =
            `
                <h3>Категории</h3>
                <div class="data w-100" id='main-categories'>
                    
                </div>
            `
        }
    }
}