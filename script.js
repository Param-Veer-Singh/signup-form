const signupForm = document.querySelector(".signup-form");
const submitBtn = document.querySelector(".continue-btn");

if(localStorage.getItem('token') !== null){
    window.location.href = 'profile.html';
}
const errortext = document.querySelector(".error-text");
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const fullname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;

    const isSuccess = performSignup(fullname, email, password);
    if(isSuccess){
        setTimeout(function () {
            window.location.href = 'profile.html';
        }, 500);
    }else{
        errortext.style.display = "block";
    }

})

function performSignup(username, userEmail,userPassword){

    if(username.length == 0 || userEmail.length == 0 || userPassword.length == 0){
        return false;
    }
    const token = crypto.randomUUID();
    let userData = {
        name:username,
        email:userEmail,
        password:userPassword,
        token:token
    }    
    localStorage.setItem('token',JSON.stringify(userData));

    return true;
}