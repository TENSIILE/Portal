import { Auth } from '../modules/Auth.module.js'

document.getElementById('signIn').addEventListener('click', Auth.login)