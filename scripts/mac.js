let storages = document.querySelectorAll('.storage')
let val = document.querySelector('.value')
let btns = document.querySelectorAll('.btn')
let img = document.querySelector('.Macbock-img')
let gray = document.querySelector('.gray')
let white = document.querySelector('.white')
let valOne = document.querySelector('.value-one')

let one = document.querySelector('.last-cost')
let two = document.querySelector('.last-cost-one')
let three = document.querySelector('.last-cost-two')

let cost = document.querySelectorAll('p[data-cost]')
let orgCost = 1999

storages.forEach(btn => {
    btn.onclick = () => {
        storages.forEach(btn => btn.classList.remove('storage-active'))

        btn.classList.add('storage-active')

        if(btn.classList.contains('storage-first')){
            valOne.innerHTML = "$1,999"
        }else if (btn.classList.contains('storage-second')){
            valOne.innerHTML = "$2,199"
        }else if (btn.classList.contains('storage-third')){
            valOne.innerHTML = "$2,599"
        }else if (btn.classList.contains('storage-fourth')){
            valOne.innerHTML = "$3,199"
        }else{
            valOne.innerHTML = "$1,999"
        }
    }
})  



btns.forEach(btn => {
    btn.onclick = () => {
        if (btn.classList.contains('gray')) {
            val.innerHTML = 'Space Gray'
            btn.classList.remove('white')
            btn.classList.add('.white-active')
            img.classList.remove('Macbock-img')
            img.classList.add('Macbock-img-active')
            gray.classList.remove('gray')
            gray.classList.add('gray-active')
            white.classList.remove('white')
            white.classList.add('white-active')

        } else {
            val.innerHTML = 'White'
            btn.classList.remove('.white-active')
            btn.classList.add('white')
            img.classList.remove('Macbock-img-active')
            img.classList.add('Macbock-img')
            gray.classList.remove('gray-active')
            gray.classList.add('gray')
            white.classList.toggle('white-active')
            white.classList.add('white')
        }
    }
})


