let userData = {};
if (!localStorage.getItem("userData")) {
  window.location.href = 'index.html';
}
userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData);
const userInfo = document.querySelector(".profile-box");
userInfo.innerHTML = `
    <p>Full Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    <p>Token: ${userData.token}</p>
    <p>Password: ${userData.password}</p>
`;
document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem('userData');
    window.location.href = "/index.html"
});