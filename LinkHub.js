function addUser() {

    userName = document.getElementById("userName").ariaValueMax;

    localStorage.setItem("userName", userName);

    window.location = "LinkHubRoom.html";
}
