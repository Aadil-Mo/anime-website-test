// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Mock Form Handling ---
    const contactForm = document.getElementById('contact-form');
    const loginForm = document.getElementById('login-form');
    const formMessage = document.getElementById('form-message'); // Common message element

    // Function to display form messages and optionally clear them
    function displayFormMessage(element, message, type, duration = 5000) {
        if (element) {
            element.textContent = message;
            element.className = `form-feedback ${type}`; // Apply base and type class
            // Clear message after duration
            if (duration > 0) {
                 setTimeout(() => {
                    if (element.textContent === message) { // Only clear if message hasn't changed
                         element.textContent = '';
                         element.className = 'form-feedback';
                    }
                 }, duration);
            }
        } else {
            alert(message); // Fallback
        }
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'there';

            const messageText = `Thank you, ${name}! Your message has been "received" (Demo only).`;
            displayFormMessage(formMessage, messageText, 'success'); // Default 5 sec duration

            contactForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const messageText = 'Login functionality is disabled in this demonstration.';
            displayFormMessage(formMessage, messageText, 'error'); // Default 5 sec duration
            // loginForm.reset(); // Keeping commented out
        });
    }

    // --- Random Anime Suggestion ---
    const suggestionButton = document.getElementById('random-suggestion-btn');
    const suggestionOutput = document.getElementById('suggestion-output');

    // Moved suggestions here for potential future expansion/loading
    const animeSuggestions = {
        "Shonen": [
            "Attack on Titan", "Jujutsu Kaisen", "Fullmetal Alchemist: Brotherhood", "Hunter x Hunter (2011)", "Death Note",
            "Naruto", "One Piece", "My Hero Academia", "Demon Slayer: Kimetsu no Yaiba"
        ],
        "Isekai": [
            "Mushoku Tensei: Jobless Reincarnation", "Log Horizon", "The Rising of the Shield Hero", "Saga of Tanya the Evil",
            "Ascendance of a Bookworm", "Re:Zero - Starting Life in Another World", "That Time I Got Reincarnated as a Slime",
            "KonoSuba: God's Blessing on this Wonderful World!"
        ],
        "Shojo": [
            "Fruits Basket (2019)", "Maid Sama!", "Ouran High School Host Club", "Sailor Moon", "Cardcaptor Sakura",
            "Kimi ni Todoke: From Me to You", "Yona of the Dawn", "Ao Haru Ride"
        ],
        "Mecha": [
            "Mobile Suit Gundam (UC timeline)", "Neon Genesis Evangelion", "Code Geass: Lelouch of the Rebellion",
            "Tengen Toppa Gurren Lagann", "Macross Frontier", "Eureka Seven", "86 - Eighty Six", "Aldnoah.Zero"
        ],
        "Seinen": [
            "Berserk (manga recommended, adaptations vary)", "Monster", "Vinland Saga", "Psycho-Pass",
            "Ghost in the Shell: Stand Alone Complex", "Mushishi", "March Comes in Like a Lion", "Kingdom", "Golden Kamuy"
        ],
        "Slice of Life": [
            "K-On!", "Non Non Biyori", "Barakamon", "Yuru Camp (Laid-Back Camp)", "Nichijou - My Ordinary Life",
            "Aria the Animation", "Hyouka", "Silver Spoon"
        ],
        "Romance": [
            "Your Lie in April", "Toradora!", "Clannad / Clannad: After Story", "Kaguya-sama: Love Is War", "Horimiya",
            "My Dress-Up Darling", "Rascal Does Not Dream of Bunny Girl Senpai", "Tsuki ga Kirei"
        ],
        "Sci-Fi": [
            "Cowboy Bebop", "Steins;Gate", "Psycho-Pass", "Ghost in the Shell: Stand Alone Complex",
            "Legend of the Galactic Heroes", "Ergo Proxy", "Planetes", "Serial Experiments Lain"
        ]
        // Add more genres and suggestions here
    };

    if (suggestionButton && suggestionOutput) {
        suggestionButton.addEventListener('click', function() {
            suggestionOutput.textContent = 'Suggesting...'; // Add loading feedback
            suggestionOutput.style.display = 'inline-block'; // Make sure it's visible

            // Simulate slight delay for effect
            setTimeout(() => {
                const genre = suggestionButton.getAttribute('data-genre');
                if (genre && animeSuggestions[genre] && animeSuggestions[genre].length > 0) {
                    const suggestions = animeSuggestions[genre];
                    const randomIndex = Math.floor(Math.random() * suggestions.length);
                    const randomAnime = suggestions[randomIndex];
                    suggestionOutput.textContent = `How about trying: ${randomAnime}?`;
                } else {
                    suggestionOutput.textContent = "Sorry, no suggestions available for this genre yet.";
                }
            }, 150); // 150ms delay
        });
    } else if (suggestionOutput) {
         // Hide output area if button doesn't exist on page
         suggestionOutput.style.display = 'none';
    }

    // --- "Coming Soon" Card Interaction ---
    const disabledCards = document.querySelectorAll('.disabled-card');
    disabledCards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the '#' link navigation
            const genreTitleElement = card.querySelector('h3');
            const genreTitle = genreTitleElement ? genreTitleElement.textContent : 'This genre';
            alert(`${genreTitle} page is coming soon! Check back later.`);
        });
    });

    // --- Back to Top Button Logic ---
    const backToTopButton = document.getElementById('back-to-top-btn');

    if (backToTopButton) {
        // Function to toggle button visibility
        const toggleBackToTopButton = () => {
             if (window.scrollY > 300) { // Show button after scrolling down 300px
                backToTopButton.style.display = 'block';
                // Optional: fade in effect could be added via CSS classes
            } else {
                backToTopButton.style.display = 'none';
            }
        };

        window.addEventListener('scroll', toggleBackToTopButton);
        // Initial check in case page loads already scrolled down
        toggleBackToTopButton();

        backToTopButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll animation
            });
        });
    }

    console.log("Anime Genre Explorer Script Loaded and Initialized!");

}); // End of DOMContentLoaded
