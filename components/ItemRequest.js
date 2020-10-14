export class ItemRequest {
    constructor($where_render = null, options = {}, abilityEdit = false) {
        this.parentComponent  = document.querySelector($where_render)

        this.id               = options.id
        this.title            = options.title
        this.category         = options.categoryId
        this.description      = options.description
        this.status           = options.status

        this.abilityEdit     = abilityEdit

        if (!options.image)
            this.image = '../upload/default.jpg'
        else 
            this.image = '../upload/' + options.image
       
        this.arguments = [this.id, this.image, this.title, this.category, this.description, this.status]
        this.checkEmpty()
    }   

    checkEmpty() {
        if (!this.arguments.includes(undefined)) {
            this.render()
        } 
    }

    setStatusPicture() {
        switch (this.status) {
            case 'Готово':
                return 'done'
            case 'Отклонено':
                return 'reject'
            default:
                return 'process'
        }
    }

    render() {
        this.parentComponent.innerHTML +=
        `
            <div class="item" id=${this.id}>
                <div class="picture ${this.setStatusPicture()} ">
                    <img src="upload/${this.image}" alt="">
                </div>
                <div class="title">
                    <h4>${this.title}</h4>
                    <span class='badge'>${this.category}</span>
                </div>
                <div class="content-between">
                    <div class="description">
                        <p>${this.description}</p>
                    </div>
                    <div class="action">
                        ${this.abilityEdit 
                            ? 
                                `<button id='acceptRequestButton'>
                                    <i class='fa fa-check' aria-hidden='true'></i>
                                </button> 
                                <button id='deleteRequestButton'>
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </button>` 
                                
                            :   `<button id='deleteRequestButton'>
                                    <i class='fa fa-trash-o' aria-hidden='true'></i>
                                </button>`
                        }
                        
                    </div>
                </div>
            </div>
        `
    }
}