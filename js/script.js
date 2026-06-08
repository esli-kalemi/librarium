console.log("Librarium website started!");

// ================= COUNTERS =================
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = 1;

        if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 40);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});


// ================= MODAL =================

function openLogin() {
    const modal = document.getElementById("authModal");
    const login = document.getElementById("loginForm");
    const signup = document.getElementById("signupForm");

    modal.style.display = "flex";
    login.style.display = "flex";
    signup.style.display = "none";
}

function openSignup() {
    const modal = document.getElementById("authModal");
    const login = document.getElementById("loginForm");
    const signup = document.getElementById("signupForm");

    modal.style.display = "flex";
    login.style.display = "none";
    signup.style.display = "flex";
}

function closeModal() {
    document.getElementById("authModal").style.display = "none";
}


// click outside modal to close
window.addEventListener("click", function (event) {
    const modal = document.getElementById("authModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// CLASSICS SLIDER
const track = document.getElementById('classicsTrack');
const cardWidth = 150 + 24; // card width + gap
let currentOffset = 0;
const visibleCards = 6;
const totalCards = 20;
const maxOffset = (totalCards - visibleCards) * cardWidth;

function slideRight() {
    currentOffset = Math.min(currentOffset + cardWidth * 2, maxOffset);
    track.style.transform = `translateX(-${currentOffset}px)`;
}

function slideLeft() {
    currentOffset = Math.max(currentOffset - cardWidth * 2, 0);
    track.style.transform = `translateX(-${currentOffset}px)`;
}

// CONTACT FORM SUBMISSION
const contactForm = document.getElementById('contactForm');
const contactNotification = document.getElementById('contactNotification');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessageField').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all requested data.');
            contactNotification.textContent = '';
            return;
        }

        contactNotification.textContent = 'Request sent!';
        contactForm.reset();
    });
}