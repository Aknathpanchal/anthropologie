document.getElementById("form").addEventListener("submit", userList);
var arr = JSON.parse(localStorage.getItem("user")) || [];

function userList(e) {
    e.preventDefault();
    console.log("clicked");

    var usernm = document.getElementById("usernm").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var password = document.getElementById("password").value;
    if (!email || !mobile || !password) {
        alert("Enter all of the details");
    }
    else{
        var userObj = {
            usernm: usernm,
            email: email,
            mobile: mobile,
            password: password,
        };
        arr.push(userObj);
        localStorage.setItem("user", JSON.stringify(arr));
        alert("Welcome Aboard! Let's Get Shopping");
        window.location.href = "LogIn_Page.html";
    }
}