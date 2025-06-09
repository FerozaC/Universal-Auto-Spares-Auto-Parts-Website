// ========== Functions for engines.html ==========
function expandSearch() {
    document.querySelector('.search-bar').classList.add('expand');
}

function prefillForm(model, engineCode) {
    document.getElementById('vehicleModel').value = model;
    document.getElementById('engineCode').value = engineCode;
}

// Search functionality for engines
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const engineCards = document.querySelectorAll(".col");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase().trim();

            engineCards.forEach(card => {
                const title = card.querySelector(".card-title").textContent.toLowerCase();
                const engineCode = card.querySelector(".card-text").textContent.toLowerCase();

                if (title.includes(query) || engineCode.includes(query)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});

// ========== Functions for index.html ==========
// Image carousel for hero section
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }

    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 5000);
}

// Menu toggle functions
function toggleMenu() {
    var menu = document.querySelector(".navbar-menu");
    menu.classList.toggle("show");
}

function closeMenu() {
    var menu = document.querySelector(".navbar-menu");
    menu.classList.remove("show");
}

// Close the menu when clicking on any item
document.querySelectorAll(".navbar-menu a").forEach((item) => {
    item.addEventListener("click", closeMenu);
});

// Modal close functionality
function closeModal() {
    document.getElementById("ticketModal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("ticketModal")) {
        closeModal();
    }
};

// Gallery slide functionality
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Initialize the first slide
showSlide(slideIndex);

// Form submission logic
window.addEventListener("DOMContentLoaded", function () {
    const yourForm = document.getElementById("apply-event");
    if (yourForm) {
        yourForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const data = new FormData(yourForm);
            const action = e.target.action;
            fetch(action, {
                method: "POST",
                body: data,
            }).then(() => {
                window.location.replace((href = "#Apply"));
                document.getElementById("apply-event").reset();
                alert("Your application was submitted successfully! We will contact you soon");
            });
        });
    }

    // Enquiry form validation
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (event) {
            let valid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const contact = document.getElementById('contact');

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const contactError = document.getElementById('contactError');

            // Reset error messages
            nameError.textContent = '';
            emailError.textContent = '';
            contactError.textContent = '';

            // Name validation
            if (name.value.trim().length < 2) {
                nameError.textContent = 'Name must be at least 2 characters.';
                valid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                emailError.textContent = 'Invalid email format.';
                valid = false;
            }

            // Contact number validation (only digits, exactly 10)
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(contact.value)) {
                contactError.textContent = 'Contact number must be exactly 10 digits.';
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }
});
