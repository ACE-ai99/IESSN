function showForm() {
    // Hide all forms initially
    document.getElementById("individualFormElement").style.display = "none";
    document.getElementById("publisherFormElement").style.display = "none";
    document.getElementById("instituteFormElement").style.display = "none";

    // Get selected value
    var selectedType = document.getElementById("membershipType").value;

    // Show the selected form
    if (selectedType) {
        document.getElementById(selectedType + "FormElement").style.display = "block";
    }
}

// Function to validate form
function validateForm(type, event) {
    event.preventDefault(); // Prevent form submission

    var form = document.getElementById(type + "FormElement");
    if (!form.checkValidity()) {
        form.reportValidity(); 
        return;
    }

    var password = document.getElementById(type + "Password").value;
    var confirmPassword = document.getElementById(type + "ConfirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    window.location.href = "waiting.html";
}

