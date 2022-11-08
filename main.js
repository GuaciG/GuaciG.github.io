/* add an event listener to the document, when the page finishs to load,
runs the functions: filterProjects and typeWriter */
document.addEventListener(
	"DOMContentLoaded",
	function () {
		filterProjects("all");
		typeWriter();
	},
	false
);

function filterProjects(selection) {
	let i;
	const projects = document.getElementsByClassName("project-tile");

	if (selection == "all") selection = "";
	/* Add the "show" class to the filtered elements, 
	and remove the "show" class from the elements that are not selected */
	for (i = 0; i < projects.length; i++) {
		removeClass(projects[i], "show");
		if (projects[i].className.indexOf(selection) > -1)
			addClass(projects[i], "show");
	}
}

// Show filtered elements
function addClass(element, name) {
	let i;
	let arr1 = element.className.split(" ");
	let arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function removeClass(element, name) {
	let i;
	let arr1 = element.className.split(" ");
	let arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
const btnContainer = document.getElementById("btns-wrapper");
const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("highlighted");
		current[0].className = current[0].className.replace(" highlighted", "");
		this.className += " highlighted";
	});
}

/* navigation to specific section via menu-links  */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-content .nav-links li a");

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

/* Animation typeWriter in title  */

const H3 = document.getElementById("role");
const txt = "Front-End Developer.";
const speed = 200;
let letter = 0;

function typeWriter() {
	//if letter < txt.length writes in h3 the character in that position
	if (letter < txt.length) {
		H3.innerHTML += txt.charAt(letter);
		letter++;
		setTimeout(typeWriter, speed);
	}
}
