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