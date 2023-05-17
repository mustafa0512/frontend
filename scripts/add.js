let form = document.forms.todo
let student = document.querySelector('.student')
let bin = document.querySelector('.bin')
let edit = document.querySelector('.edit')
var today = new Date();
let fullYear = today.getFullYear();
let num = 0

let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')
let cancelBg = document.querySelector('.cancel')
let saveCh = document.querySelector('.save')
let for_edit_name = document.querySelector('.for_edit_name')
let for_edit_year = document.querySelector('.for_edit_year')

let students = []


const reload = (arr) => {
    student.innerHTML = ''

    for (let item of arr) {
        let student_info = document.createElement('div')

        let position = document.createElement('p')
        let name = document.createElement('p')
        let year = document.createElement('p')
        let for_image = document.createElement('div')

        let bin_img = document.createElement('img')
        let edit_img = document.createElement('img')

        student_info.classList.add('student_info')


        position.classList.add('position')
        position.innerHTML = item.position

        name.classList.add('name')
        name.innerHTML = item.name

        year.classList.add('year')
        year.innerHTML = fullYear - +item.year

        let yearVal = +item.year
        personOld = yearVal


        for_image.classList.add('for_image')

        bin_img.classList.add('bin')
        bin_img.src = "../assets/img/bin.png"
        bin_img.style = "width: 30px;"

        edit_img.classList.add('edit')
        edit_img.src = "../assets/img/edit.png"
        edit_img.style = "width: 30px;"

        student.append(student_info)
        for_image.append(bin_img, edit_img)
        student_info.append(position, name, year, for_image)


        bin_img.onclick = () => {
            students = students.filter(elem => elem.id !== item.id)
            reload(students)
        }

        edit_img.onclick = () => {
            saveCh.onclick = () => {
                saveModal()
                item.name = for_edit_name.value
            }
            openModal()
            reload(students)


        }





        const saveModal = () => {
            modal.style.display = "none"
            modal_bg.style.display = "none"
            modal.style.opacity = "0"
            modal_bg.style.opacity = "0"


            item.name = for_edit_name.value
            item.year = for_edit_year.value

            console.log(for_edit_name.value);
            reload(students)
        }

    }


}



form.onsubmit = (e) => {
    e.preventDefault()
    num++

    let task = {
        id: Math.random(),
        position: num,

    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })


    students.push(task)



    reload(students)

}

const openModal = () => {
    modal.style.display = "flex"
    modal.style.opacity = "1"
    modal_bg.style.display = "flex"
    modal_bg.style.opacity = "1"
}

const closeModal = () => {
    modal.style.display = "none"
    modal.style.opacity = "0"
    modal_bg.style.display = "none"
    modal_bg.style.opacity = "0"
}

reload(students)