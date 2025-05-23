function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#icon img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/light-icon.jpg')
        img.setAttribute('alt', 'light icon')
    }

    else{
        img.setAttribute('src', './assets/icon.jpg')
    }
}
