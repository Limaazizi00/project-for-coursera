document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navigation Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Smooth Scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Filter Projects
    function filterProjects(category) {
        const projects = document.querySelectorAll("#projects article");
        projects.forEach(project => {
            if (category === "all" || project.classList.contains(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }

    // Lightbox Effect for Project Images
    document.querySelectorAll("#projects img").forEach(img => {
        img.addEventListener("click", function () {
            const lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            document.body.appendChild(lightbox);
            
            const imgClone = document.createElement("img");
            imgClone.src = this.src;
            lightbox.appendChild(imgClone);
            
            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });

    // Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            let valid = true;

            if (!name) {
                alert("Please enter your name.");
                valid = false;
            }
            if (!email.includes("@")) {
                alert("Please enter a valid email.");
                valid = false;
            }
            if (!message) {
                alert("Please enter a message.");
                valid = false;
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }
});
