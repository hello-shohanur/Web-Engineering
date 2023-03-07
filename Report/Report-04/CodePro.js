document.querySelector('.button').onclick = function () {
    var password = document.querySelector('.password').value,
        cpassword = document.querySelector('.cpassword').value;
    if (password == "") {
        alert("Field cannot be empty!!");
    }
    else if (password != cpassword) {
        alert("Sorry! Password didn't match.");
        return false
    }
    else if (password == cpassword) {
        alert("Great! Password match.");
        return true
    }
}