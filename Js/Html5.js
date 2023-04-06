// name verification
let userName = document.querySelector('#text');
let nameError = document.querySelector('.text-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(userName.value))
       nameError.textContent = "";
    else  nameError.textContent = "Name is Incorrect";
});
// Password verification
// oninput is DOM property
let Password = document.querySelector('#pwd');
let pwdError = document.querySelector('.pwd-error');
Password.oninput = function() {
    let pwdRegex = RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[^!@#$%^&*]*[!@#$%^&*][^!@#$%^&*])).{8,15}');
    if (pwdRegex.test(Password.value))
    pwdError.textContent = "";
    else pwdError.textContent = "Atleast One UpperCase,One number,Exactly one Special Character";
};
// Email verification
let email = document.querySelector('#email');
let emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    let emailRegex = RegExp('^(?![0-9])[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}$');
    if (emailRegex.test(email.value))
    emailError.textContent = "";
    else emailError.textContent = 'follow abc12@gmail.com format';
});
// Url verification
let url = document.querySelector('#url');
let urlError = document.querySelector('.url-error');
url.addEventListener('input', function() {
    let urlRegex = RegExp('^[w]{3}.[a-zA-Z0-9]+.[a-zA-Z]{2,3}$');
    if (urlRegex.test(url.value))
    urlError.textContent = "";
    else urlError.textContent = 'Enter www.asdf.com format'
});
// Number verification
let number = document.querySelector('#number');
let numError = document.querySelector('.number-error');
number.addEventListener('input', function() {
    let numRegex = RegExp('^[0-9]$')
    if (numRegex.test(number.value))
    numError.textContent = "";
    else numError.textContent = "Enter a number";
});
// Telephone verification
let telephone = document.querySelector('#tel');
let telError = document.querySelector('.tel-error');
telephone.addEventListener('input', function() {
    let telRegex = RegExp('^[6-9]{1}[0-9]{9}');
    if (telRegex.test(telephone.value))
    telError.textContent = "";
    else telError.textContent = 'Enter correct TelePhone Number';
});
// Salary verification
let salary = document.querySelector('#salary');
let salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.addEventListener('input', function() {
    salaryOutput.textContent = salary.value;
});
// Store the data in local storage
let date = document.querySelector('#party');
let userDataList = [];
let button = document.querySelector('#submit');
function saveUserData() {
    if (window.localStorage.key(1) !== null) {
        userDataList = JSON.parse(window.localStorage.getItem(localStorage.key(1)));   
    }
    let userDetails = {
        name: userName.value,
        Password: Password.value,
        email: email.value,
        url: url.value,
        number: number.value,
        telephone: telephone.value,
        date: date.value,
        salary: salary.value,
    };
    userDataList.push(userDetails);
    window.alert(userDataList.toString());
    window.localStorage.setItem('userData', JSON.stringify(userDataList));
}
