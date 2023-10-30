function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    }
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        scrollToSection(sectionId);
    });
});


function ativa_menu(link) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
    });

    link.classList.add('active');
}
