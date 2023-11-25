let userData = {};
if (!localStorage.getItem("userData")) {
  window.location.href = 'index.html';
}
userData = JSON.parse(localStorage.getItem("userData"));
const userInfo = document.querySelector(".info");
userInfo.innerHTML = `
    <p>Full Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    <p>Token: ${userData.token}</p>
    <p>Password: ${userData.password}</p>
`;
document.querySelector(".logout-btn").addEventListener("click",()=>{
    localStorage.removeItem('userData');
    window.location.href = "index.html";
});