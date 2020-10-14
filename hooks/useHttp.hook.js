import { Alert } from '../components/Alert.js'

Alert.init()

export function useHttp() {
    const _headers = {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }

    return async function request(url, method, body = {}, headers, callback = () => {}, offError = false) {
        if (headers === null) headers = _headers

        const data = await fetch(url, {
            method, 
            body, 
            headers,
            mode:'no-cors'
        })

        try {

            const json = await data.json()

            if (json.hasOwnProperty('status')) {
                throw new Error(json.message)
            } 
            
            callback(json)

            return json
           
        } catch (e) {
            Alert.settings('Ошибка!', e.message, 'alert-danger')
            if (!offError) Alert.open()
            throw e
        }
    }
}