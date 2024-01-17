// Required form fields
document.getElementById("name").required = true;
document.getElementById("email").required = true;
document.getElementById("inquiry").required = true;
document.getElementById("message").required = true;

// Store all user inputs as variables
const contactForm = document.getElementById("contact-me-form");
const name = document.getElementById("name");
const instaHandle = document.getElementById("instaHandle");
const email = document.getElementById("email");
const inquiry = document.getElementById("inquiry");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

// Show input error message (below the form fields)
function showError(input, message) {
    // const formInput = input.parentElement;
    // formInput.className = "form-input error";
    const span = document.querySelector("span");
    span.innerText = message;
    console.log(span);
}

showError();

// Show input success
function showSuccess(input) {
    const formInput = input.parentElement;
    formInput.className = "form-input success";
}

// Check if there is a name
function checkNameField(input) {
    if (name.length == 0) {
        showError(input, 'Please enter your name.')
    } else {
        showSuccess(input);
    }
}

// Check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Enter a valid email address, in this format: YourEmailAddress@email.com.')
    }
}

// Check if inquiry is selected
function checkInquiry(input) {}

// Check if there is a message
function checkMessage(input) {
    if (message.trim().length < 50) {
        showError(input, "Your message must be at least 50 characters excluding spaces.")
    } else {
       showSuccess(input);
    }
}

// Event Listeners
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    checkNameField(name);
    checkEmail(email);
    checkMessage(message); 
});