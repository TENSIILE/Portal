import { Cookie } from './Cookie.module.js'
import { Path } from './Path.module.js'
import { useHttp } from '../hooks/useHttp.hook.js'
import { Alert } from '../components/Alert.js'

Alert.init()

const request = useHttp()

const $ = $ => document.querySelector($)

export class Auth {

    static validateInput() {
        const array_inputs = [$('#login'), $('#email'), $('#password'), $('#name'), $('#surname'), $('#lastname')]

        const array_error = []

        array_inputs.forEach(input => {
            if (input.value.length < 4 || !input.validity.valid || !input.getAttribute('valid')) {
                array_error.push(true)
            }   

            if (!input.validity.valid) {
                input.classList.add('error')
            }
        }) 

        return !array_error.includes(true)
    }

    static async checkIsAdmin() {
        const data = JSON.stringify({id: Cookie.readCookie(Cookie.NAME_COOKIE)})
        const { statusAccount } = await request('../server/checkAccessAdmin.php', 'POST', data, null)

        if (statusAccount.toString() !== Cookie.readCookie(Cookie.NAME_TYPE_ACC).toString()) {
            Path.redirect('/auth.php')
        }
    }

    static async login() {
        const data = JSON.stringify({
            login: $('#login').value,
            password: $('#password').value,
        })

        const json = await request('../server/authorization.php', 'POST', data, null)

        Cookie.writeCookie(Cookie.NAME_COOKIE, json.userId) 
        Cookie.writeCookie(Cookie.NAME_TYPE_ACC, json.statusAccount)

        if (json.statusAccount.toString() === 'admin') {
            Path.redirect('/admin_panel.php')
        } else {
            Path.redirect('/personal_office.php?create_request')
        }
    }

    static logout() {
        Cookie.removeCookie(Cookie.NAME_COOKIE, null, true)
        Path.closedAccess()
    }

    static async signUp() {
        if ($('#password').value.trim().length >= 4 || $('#password_repeat').value.trim().length >= 4) {

            if ($('#password').value.toString() !== $('#password_repeat').value.toString()) {
                Alert.settings('Ошибка!', 'Пароли не совпадают!', 'alert-danger')
                return Alert.open()
            }
            
            if (Auth.validateInput()) {

                const data = JSON.stringify({
                    login: $('#login').value,
                    email: $('#email').value,
                    password: $('#password').value,
                    name: $('#name').value,
                    surname: $('#surname').value,
                    lastname: $('#lastname').value,
                })

                const json = await request('../server/registration.php', 'POST', data, null)
                
                Alert.settings('Успешно!', json.message, 'alert-success')
                Alert.open('/auth.php')
    
            } else {
                Alert.settings('Ошибка!', 'Введите корректные данные!', 'alert-danger')
                Alert.open()
            }
    
        } else {
            Alert.settings('Ошибка!', 'Длина пароля должна составлять больше 4 символов!', 'alert-danger')
            Alert.open()
        }
    }
}