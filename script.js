// =========================
// VIDEO SWITCHER
// =========================

function changeVideo(videoId) {

    const player = document.getElementById("player");

    if (!player) {
        console.error("Player iframe not found");
        return;
    }

    player.src =
        `https://drive.google.com/file/d/${videoId}/preview`;

}


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

        // Close mobile menu on link click
        const menu = document.getElementById("nav-menu");
        const hamburger = document.getElementById("hamburger");
        const overlay = document.querySelector(".nav-overlay");

        if (menu) menu.classList.remove("open");
        if (hamburger) hamburger.classList.remove("active");
        if (overlay) overlay.classList.remove("active");

    });

});



// =========================
// NAVBAR HIDE ON SCROLL UP
// =========================

(function () {

    const nav = document.getElementById("main-nav");
    if (!nav) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNav() {

        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling DOWN — hide navbar
            nav.classList.add("nav-hidden");
        } else {
            // Scrolling UP — show navbar
            nav.classList.remove("nav-hidden");
        }

        // Background effect on scroll
        if (currentScrollY > 50) {
            nav.style.background = "rgba(245,241,232,.98)";
            nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
        } else {
            nav.style.background = "rgba(245,241,232,.95)";
            nav.style.boxShadow = "none";
        }

        lastScrollY = currentScrollY;
        ticking = false;

    }

    window.addEventListener("scroll", () => {

        if (!ticking) {
            window.requestAnimationFrame(updateNav);
            ticking = true;
        }

    });

})();



// =========================
// HAMBURGER MENU TOGGLE
// =========================

(function () {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("nav-menu");

    if (!hamburger || !menu) return;

    // Create overlay element
    const overlay = document.createElement("div");
    overlay.classList.add("nav-overlay");
    document.body.appendChild(overlay);

    function toggleMenu() {
        hamburger.classList.toggle("active");
        menu.classList.toggle("open");
        overlay.classList.toggle("active");
    }

    function closeMenu() {
        hamburger.classList.remove("active");
        menu.classList.remove("open");
        overlay.classList.remove("active");
    }

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);

    // Close menu on window resize past mobile breakpoint
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

})();



// =========================
// SCROLL REVEAL
// =========================

const sections =
    document.querySelectorAll("section");

const revealSections = () => {

    const trigger =
        window.innerHeight * 0.85;

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();



// =========================
// PHOTO LIGHTBOX
// =========================

const galleryImages =
    document.querySelectorAll(
        ".photo-grid img"
    );

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const lightbox =
            document.createElement("div");

        lightbox.classList.add(
            "lightbox"
        );

        lightbox.innerHTML = `

            <span class="close-lightbox">
                &times;
            </span>

            <img src="${img.src}">

        `;

        document.body.appendChild(
            lightbox
        );



        document
            .querySelector(
                ".close-lightbox"
            )
            .addEventListener(
                "click",
                () => {

                    lightbox.remove();

                });




        lightbox.addEventListener(
            "click",
            (e) => {

                if (
                    e.target === lightbox
                ) {

                    lightbox.remove();

                }

            });

    });

});



// =========================
// HERO TYPEWRITER
// =========================

const heroTitle =
    document.querySelector(
        ".hero h1"
    );

if (heroTitle) {

    const text =
        heroTitle.innerText;

    heroTitle.innerText = "";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            heroTitle.innerText +=
                text.charAt(index);

            index++;

            setTimeout(
                typeWriter,
                80
            );

        }

    }

    typeWriter();

}



// =========================
// PARALLAX IMAGE EFFECT
// =========================

window.addEventListener(
    "mousemove",
    (e) => {

        const image =
            document.querySelector(
                ".hero-right img"
            );

        if (!image) return;

        const x =
            (window.innerWidth / 2 - e.clientX)
            / 40;

        const y =
            (window.innerHeight / 2 - e.clientY)
            / 40;

        image.style.transform =
            `translate(${x}px,${y}px)`;

    });



// =========================
// ACTIVE NAV LINK
// =========================

const navLinks =
    document.querySelectorAll(
        "nav a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        document
            .querySelectorAll("section")
            .forEach(section => {

                const top =
                    section.offsetTop;

                const height =
                    section.clientHeight;

                if (
                    scrollY >= top - 200
                ) {

                    current =
                        section.getAttribute("id");

                }

            });

        navLinks.forEach(link => {

            link.classList.remove(
                "active-link"
            );

            if (
                link.href.includes(
                    current
                )
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        });

    });



// =========================
// PROJECT BUTTON ANIMATION
// =========================

const buttons =
    document.querySelectorAll(
        ".video-selector button"
    );

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.letterSpacing =
                "2px";

        });

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.letterSpacing =
                "0px";

        });

});



// =========================
// PAGE LOADED
// =========================

window.addEventListener(
    "load",
    () => {

        document.body.style.opacity =
            "1";

    });