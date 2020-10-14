import { Cookie } from '../modules/Cookie.module.js'

const $ = $ => document.querySelector($)

export class Path {
    static redirect(url) {
        window.location.replace(url)
        Path.routes()
    }

    static closedAccess() {
        if (!Cookie.checkCookie()) {
            window.location.replace('/index.php')
        }
    }

    static routes() {
        try {
        
            const menu = [...$('#main-list-menu').querySelectorAll('li')]

            const highlight = name => {
                menu.map(item => item.classList.contains('active') ? item.classList.remove('active') : null)
                menu.map(item => item.classList.contains(name) ? item.classList.add('active') : null)
            }            

            switch (window.location.search.split('?')[1]) {
                case 'create_request':
                    highlight('create_request')
                    break;
                case 'my_created_requests':
                    highlight('my_created_requests')
                    break;
                default:
                    window.location.replace('/personal_office.php?create_request')
                    break;
            }
        } catch (error) {} 
    }

    static routesAdmin() {
        try {
            const menu = [...$('#main-list-menu').querySelectorAll('li')]

            const highlight = name => {
                menu.map(item => item.classList.contains('active') ? item.classList.remove('active') : null)
                menu.map(item => item.classList.contains(name) ? item.classList.add('active') : null)
            }            

            switch (window.location.search.split('?')[1]) {
                case 'made_requests':
                    highlight('made_requests')
                    break;
                case 'categories':
                    highlight('categories')
                    break;
                default:
                    window.location.replace('/admin_panel.php?made_requests')
                    break;
            }
        } catch (error) {}
    }

    static get getRoutes() {
        return window.location.search.split('?')[1]
    }
}