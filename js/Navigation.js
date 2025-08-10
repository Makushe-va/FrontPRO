"use strict";

class Navigation {
    navLinks = null;
    constructor(navSelector) {
        this.navLinks = document.querySelectorAll(`${navSelector} .nav-link`);
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const url = link.getAttribute("href");
                history.pushState({ path: url }, "", url);
                this.updateActiveLink(url);
            });
        });
        window.addEventListener("popstate", () => {
            this.updateActiveLink(window.location.pathname);
        });

        this.updateActiveLink(window.location.pathname);
    }

    updateActiveLink(path) {
        this.navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === path);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Navigation("#nav-links");
});