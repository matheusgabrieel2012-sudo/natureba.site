/* =====================================================
   NATUREBA FREE
   PREMIUM GREEN EDITION
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const header = document.getElementById("header");
const mobileButton = document.getElementById("mobileButton");
const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(
    ".nav-menu a"
);

const revealElements = document.querySelectorAll(
    ".reveal"
);

const year = document.getElementById("year");


/* =====================================================
   YEAR
===================================================== */

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =====================================================
   HEADER
===================================================== */

function updateHeader() {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =====================================================
   MOBILE MENU
===================================================== */

if (mobileButton) {

    mobileButton.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("open");

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navMenu.classList.remove("open");

        }
    );

});


/* =====================================================
   REVEAL
===================================================== */

const observer =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

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

            });

        },
        {
            threshold: .12,
            rootMargin:
                "0px 0px -50px 0px"
        }
    );


revealElements.forEach(
    element => {

        observer.observe(element);

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const id =
                    this.getAttribute(
                        "href"
                    );

                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        id
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                const headerHeight =
                    header.offsetHeight;

                const position =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });

            }
        );

    });


/* =====================================================
   ACTIVE NAV
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        const bottom =
            top + section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {

            current =
                section.getAttribute(
                    "id"
                );

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =====================================================
   HERO PARALLAX
===================================================== */

const heroImage =
    document.querySelector(
        ".hero-background img"
    );


if (
    heroImage &&
    window.innerWidth > 900
) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    .5) * 8;

            const y =
                (event.clientY /
                    window.innerHeight -
                    .5) * 5;

            heroImage.style.transform =
                `scale(1.04)
                 translate(${x}px, ${y}px)`;

        }
    );

}


/* =====================================================
   IMAGE LAZY LOADING
===================================================== */

document
    .querySelectorAll("img")
    .forEach(img => {

        if (
            !img.hasAttribute(
                "loading"
            )
        ) {

            img.setAttribute(
                "loading",
                "lazy"
            );

        }

    });


/* =====================================================
   PREVENT EMPTY LINKS
===================================================== */

document
    .querySelectorAll(
        'a[href="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {
                event.preventDefault();
            }
        );

    });


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "%cNATUREBA FREE",
    `
    color:#b99a62;
    font-size:22px;
    font-weight:bold;
    `
);

console.log(
    "%c☕ Café funcional • Alimentação natural",
    `
    color:#71805b;
    font-size:12px;
    `
);