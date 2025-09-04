// using the dom property

const button = document.getElementById('button-1');

button.onclick = function() {
    alert('button Cliked by DOM property');
};

// using the event listener Method

let btn = document.getElementById('button-2');

let output = document.getElementById('output');

btn.addEventListener('click', function(){
    output.textContent = 'Did you see that-addEventListener Method';
});

// different events

let input = document.getElementById('inputBox')

// keydown event
input.addEventListener('keydown', function(event){
    console.log("This is a keydown event: ", event.key);
});

// focus event
input.addEventListener('focus', function(){
    input.style.backgroundColor = 'lightgreen';
});

// blur event
input.addEventListener('blur', function(){
    input.style.backgroundColor = 'lightgray';
});

// Toggle function
function toggleTheme(){
    document.body.classList.toggle('dark-theme');
};

// using drag and drop 

let dragitem = document.getElementById('dragitem');
let dropzone = document.getElementById('dropzone');

dragitem.addEventListener('dragstart', function(event){
    event.dataTransfer.setData('id', event.target.id);
});

// Allows drop

dropzone.addEventListener('dragover', function(event){
    event.preventDefault();
});

dropzone.addEventListener('drop', function(event){
    event.preventDefault();
    let id = event.dataTransfer.getData('id');
    dropzone.appendChild(document.getElementById(id));
    dropzone.style.backgroundColor = 'lightgrey';
});

// Validate Form

function ValidateEmail(email){
    let format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return format.test(email);
}
function ValidatePassword(password){
    let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return format.test(password);
} 

function ValidateSignUp(){
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (username === '' || email === '' || password === ''){
        alert('All fields are required');
        return false;
    }
    if(!ValidateEmail(email)){
        alert('Please enter a valid email address.');
        return false;
    }
    if(!ValidatePassword(password)){
        alert('Password must be atleast 8 characters long and include uppercase, lowercase,number and special character.');
        return false;
    }

    alert('Form Submitted Successfully!');
    return true;
}