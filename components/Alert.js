import { Path } from '../modules/Path.module.js'

export class Alert {
    static exec_redirect = false
    static path_redirect = ''

    static array_status = ['alert-danger', 'alert-success', 'alert-warning']

    static init() {
        this.$ = $ => document.querySelector($) 
        
        this.alert  = this.$('.alert')
        this.header = this.alert.querySelector('strong')
        this.text   = this.alert.querySelector('p')

        this.btn_close = this.alert.querySelector('.close')

        this.btn_close.addEventListener('click', Alert.close)       
    }

    static settings(header, text, type = 'alert-warning') {
        
        Alert.array_status.forEach(status => {
            this.alert.classList.remove(status)
        })

        this.header.innerHTML = header
        this.text.innerHTML   = text
        this.alert.classList.add(type)
    }

    static open(redirect = null) {
        this.alert.classList.add('visible')

        if (!!redirect) {
            Alert.exec_redirect = true
            Alert.path_redirect = redirect
        }
    }

    static close() {
        document.querySelector('.alert').classList.remove('visible')

        if (Alert.exec_redirect) {
            Path.redirect(Alert.path_redirect)
        }

        Alert.exec_redirect = false
    }
}