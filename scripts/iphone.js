let link = document.querySelector('.for_help')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
let btns = document.querySelectorAll('.close-opep-btns')
let rounds = document.querySelectorAll('div[data-color]')
let img = document.querySelector('.main-img')
let color = document.querySelector('.main-right-color-one')

let phones = {
    green: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-storage-select-202207-6-7inch-alpinegreen?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1655144562452",
    silver: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-silver?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1654897428563",
    gold: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-gold?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1654897336104",
    graphite: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-graphite?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1654897380792",
    blue: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-finish-select-202207-6-7inch-sierrablue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1655144511904"
}

rounds.forEach(btn => {

    btn.onclick = () => {
        let key = btn.getAttribute('data-color')
        img.style.backgroundImage = `url("${phones[key]}")`
    }

    btn.onmouseenter = () => {
        let key = btn.getAttribute('data-color')
        color.innerHTML = `Color - ${key}`
    }
    
    btn.onmouseleave = () => {
        color.innerHTML = `Color`
    }

})


function click() {
    modal.style.display = "block"
}

function closeNone() {
    modal.style.display = "none"
}

link.onclick = () => {
    click()
}

close.onclick = () => {
    closeNone()
}


