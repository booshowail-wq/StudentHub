// Validate Student Hub Signup Form
function checkPassword() {

    var studentID = document.getElementById("studentid").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (studentID.length != 7) {
        window.alert("Student ID must contain 7 digits!");
        return false;
    }

    if (password.length < 6) {
        window.alert("Password must be at least 6 characters!");
        return false;
    }

    if (password != confirmPassword) {
        window.alert("Passwords do not match!");
        return false;
    }

    window.alert("Form validated successfully! This is a demo registration.");
    return false;
}

// Change text and CSS styles
function changeContent() {

    document.getElementById("description").innerHTML =
        "Student Hub helps students manage their academic life easily!";

    document.getElementById("description").style.backgroundColor =
        "lightyellow";

    document.getElementById("description").style.color =
        "darkblue";
}

// Change the picture
function changePicture() {

    document.getElementById("studentImage").src =
        "images/library.jpg";
}