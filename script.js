let getClass = i => document.querySelector(i);

let nameRegExp = /^[a-zA-Z]{1,20}$/;
let passRegExp = /^\w{8,15}$/;
let emailRegExp = /^[\w-\.]+@[a-zA-Z]+\.(ua|com)$/;

let testFirstName

getClass('.firstName').oninput = function () {
    testFirstName = nameRegExp.test(this.value)

    if (testFirstName) {
        validation()
        valid(getClass('.firstName'))
        getClass('.prompt1').classList.add(`hide`)

    }
    else {
        validation()
        invalid(getClass('.firstName'))
        getClass('.prompt1').classList.remove(`hide`)
    }
}

let testSecondName
getClass('.secondName').oninput = function () {
    testSecondName = nameRegExp.test(this.value)
    if (testSecondName) {
        validation()
        valid(getClass('.secondName'))
        getClass('.prompt2').classList.add(`hide`)

    }
    else {
        validation()
        invalid(getClass('.secondName'))
        getClass('.prompt2').classList.remove(`hide`)

    }
}

let testEmail
getClass('.email').oninput = function () {
    testEmail = emailRegExp.test(this.value)
    if (testEmail) {
        validation()
        valid(getClass('.email'))
        getClass('.prompt3').classList.add(`hide`)

    }
    else {
        invalid(getClass('.email'))
        validation()
        getClass('.prompt3').classList.remove(`hide`)

    }
}

let testPass
getClass('.password').oninput = function () {
    testPass = passRegExp.test(this.value)
    if (testPass) {
        validation()
        valid(getClass('.password'))
        getClass('.prompt4').classList.add(`hide`)

    }
    else {
        validation()
        invalid(getClass('.password'))
        getClass('.prompt4').classList.remove(`hide`)

    }
}

getClass('.checkbox').onclick = () => validation()

function validation() {
    if ((testPass && testEmail && testFirstName && testSecondName && getClass('.checkbox').checked) === true) {
        getClass(`.signUp`).disabled = false
        getClass(`.signUp`).style.backgroundColor = "blue"
    }
    else {
        getClass(`.signUp`).disabled = true
        getClass(`.signUp`).style.backgroundColor = "rgb(111, 111, 250)"
    }
}

getClass(`.signUp`).onclick = function () {
    getClass(`.success-blok`).classList.remove(`hide`)
    event.preventDefault()
}
getClass(`.start-exploting`).onclick = function () {
    getClass(`.success-blok`).classList.add(`hide`);
    getClass(`.form`).reset()
    removeAll()
}

function removeAll() {
    getClass('.checkbox').checked = false;
    getClass(`.signUp`).disabled = true
    getClass('.firstName').classList.remove(`valid`)
    getClass('.secondName').classList.remove(`valid`)
    getClass('.email').classList.remove(`valid`)
    getClass('.password').classList.remove(`valid`)
    getClass('.firstName').style.border = `none`
    getClass('.secondName').style.border = `none`
    getClass('.email').style.border = `none`
    getClass('.password').style.border = `none`
    getClass(`.signUp`).style.backgroundColor = "rgb(111, 111, 250)"
    testPass = false;
    testEmail = false;
    testFirstName = false;
    testSecondName = false;
}
function invalid(elem) {
    elem.classList.remove(`valid`)
    elem.classList.add(`invalid`)
}

function valid(elem) {
    elem.classList.add(`valid`)
    elem.classList.remove(`invalid`)
}