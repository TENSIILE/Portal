import { Cookie } from '../modules/Cookie.module.js'
import { DropDownMenu } from '../modules/DropDownMenu.module.js'
import { Path } from './Path.module.js'
import { useHttp } from '../hooks/useHttp.hook.js'
import { Alert } from '../components/Alert.js'

Alert.init()

const request = useHttp()

const $ = $ => document.querySelector($)

export class Request {
    constructor() {
        this.$ = $ => document.querySelector($)
    }

    static getName = async () => {

        try {
            const data = JSON.stringify({ id: Cookie.readCookie(Cookie.NAME_COOKIE) })
        
            await request('../server/getDataUser.php', 'POST', data, null, json => {
                $('#name-user').textContent = json.data
                Cookie.writeCookie(Cookie.NAME_LOGIN, json.data)
            }, true)
        } catch (e) {
            Path.redirect('/auth.php')
        }
    }

    static getCategories = async (exec_loading_to_dropDown = true) => {
        const response = await request('../server/getTitleCategories.php', 'POST', null, null, json => {
    
            const { data } = json

            if (exec_loading_to_dropDown) {
                data.map(caterory => {
                    const element = document.createElement('button')
                    element.classList.add('dropdown-item')
                    element.innerHTML = caterory.title
                    DropDownMenu.dropdown_menu.append(element)
                })
    
                DropDownMenu.setTextDropdownMenu()
            }
        }, true)

        return response.data
    }

    static sendRequest = async () => {
        
        if (DropDownMenu.main_btn_drop.textContent.includes('Выберите категорию')) {
            Alert.settings('Ошибка!', 'Выберите категорию', 'alert-danger')
            return Alert.open()
        }

        if (!$('#title_request').value.trim().toString()) {
            Alert.settings('Ошибка!', 'Напишите название заявки!', 'alert-danger')
            return Alert.open()
        }

        const form = new FormData()
        form.append('image', $('#upload_img').files[0])

        const data = JSON.stringify({
            id: Cookie.readCookie(Cookie.NAME_COOKIE),
            title: $('#title_request').value.trim(),
            category: DropDownMenu.main_btn_drop.textContent,
            description: $('#description_request').value.trim(),
        })

        const res = await request('../server/createRequest.php', 'POST', data, null, json => {
            Alert.settings('Успешно!', json.message, 'alert-success')
            Alert.open('/personal_office.php?my_created_requests')
        })

        form.append('id', res.data)
        
        await fetch('../server/uploadImage.php', { method: 'POST', body: form })
    }   

    static getRequest = async () => {
        const data = JSON.stringify({ id: Cookie.readCookie(Cookie.NAME_COOKIE) })
        
        return await request('../server/getRequest.php', 'POST', data, null)    
    }

    static getRequestAll = async () => {
        return await request('../server/getRequestsAll.php', 'POST', null, null)
    }

    static removeRequest = async id => {
        const data = JSON.stringify({ id, ownerId: Cookie.readCookie(Cookie.NAME_COOKIE) })
        
        return await request('../server/removeRequest.php', 'POST', data, null)   
    }

    static cancelMadeRequest = async id => {
        const data = JSON.stringify({ id, date: new Date().toLocaleDateString() })
        return await request('../server/cancelMadeRequest.php', 'POST', data, null)
    }

    static acceptMadeRequest = async id => {
        const data = JSON.stringify({ id, date: new Date().toLocaleDateString() })
        return await request('../server/acceptMadeRequest.php', 'POST', data, null)
    }

    static createCategory = async title => {
        const data = JSON.stringify({ title })
        return await request('../server/createCategory.php', 'POST', data, null)
    }

    static removeCategory = async id => {
        const data = JSON.stringify({ id })
        return await request('../server/removeCategory.php', 'POST', data, null)
    }

    static checkValidLoginUser = async login => {
        const data = JSON.stringify({ login })
        return await request('../server/checkValidLoginUser.php', 'POST', data, null)
    }

    static removeRequestByCategory = async id => {
        const data = JSON.stringify({ id })
        return await request('../server/removeRequestByCategory.php', 'POST', data, null)
    }
}