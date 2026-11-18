// Check if the passwords match
function checkPassword() {

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password != confirmPassword) {
        window.alert("Passwords do not match!");
        return false;
    }
    else {
        window.alert("Passwords match! This is a demo registration.");
        return false;
    }
}