let userData = {};
if (!localStorage.getItem('token')) {
  window.location.href = 'index.html';
}
userData = JSON.parse(localStorage.getItem("token"));
const userInfo = document.querySelector(".info");
userInfo.innerHTML = `
    <p>Full Name: ${userData.name}</p>
    <p>Email: ${userData.email}</p>
    <p>Token: ${userData.token}</p>
    <p>Password: ${userData.password}</p>
`;
document.querySelector(".logout-btn").addEventListener("click",()=>{
    localStorage.removeItem('token');
    window.location.href = "index.html";
});