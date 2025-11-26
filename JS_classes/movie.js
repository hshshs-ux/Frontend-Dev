let form = document.getElementById("movieForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let seats = document.getElementById("seats");
    let nameOk = /^[A-Za-z ]+$/.test(name.value);
    let emailOk = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email.value);
    let seatsOk = /^[1-9]$|10/.test(seats.value);
    if (nameOk && emailOk && seatsOk) {
        let booking = {
            name: name.value,
            email: email.value,
            seats: seats.value
        };
        console.log(booking);
    } else {
        console.log("Invalid details");
    }
});