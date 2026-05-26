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