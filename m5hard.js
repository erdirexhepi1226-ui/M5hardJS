
function check() {
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;

    var nameRegex = /^[a-zA-Z0-9_]{2,16}$/;
    var ageRegex = /^[0-9]+$/;

    if (!nameRegex.test(username)) {
        document.getElementById("result").innerHTML = "Invalid username! Must have at least 2 characters.";
        document.getElementById("error").innerHTML = "";
    }
    else if (!ageRegex.test(age) || Number(age) < 0 || Number(age) > 120) {
        document.getElementById("error").innerHTML = "Invalid age! Age must be between 0 and 120.";
        document.getElementById("result").innerHTML = "";
    }
    else {
        document.getElementById("result").innerHTML = "Valid username and age!";
        document.getElementById("error").innerHTML = "";
    }
}
