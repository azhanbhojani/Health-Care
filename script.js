document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll(".nav__links a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // "See Services" Button Click
    document.querySelector(".header__content .btn").addEventListener("click", function () {
        const serviceSection = document.getElementById("service");
        if (serviceSection) {
            window.scrollTo({
                top: serviceSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });

    // "Book Appointment" Form Validation
    document.querySelector(".header__form form").addEventListener("submit", function (e) {
        e.preventDefault();
        let inputs = this.querySelectorAll("input");
        let valid = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid green";
            }
        });
        if (valid) {
            alert("Appointment Booked Successfully! (Backend Integration Pending)");
        } else {
            alert("Please fill in all fields correctly.");
        }
    });

    // "Ask A Service" Button Click
    document.querySelector(".service__btn").addEventListener("click", function () {
        alert("Service request feature coming soon!");
    });

    // "Contact Us" Button Click
    document.querySelector(".btn").addEventListener("click", function () {
        alert("Contact Us functionality coming soon!");
    });
});