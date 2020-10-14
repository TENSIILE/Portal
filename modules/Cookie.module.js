export class Cookie {

    static NAME_COOKIE   = 'portal-posad'
    static NAME_LOGIN    = Cookie.NAME_COOKIE + '__name-login'
    static NAME_TYPE_ACC = Cookie.NAME_COOKIE + '__type-account'

    static writeCookie(name, val, expires = 3600) {
        const date = new Date
        date.setDate(date.getDate() + expires)
        document.cookie = name + "=" + val + "; path=/; expires=" + date.toUTCString()
    }

    static readCookie(name) {
        const matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    static removeCookie(name, time = -3600, removeAll = false) {
        Cookie.writeCookie(name, '', time)

        if (removeAll) {
            Cookie.removeCookieAll()
        }
    }

    static removeCookieAll() {
        const array_cookies = [Cookie.NAME_COOKIE, Cookie.NAME_LOGIN, Cookie.NAME_TYPE_ACC]
        array_cookies.map(cookie => Cookie.writeCookie(cookie, '', -3600))
    }

    static checkCookie() {
        return !!Cookie.readCookie(Cookie.NAME_COOKIE)
    }
}