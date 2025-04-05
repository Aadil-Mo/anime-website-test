// --- Mock Form Handling ---

// Get form elements if they exist on the current page
const contactForm = document.getElementById('contact-form');
const loginForm = document.getElementById('login-form');
const formMessage = document.getElementById('form-message'); // Common message element for both forms

// Handle Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Get user input (optional, could be used in the message)
        const name = document.getElementById('name').value;
        // const email = document.getElementById('email').value;
        // const message = document.getElementById('message').value;

        // Display a success message
        if (formMessage) {
            formMessage.textContent = `Thank you, ${name}! Your message has been "received" (Demo only).`;
            formMessage.className = 'form-feedback success'; // Apply success styling
        } else {
            alert(`Thank you, ${name}! Your message has been "received" (Demo only).`);
        }


        // Clear the form (optional)
        contactForm.reset();
    });
}

// Handle Login Form Submission
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Display an error/info message
        if (formMessage) {
            formMessage.textContent = 'Login functionality is disabled in this demonstration.';
            formMessage.className = 'form-feedback error'; // Apply error styling
        } else {
            alert('Login functionality is disabled in this demonstration.');
        }

        // Clear the form (optional)
        // loginForm.reset();
    });
}


// --- Random Anime Suggestion ---

const suggestionButton = document.getElementById('random-suggestion-btn');
const suggestionOutput = document.getElementById('suggestion-output');

const animeSuggestions = {
    "Shonen": [
        "Attack on Titan",
        "Jujutsu Kaisen",
        "Fullmetal Alchemist: Brotherhood",
        "Hunter x Hunter (2011)",
        "Death Note" // Sometimes debated, but often fits Shonen Jump demographic
    ],
    "Isekai": [
        "Mushoku Tensei: Jobless Reincarnation",
        "Log Horizon",
        "The Rising of the Shield Hero",
        "Saga of Tanya the Evil",
        "Ascendance of a Bookworm"
    ]
    // Add more genres and suggestions here
};

if (suggestionButton && suggestionOutput) {
    suggestionButton.addEventListener('click', function() {
        const genre = suggestionButton.getAttribute('data-genre'); // Get genre from button's data attribute

        if (genre && animeSuggestions[genre]) {
            const suggestions = animeSuggestions[genre];
            const randomIndex = Math.floor(Math.random() * suggestions.length);
            const randomAnime = suggestions[randomIndex];

            suggestionOutput.textContent = `How about trying: ${randomAnime}?`;
        } else {
             suggestionOutput.textContent = "Sorry, no suggestions available for this genre yet.";
        }
    });
}


console.log("Anime Genre Explorer Script Loaded!"); // For debugging
