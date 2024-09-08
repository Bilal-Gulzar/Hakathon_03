document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeOutput = document.getElementById(
    "resume-output"
  ) as HTMLDivElement;
  const saveButton = document.getElementById(
    "save-changes"
  ) as HTMLButtonElement;
  const successMessage = document.getElementById(
    "success-message"
  ) as HTMLDivElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const education = formData.get("education") as string;
    const workExperience = formData.get("work-experience") as string;
    const skills = formData.get("skills") as string;

    // Populate resume sections
    document.getElementById("name-info")!.textContent = name;
    document.getElementById("email-info")!.textContent = email;
    document.getElementById("education-content")!.textContent = education;
    document.getElementById("work-experience-content")!.textContent =
      workExperience;
    document.getElementById("skills-content")!.innerHTML = skills
      .split(",")
      .map((skill) => `<li>${skill.trim()}</li>`)
      .join("");

    // Show the resume output
    resumeOutput.classList.remove("hidden");
  });

  saveButton.addEventListener("click", () => {
    // Show success message
    successMessage.classList.remove("hidden");

    // Optionally hide the message after a few seconds
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 3000); // Hide after 3 seconds
  });
});
