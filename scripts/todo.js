let form = document.forms.todo
let container = document.querySelector('.container')
let inputGroup_input = document.querySelector('.inputGroup_input')
let saveCh = document.querySelector('.save')
let modal_bg = document.querySelector('.modal_bg')
let modal = document.querySelector('.modal')
let cancelBg = document.querySelector('.cancel')

let todos = [
    {
        id: 1,
        task: "купить тесла",
        isDone: false,
        time: "10:34"
    },
    {
        id: 2,
        task: "купить луну",
        isDone: false,
        time: "09:34"
    },
    {
        id: 3,
        task: "поиграть в csgo",
        isDone: false,
        time: "12:34"
    }
]

const reload = (arr) => {
    container.innerHTML = ""

    for (let item of arr) {
        let div = document.createElement('div')
        let topDiv = document.createElement('div')
        let img = document.createElement('img')
        let changeBtn = document.createElement('img')
        let span = document.createElement('span')
        let time = document.createElement('time')
        let imgblock = document.createElement('div')

        if (item.isDone === true) {
            div.classList.add('done')
        }
        div.classList.add('item')
        topDiv.classList.add('top')

        imgblock.classList.add('imgblock')

        span.innerHTML = item.task
        time.innerHTML = item.time

        imgblock.append(img, changeBtn)

        img.src = "../assets/icons/Group 14.svg"
        changeBtn.src = "../assets/icons/edit (2).svg"

        topDiv.append(span, imgblock)
        div.append(topDiv, time)
        container.append(div)

        img.onclick = () => {
            todos = todos.filter(elem => elem.id !== item.id)
            reload(todos)
        }
        span.onclick = () => {
            item.isDone = !item.isDone

            reload(todos)
        }

        

        changeBtn.onclick = () => {
            openModal()
            saveCh.onclick = () => {
                saveModal()
            }
        }

        cancelBg.onclick = () => {
            closeModal()
        }

        modal_bg.onclick = () => {
            closeModal()
        }

          const saveModal = () => {
            modal.style.display = "none"
            modal.style.opacity = "0"
            modal_bg.style.display = "none"
            modal_bg.style.opacity = "0"

            item.task = inputGroup_input.value
            
            reload(todos)
        }

        

    }

}



form.onsubmit = (e) => {
    e.preventDefault()

    let task = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })


    todos.push(task)


    reload(todos)

}

const openModal = () => {   
    modal.style.display = "block"
    modal.style.opacity = "1"
    modal_bg.style.display = "block"
    modal_bg.style.opacity = "1"

    
}

const closeModal = () => {
    modal.style.display = "none"
    modal.style.opacity = "0"
    modal_bg.style.display = "none"
    modal_bg.style.opacity = "0"
}

reload(todos)