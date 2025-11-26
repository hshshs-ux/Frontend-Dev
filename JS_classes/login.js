let form = document.getElementById("loginForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    let userOk = /^.{5,}$/.test(user.value);
    let passOk = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&*]).{8,}$/.test(pass.value);
    if (userOk && passOk) {
        alert("Login Successful");
    } else {
        if (!userOk) alert("Username too short");
        if (!passOk) alert("Password invalid");
    }
});