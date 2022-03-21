const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".container .nav li a");

window.addEventListener("scroll", () => {
	let current = "";

	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (scrollY >= sectionTop) {
			current = section.getAttribute("id");
		}
	});

	navLi.forEach(a => {
		a.classList.remove("active");
		if (a.classList.contains(current)) {
			a.classList.add("active");
		}
	});
});
