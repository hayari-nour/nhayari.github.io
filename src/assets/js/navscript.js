document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Ajouter une classe active au lien cliqué
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });
                this.classList.add("active");

                // Mettre à jour l'URL sans ajouter une nouvelle entrée dans l'historique
                if (window.location.hash !== `#${targetId}`) {
                    history.replaceState(null, "", `#${targetId}`);
                }

                // Défilement doux
                smoothScrollTo(targetSection);
            }
        });
    });

    window.addEventListener("scroll", function () {
        /*const scrollPosition = window.scrollY + document.querySelector("header").offsetHeight;*/
        const scrollPosition = window.scrollY + 84;
        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            // Vérifier si la section est suffisamment visible dans la fenêtre
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);

                // Mettre à jour l'URL sans ajouter une nouvelle entrée dans l'historique
                if (window.location.hash !== `#${section.id}`) {
                    history.replaceState(null, "", `#${section.id}`);
                }

                // Ajouter une classe active au lien correspondant
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });
                correspondingLink.classList.add("active");
            }
        });

        // Gestion du footer
        const footerLink = document.querySelector("footer a");
        if (window.innerHeight + scrollPosition >= document.body.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            footerLink.classList.add("active");
        } else {
            footerLink.classList.remove("active");
        }
    });

    // Fonction pour défilement doux
    function smoothScrollTo(targetElement) {
        /*const targetOffset = targetElement.offsetTop - document.querySelector("header").offsetHeight*/;
		 const targetOffset = targetElement.offsetTop /*- document.querySelector("nav").offsetHeight*/;
        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        });
    }
});
