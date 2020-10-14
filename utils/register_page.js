import { Auth } from '../modules/Auth.module.js'
import { Alert } from '../components/Alert.js'
import { Request } from '../modules/Request.module.js'

const btn_reg = document.getElementById('reg')
btn_reg.addEventListener('click', Auth.signUp)

const checkbox = document.querySelector('#check-privacy')

checkbox.addEventListener('change', () => {
    btn_reg.disabled = !checkbox.checked
})

const login_input = document.querySelector('input[type="text"]#login')

login_input.addEventListener('blur', async () => {
    const { message, valid } = await Request.checkValidLoginUser(login_input.value.trim())

    if (!valid) {
        login_input.setAttribute('valid', false)
        login_input.value = ''

        Alert.settings('Ошибка!', message, 'alert-danger')
        Alert.open()
    } else 
        login_input.setAttribute('valid', true)    
})




