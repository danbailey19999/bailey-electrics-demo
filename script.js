/* =========================================================
   BAILEY ELECTRICS WALES
   MAIN JAVASCRIPT
========================================================= */



/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNav.classList.toggle("open");


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            document.body.classList.toggle(
                "menu-open",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
                    ? "true"
                    : "false"
            );


            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

        }
    );



    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMenu();

                }
            );

        }
    );



    document.addEventListener(
        "click",
        (event) => {

            const clickedInsideNav =
                mainNav.contains(
                    event.target
                );


            const clickedMenuButton =
                menuToggle.contains(
                    event.target
                );


            if (
                mainNav.classList.contains("open") &&
                !clickedInsideNav &&
                !clickedMenuButton
            ) {

                closeMenu();

            }

        }
    );



    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 860 &&
                mainNav.classList.contains("open")
            ) {

                closeMenu();

            }

        }
    );

}



function closeMenu() {

    if (
        !menuToggle ||
        !mainNav
    ) {
        return;
    }


    mainNav.classList.remove(
        "open"
    );


    menuToggle.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "menu-open"
    );


    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
    );

}



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


if (prefersReducedMotion) {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

} else if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.1,

                rootMargin:
                    "0px 0px -45px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}



/* =========================================================
   DEMO CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formStatus =
    document.getElementById(
        "formStatus"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            if (formStatus) {

                formStatus.textContent =
                    "Thanks — this is a demonstration form, so your information has not been submitted.";

            }

        }
    );

}



/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}