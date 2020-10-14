const $ = $ => document.querySelector($)

import { ContentAdmin } from '../components/ContextAdmin.js'

new ContentAdmin('div.content', Path.getRoutes)

import { Path } from '../modules/Path.module.js'
import { Auth } from '../modules/Auth.module.js'
import { ItemRequest } from '../components/ItemRequest.js'
import { Request } from '../modules/Request.module.js'
import { Categories } from '../components/Categories.js'

Auth.checkIsAdmin()

Path.closedAccess()

Path.routesAdmin()

class Routes {
    static define = async () => {
        await Request.getName()

        if (Path.getRoutes === 'made_requests') {
            const { data } = await Request.getRequestAll()

            if (!data.length) {
                return $('#main-data-information').innerHTML = '<span class="informer">Заявок не найдено!</span>'
            }
            
            for (let i = 0; i < data.length; i++) {
                new ItemRequest('#main-data-information', data[i], true)
            }

            const itemsAll = [...document.querySelectorAll('.item')]

            itemsAll.forEach(item => {

                const button_remove_item = item.querySelector('#deleteRequestButton')

                button_remove_item.addEventListener('click', async () => {
                    await Request.cancelMadeRequest(item.id)
                    
                    item.classList.remove('accept')
                    item.classList.add('cancel')

                    ContentAdmin.update()
                    await Routes.define()
                })

                const button_accept_item = item.querySelector('#acceptRequestButton')

                button_accept_item.addEventListener('click', async () => {
                    await Request.acceptMadeRequest(item.id)
                    
                    item.classList.remove('cancel')
                    item.classList.add('accept')

                    ContentAdmin.update()
                    await Routes.define()
                })
            })

            const combobox = document.querySelector('.header_content #combobox')

            combobox.addEventListener('change', async () => {
                if (combobox.value == 'Отклоненные') {
                    itemsAll.map(item => {
                        const status = item.querySelector('.picture')
                        
                        if (!status.classList.contains('reject')) {
                            item.remove()
                        }
                        
                    })
                } else if (combobox.value == 'Принятые') {
                    itemsAll.map(item => {
                        const status = item.querySelector('.picture')
                        
                        if (!status.classList.contains('done')) {
                            item.remove()
                        }
                        
                    })
                } else if (combobox.value == 'Новые') {
                    itemsAll.map(item => {
                        const status = item.querySelector('.picture')
                        
                        if (!status.classList.contains('process')) {
                            item.remove()
                        }
                        
                    })
                } else {
                    Routes.define()
                }
            })

        } else if (Path.getRoutes === 'categories') {
            const categories = new Categories('#main-categories')
            await categories.getCategoriesAsync()
            categories.render()

            $('#save-categories').addEventListener('click', async () => {
                await Request.createCategory($('#text-categories').value.trim())
                await Routes.define()
            })

            const items = document.querySelectorAll('.menu-categories ul li')

            items.forEach(item => {
                const button = item.querySelector('.deleteCategories')

                button.addEventListener('click', async () => {
                    await Request.removeCategory(item.id)
                    await Request.removeRequestByCategory(item.id)
                    await Routes.define()
                })
            })
        }
    }
}

Routes.define()



$('#btn-exit').addEventListener('click', Auth.logout)
 
const user        = document.querySelector('.user svg')
const contextmenu = document.querySelector('.contextmenu')

const openContextmenu = () => {
    
    if (contextmenu.classList.contains('open')) {
        return contextmenu.classList.remove('open')
    } 

    contextmenu.classList.add('open')
}

user.addEventListener('click', openContextmenu)


const uploadImage = e => {
    const uploaded_image = document.querySelector('.uploaded_image')
    const file           = e.target.files[0]
    const url            = URL.createObjectURL(file)

    uploaded_image.src = url
    uploaded_image.classList.add('visible')
}

try {
    $('#upload_img').addEventListener('change', uploadImage)
} catch (error) {}
