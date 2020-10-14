const $ = $ => document.querySelector($)

import { Content } from '../components/Content.js'

new Content('div.content', Path.getRoutes)

import { Path } from '../modules/Path.module.js'
import { Auth } from '../modules/Auth.module.js'
import { ItemRequest } from '../components/ItemRequest.js'
import { Request } from '../modules/Request.module.js'
import { DropDownMenu } from '../modules/DropDownMenu.module.js'

Auth.checkIsAdmin()

Path.closedAccess()

Path.routes()

class Routes {
    static define = async () => {
        await Request.getName()

        if (Path.getRoutes === 'my_created_requests') {
            const { data } = await Request.getRequest()

            if (!data.length) {
                return $('#main-data-information').innerHTML = '<span class="informer">Ваших заявок не найдено!</span>'
            }
            
            for (let i = 0; i < data.length; i++) {
                new ItemRequest('#main-data-information', data[i])
            }

            const itemsAll = [...document.querySelectorAll('.item')]

            itemsAll.forEach(item => {

                const button_remove_item = item.querySelector('#deleteRequestButton')

                button_remove_item.addEventListener('click', async () => {
                    await Request.removeRequest(item.id)
                    Content.update()
                    await Routes.define()
                })
            })

        } else if (Path.getRoutes === 'create_request') {

            DropDownMenu.init()
            DropDownMenu.dropdown.addEventListener('click', DropDownMenu.openDropdownMenu)

            Request.getCategories()

            $('#save_bid').addEventListener('click', Request.sendRequest)

            $('#cancel').addEventListener('click', () => {
                const uploaded_image = document.querySelector('.uploaded_image')
                uploaded_image.classList.remove('visible')

                $('#title_request').value       = ''
                $('#main-button').innerText     = 'Выберите категорию заявки'
                $('#upload_img').files
                $('#description_request').value = ''
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
