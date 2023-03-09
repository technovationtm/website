import './assets/scss/style.scss'
import {i18next, keys} from './i18next'

document.addEventListener('DOMContentLoaded', () => keys.map(k => {
    const el = document.getElementById(k)
    if (el) {
        el.innerHTML = i18next.t(k)
    }
}))