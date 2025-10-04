document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const  feedbackDiv = document.getElementById("form-feedback");
    form.addEventListener("submit" , function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        if(username.length < 3) {
            isValid = false;
            messages.push("Enter a username with at least 3 characters!");
        }
        if(email.includes("@") == false || email.includes(".") == false) {
            isValid = false;
            messages.push("Enter a valid email address!");
        }
        if(password.length <= 8) {
            isValid = false;
            messages.push("Enter a password with at least 8 characters!");
        }

        feedbackDiv.style.display = "block";
        
        if(isValid == true) {
            feedbackDiv.textContent = "Registration Successful!";
            feedbackDiv.style.color = "#28a745";
        } else if(isValid == false) {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    })
});