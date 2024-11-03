//se obtiene la sección actual basada en el desplazamiento de la página
function getCurrentSection() {
	const sections = document.querySelectorAll("section");
	let currentSection = "";
	const scrollPosition = window.scrollY;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (scrollPosition +10 >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
			currentSection = section.getAttribute("id");
		}
	});

	return currentSection;
}

//se resalta el enlace del navbar correspondiente a la sección actual
function highlightCurrentSection() {
	const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

	navLinks.forEach((link) => {
		const sectionId = link.getAttribute("href").substring(1);

		if (sectionId === getCurrentSection()) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	});
}

//se escucha el evento de desplazamiento de la página y resalta la sección actual
window.addEventListener("scroll", highlightCurrentSection);
