export class Content {
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
        if (this.where_component === 'create_request') {
            this.parentComponent.innerHTML =
            `
                <h3>Создание заявки</h3>
                <div class="data mini">
                    <div class="inline d-flex">
                        <div class="input-group flex-nowrap">
                            <input type="text" id='title_request' class="form-control" placeholder="Напишите название заявки">
                        </div>
                        <div class="dropdown input-group">
                            <button class="btn btn-secondary dropdown-toggle" id='main-button' type="button">
                                Выберите категорию заявки
                            </button>
                            <div class="dropdown-menu" id='dropdown-menu'>
                            
                            </div>
                        </div>
                    </div>
                    <p>Описание</p>
                    <div class="input-group flex-nowrap">
                        <textarea type="text" id='description_request' class="form-control" placeholder="Опишите суть проблемы"></textarea>
                    </div>
                    <p>Загрузка изображений</p>
                    <label class="drag-drop__loading-image" for='upload_img'>
                        <input type="file" id='upload_img' accept="image/jpeg, image/png, image/bmp, image/jpg">
                        <img src="static/icons/photo-frame.svg" alt="">
                        <p>Изображение не загружено</p>
                        <img src="static/img/lavra.png" class='uploaded_image' alt="">
                    </label>
                    <div class="list-btn">
                        <button class="btn btn-light" id='cancel'>Отмена</button>
                        <button class="btn btn-purple" id='save_bid'>Сохранить</button>
                    </div>
                </div>
            `
        } else {
            this.parentComponent.innerHTML =
            `
                <h3>Просмотр своих заявок</h3>
                <div class="data w-100" id='main-data-information'>
                    
                </div>
            `
        }
    }
}