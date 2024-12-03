
var logoutBtn = document.getElementById('logoutBtn');






var username = localStorage.getItem('sessionName')

if (username) {
    
    document.getElementById('username').innerHTML =  'Welcome ' + username
}




//&====================Logout====================

logoutBtn.addEventListener('click', function () {
    
    logout();
    
})


function logout() {

    console.log('logout');
    
    localStorage.removeItem('sessionName');
    window.location.assign('index.html');
}









