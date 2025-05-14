// Toggle heading text and style
document.getElementById('inspire-btn').addEventListener('click', function () {
    const heading = document.getElementById('why-heading');

    if (heading.textContent === "Why Protect Aberdare Forest?") {
        heading.textContent = "Because Nature Needs Us 🌿";
        heading.style.color = "#4caf50";
        heading.style.textShadow = "1px 1px 2px #ccc";
    } else {
        heading.textContent = "Why Protect Aberdare Forest?";
        heading.style.color = "";
        heading.style.textShadow = "";
    }
});

// Add and remove support message paragraph
document.getElementById('change-text-btn').addEventListener('click', function () {
    const container = document.getElementById('new-paragraph-container');
    const existingParagraph = container.querySelector('p');

    if (existingParagraph) {
        container.removeChild(existingParagraph);
    } else {
        const newText = document.createElement('p');
        newText.textContent = "Every click helps us protect Aberdare! More people are joining the cause—let's make a difference together!";
        newText.style.color = "black";
        newText.style.fontWeight = "bold";
        newText.style.marginTop = "10px";
        newText.style.fontSize = "1.1em";
        container.appendChild(newText);
    }
});

// Animate Sign Petition button
const petitionBtn = document.querySelector("form button");
petitionBtn.addEventListener("click", () => {
    petitionBtn.classList.add("animate-bounce");

    // Remove animation class to allow retriggering
    setTimeout(() => {
        petitionBtn.classList.remove("animate-bounce");
    }, 700);
});

// Store and retrieve background color preference using localStorage
const toggleBtn = document.createElement('button');
toggleBtn.id = 'toggle-theme';
toggleBtn.textContent = 'Toggle Preferred Theme';
document.querySelector('footer').before(toggleBtn);

// Function to apply theme
function applyPreferredTheme(color) {
    document.body.style.backgroundColor = color;
}

// Load saved theme on page load
const savedColor = localStorage.getItem('preferredTheme');
if (savedColor) {
    applyPreferredTheme(savedColor);
}

// Toggle and save preference
toggleBtn.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor;
    const newColor = currentColor === 'lightgoldenrodyellow' ? 'white' : 'lightgoldenrodyellow';
    applyPreferredTheme(newColor);
    localStorage.setItem('preferredTheme', newColor);
});
