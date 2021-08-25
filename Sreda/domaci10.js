// Napisati validaciju za formu koja sadrzi polja: 
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!

const divMain = document.querySelector('.main-div')
const forma = document.querySelector('.forma')
const nameInput = document.querySelector('#name')
const nameError = document.querySelector('.name-error')
const surnameInput = document.querySelector('#surname')
const surnameError = document.querySelector('.surname-error')
const passwordInput = document.querySelector('#password')
const passwordError = document.querySelector('.password-error')
const passwordConfInput = document.querySelector('#passwordConfirm')
const checkJs = document.querySelector('#js')
const checkHTML = document.querySelector('#HTML')
const checkCSS = document.querySelector('#CSS')
const checkboxError = document.querySelector('.checkbox-error')
const passwordConfError = document.querySelector('.passwordConf-error')
const selectInput = document.querySelector('#select')
const selectError = document.querySelector('.select-error')
const radioFemale = document.querySelector('#female')
const radioMale = document.querySelector('#male')
const radioError = document.querySelector('.radio-error')
const userIspis = document.querySelector('.userIspis')

let isValidate = true

function passwordHasNumber(str) {
    number = /\d/
    return number.test(str)
}

function passwordHasUpperCase(str) {
    chars = /[A-Z]/
    return chars.test(str)
}


forma.addEventListener('submit', (event) => {
    event.preventDefault()

    // name
    if (nameInput.value == '') {
        nameError.textContent = ''
        nameError.textContent = 'This field is required'
        isValidate = false
    } else if (nameInput.value.length < 5) {
        nameError.textContent = ''
        nameError.textContent = 'This field must include minimum 5 characters'
        isValidate = false
    } else if (nameInput.value.length > 15) {
        nameError.textContent = ''
        nameError.textContent = 'This field must include less than 15 characters'
        isValidate = false
    }
    //surname
    if (surnameInput.value == '') {
        surnameError.textContent = ''
        surnameError.textContent = 'This field is required'
        isValidate = false
    } else if (surnameInput.value.length < 5) {
        surnameError.textContent = ''
        surnameError.textContent = 'This field must include minimum 5 characters'
        isValidate = false
    } else if (surnameInput.value.length > 20) {
        surnameError.textContent = ''
        surnameError.textContent = 'This field must include less than 20 characters'
        isValidate = false
    }
    //password
    if (passwordInput.value == '') {
        passwordError.textContent = ''
        passwordError.textContent = 'This field is required'
        isValidate = false
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = ''
        passwordError.textContent = 'This field must include minimum 8 characters'
        isValidate = false
    } else if (!passwordHasNumber(passwordInput.value)) {
        passwordError.textContent = ''
        passwordError.textContent = 'This field must include a number'
        isValidate = false
    } else if (!passwordHasUpperCase(passwordInput.value)) {
        passwordError.textContent = ''
        passwordError.textContent = 'This field must include a uppercase'
        isValidate = false
    }
    //confirm password
    if (passwordConfInput.value == '') {
        passwordConfError.textContent = ''
        passwordConfError.textContent = 'This field is required'
        isValidate = false
    } else if (passwordConfInput.value.length < 8) {
        passwordConfError.textContent = ''
        passwordConfError.textContent = 'This field must include minimum 8 characters'
        isValidate = false
    } else if (!passwordHasNumber(passwordConfInput.value)) {
        passwordConfError.textContent = ''
        passwordConfError.textContent = 'This field must include a number'
        isValidate = false
    } else if (!passwordHasUpperCase(passwordConfInput.value)) {
        passwordConfError.textContent = ''
        passwordConfError.textContent = 'This field must include a uppercase'
        isValidate = false
    } else if (passwordConfInput.value != passwordInput.value) {
        passwordConfError.textContent = ''
        passwordConfError.textContent = 'Password did not match. Please try again.'
        isValidate = false
    }
    //checkbox
    // if (checkJs.checked || checkHTML.checked || checkCSS.checked) {
    //     isValidate
    // } else {
    //     checkboxError.textContent = ''
    //     checkboxError.textContent = 'At least one checkbox must be selected'
    //     isValidate = false
    // }

    if (isValidate) {
        let users = [{
            userName: nameInput.value.trim(),
            userSurname: surnameInput.value.trim(),
            userPassword: passwordInput.value,
            // userCourse: checkJs.value + checkCSS.value  + checkHTML.value,
            userCity: selectInput.options[selectInput.selectedIndex].text,
            userGender: radioFemale.value + radioMale.value
        }]

        users.forEach(user => {
            let p = document.createElement('p')
            p.innerHTML = ` First Name: ${user.userName} </br>
            Last Name: ${user.userSurname} </br>
            Password: ${user.userPassword} </br>
            Course: ${user.userCourse} </br>
            City: ${user.userCity} </br>
            Gender: ${user.userGender}
            `
            userIspis.appendChild(p)
        })

    }
    // userIspis.textContent = ''
    nameInput.value = ''
    surnameInput.value = ''
    passwordInput.value = ''
    passwordConfInput.value = ''
    // checkJs.checked = false
    // checkHTML.checked = false
    // checkCSS.checked = false
    selectInput.value = '0'
    radioMale.value = ''
    radioFemale.value = ''


})

