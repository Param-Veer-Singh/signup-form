const signupForm = document.querySelector(".signup-form");
const submitBtn = document.querySelector(".continue-btn");

const errortext = document.querySelector(".error-text");
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const fullname = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;

    const isSuccess = performSignup(fullname, email, password);
    console.log(isSuccess);
    if(isSuccess){
        setTimeout(function () {
            window.location.href = 'profile.html';
        }, 2000);
    }else{
        errortext.style.display = "block";
    }

})

function performSignup(username, userEmail,userPassword){

    if(username.length == 0 || userEmail.length == 0 || userPassword.length == 0){
        return false;
    }
    const user = {username,userEmail,userPassword};
    
    const uuid = crypto.randomUUID();

    localStorage.setItem(uuid,JSON.stringify(user));

    return true;
}