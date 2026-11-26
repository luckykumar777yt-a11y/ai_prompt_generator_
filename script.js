
// Generate Prompt Function

function generatePrompt() {

    // Get values from input fields

    const role = document.getElementById("role").value.trim();
    const task = document.getElementById("task").value.trim();
    const context = document.getElementById("context").value.trim();
    const constraints = document.getElementById("constraints").value.trim();
    const format = document.getElementById("format").value;

    // Check required fields

    if (!role || !task) {
        alert("Please enter at least your Role and Task!");
        return;
    }

    // Create the prompt

    let prompt = `Act as ${role}.

Your Task:
${task}`;

    if (context) {
        prompt += `\n\nContext:
${context}`;
    }

    if (constraints) {
        prompt += `\n\nConstraints:
${constraints}`;
    }

    if (format) {
        prompt += `\n\nOutput Format:
Present the result in ${format} format.`;
    }

    prompt += `\n\nEnsure the response is clear, accurate, well-structured and useful.`;

    // Display generated prompt

    document.getElementById("output").textContent = prompt;

    document.querySelector(".status").textContent = "GENERATED";
}


// Copy Prompt Function

function copyPrompt() {

    const output = document.getElementById("output").textContent;

    if (!output || output.includes("Your generated prompt will appear here")) {
        alert("Please generate a prompt first!");
        return;
    }

    navigator.clipboard.writeText(output)
        .then(() => {
            alert("Prompt copied successfully!");
        })
        .catch(() => {
            alert("Unable to copy. Please copy the prompt manually.");
        });
}


// Clear Function

function clearFields() {

    document.getElementById("role").value = "";
    document.getElementById("task").value = "";
    document.getElementById("context").value = "";
    document.getElementById("constraints").value = "";
    document.getElementById("format").value = "";

    document.getElementById("output").innerHTML =
        '<p class="placeholder">Your generated prompt will appear here...</p>';

    document.querySelector(".status").textContent = "READY";
}


// Sample Prompt Function

function loadSample() {

    document.getElementById("role").value =
        "Professional Web Developer";

    document.getElementById("task").value =
        "Create a modern personal portfolio website.";

    document.getElementById("context").value =
        "The website is for a beginner IT student who wants to showcase projects and skills.";

    document.getElementById("constraints").value =
        "Use only HTML, CSS and JavaScript. Do not use frameworks, backend or external APIs. Make it responsive and beginner-friendly.";

    document.getElementById("format").value =
        "Step-by-Step Guide";

    generatePrompt();
}
