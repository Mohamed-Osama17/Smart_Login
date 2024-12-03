



//&====================Toggle Start====================
var formContainer = document.querySelector('.Form-Container');
var registerBttn = document.querySelector('.register-bttn');
var loginBttn = document.querySelector('.login-bttn');



registerBttn.addEventListener('click', function () {

    formContainer.classList.add('active');
    // console.log(formContainer);


})

loginBttn.addEventListener('click', function () {

    formContainer.classList.remove('active');
    // console.log(loginBttn);


})
//&====================Toggle End====================







//&====================Variables====================
var regName = document.querySelector('.reg-name-input');
var regEmail = document.querySelector('.reg-email-input');
var regPassword = document.querySelector('.reg-password-input');
var registerBtn = document.getElementById('registerBtn');
var loginBtn = document.getElementById('loginBtn');
var logoutBtn = document.getElementById('logoutBtn');
var loginEmail = document.getElementById('loginEmail');
var loginPassowrd = document.getElementById('loginPassowrd');








//&====================Creat====================
registerBtn.addEventListener('click', function (eventInfo) {

    register();
})

var registerArray = [];

if (localStorage.getItem('users') == null) {
    registerArray = []
} else {
    registerArray = JSON.parse(localStorage.getItem('users'));
}


//&====================Registration====================
function register() {

    if (isEmpty() == false) {
        document.getElementById('required').innerHTML = ` <span class="text-light m-3">All inputs is required</span> `;
        return false;
    }

    //& to store all values as an object
    var register = {
        Name: regName.value,
        email: regEmail.value,
        password: regPassword.value,
    }

    //& then push this values into an array

    if (registerArray.length == 0) {

        registerArray.push(register);
        localStorage.setItem('users', JSON.stringify(registerArray));
        document.getElementById('required').innerHTML = `<span class="text-light m-3">Success</span>`;
        clearform();
        return true;
    }

    if (isNameExist == false) {
        documen.getElementById('required').innerHTML = `<span class="text-light m-3">UserName already exists</span>`;
    }

    if (isEmailExist() == false) {

        document.getElementById('required').innerHTML = `<span class="text-light m-3">Email already exists</span>`;

    }
    else {

        registerArray.push(register);
        localStorage.setItem('users', JSON.stringify(registerArray));
        document.getElementById('required').innerHTML = `<span class="text-light m-3">Success</span>`;
        clearform();
    }

    console.log(registerArray);
}

//& for checking inputs of Registration is empty or not
function isEmpty() {

    if (regName.value == '' || regEmail == '' || regPassword == '') {

        return false

    } else {
        return true
    }
}

//& for checking UserName is exist or not ?
function isNameExist() {
    for (var i = 0; i < registerArray.length; i++) {
        if (registerArray[i].Name.toLowerCase() == regName.value.toLowerCase()) {
            return false;
        }
    }
}

//& for checking Email is exist in local storage or not ?
function isEmailExist() {
    for (var i = 0; i < registerArray.length; i++) {
        if (registerArray[i].email.toLowerCase() == regEmail.value.toLowerCase()) {
            return false;
        }
    }
}

//& Clear the Registration Form
function clearform() {

    regName.value = null;
    regEmail.value = null;
    regPassword.value = null;
}

//& for checking inputs of Login or sign in is empty or not
function isLoginEmpty() {
    if (loginEmail.value == '' || loginPassowrd.value == '') {
        return false;
    } else {
        return true;
    }
}

//&====================Login====================
function login() {

    if (isLoginEmpty() == false) {

        document.getElementById('incorrect').innerHTML = ` <span class="text-light m-3">All inputs is required</span> `;
        return false;
    }

    var email = loginEmail.value;
    var password = loginPassowrd.value;

    for (var i = 0; i < registerArray.length; i++) {

        if (registerArray[i].email.toLowerCase() == email.toLowerCase()
            && registerArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionName', registerArray[i].Name)

            window.location.assign('home.html');
            alert('login successfully');


        } else {

            document.getElementById('incorrect').innerHTML =
                '<span class="p-2 text-light">incorrect email or password</span>';

        }
    }

}
loginBtn.addEventListener('click', function (eventInfo) {

    login();
    // console.log(login());

})






// to get base url (localhost)

// path = window.location.pathname.split('/');

// console.log(path);

// baseURL = '';


// for (var i = 0; i < path.length - 1; i++) {

//     baseURL += '/' + path[i];
// }

// console.log(baseURL);