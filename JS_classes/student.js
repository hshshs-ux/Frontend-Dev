let form = document.getElementById("studentForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let nameOk = /^[A-Za-z ]+$/.test(name.value);
    let emailOk = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email.value);
    let phoneOk = /^[0-9]{10}$/.test(phone.value);
    let passOk = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*]).{1,}$/.test(password.value);
    check(name, nameOk, "Name invalid");
    check(email, emailOk, "Email invalid");
    check(phone, phoneOk, "Phone invalid");
    check(password, passOk, "Password invalid");
});
function check(input, valid, message) {
    if (valid) {
        input.style.border = "2px solid green";
        input.nextElementSibling.innerText = "";
    } else {
        input.style.border = "2px solid red";
        input.nextElementSibling.innerText = message;
    }
}