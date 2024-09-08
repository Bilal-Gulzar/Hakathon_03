document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("resume-output");
    var saveButton = document.getElementById("save-changes");
    var successMessage = document.getElementById("success-message");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting normally
        // Collect form data
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var education = formData.get("education");
        var workExperience = formData.get("work-experience");
        var skills = formData.get("skills");
        // Populate resume sections
        document.getElementById("name-info").textContent = name;
        document.getElementById("email-info").textContent = email;
        document.getElementById("education-content").textContent = education;
        document.getElementById("work-experience-content").textContent =
            workExperience;
        document.getElementById("skills-content").innerHTML = skills
            .split(",")
            .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
            .join("");
        // Show the resume output
        resumeOutput.classList.remove("hidden");
    });
    saveButton.addEventListener("click", function () {
        // Show success message
        successMessage.classList.remove("hidden");
        // Optionally hide the message after a few seconds
        setTimeout(function () {
            successMessage.classList.add("hidden");
        }, 3000); // Hide after 3 seconds
    });
});
