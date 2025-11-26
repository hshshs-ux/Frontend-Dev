let user = { name: "John", email: "john@mail.com", age: 21 };
let form = document.getElementById("editForm");
form.addEventListener("input", function() {
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = document.getElementById("age").value;
    document.getElementById("output").innerText = JSON.stringify(user);
});