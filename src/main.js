import { createApp } from 'vue'
import Banner from './components/Banner.vue'
import './assets/scss/style.scss'
import 'bootstrap'

const toggleColorScheme = (e) => {
    const html = document.documentElement
    const colorScheme = e.matches ? "dark" : "light";
    html.setAttribute('data-bs-theme', colorScheme)
}

if (window.matchMedia) {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    toggleColorScheme(prefersColorScheme)
    prefersColorScheme.addEventListener('change', toggleColorScheme)
}

const bannerEl = document.querySelector("#banner");
createApp(Banner, { intro: JSON.parse(bannerEl.dataset.intro), prefix: bannerEl.dataset.prefix }).mount('#banner')