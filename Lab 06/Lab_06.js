let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');



function Validation() {
    let namevalue = name.value.trim();
    let emailvalue = email.value.trim();
    let passwordvalue = password.value.trim();
    let flagemail,flagpass,flagname=0;
    let nameregex = /^[a-zA-Z\s]+$/;
    let passregex = /(?=.{8,})/;
    let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (nameregex.test(namevalue) == false || namevalue == "") {
        name.style.border = "solid red";
        flagname=0;
    }
    else {
        flagname=1;
        name.style.border = "solid orange";
    }
    if (emailregex.test(emailvalue) == false || emailvalue == "") {
        email.style.border = "solid red";
        flagemail=0;
    }
    else {
        flagemail=1;
        email.style.border = "solid orange";
    }
    if (passregex.test(passwordvalue) == false) {
        password.style.border = "solid red";
        flagpass=0;
    }
    else {
        flagpass=1;
        password.style.border = "solid orange";
    }
    if (flagemail && flagname && flagpass)
        return true;
    else
        return false;

}