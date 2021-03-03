//declare variables
const links = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');
const svgSignature = selectElementById('main-signature');
const svgGit = selectElementById('git-link');
const svgLink = selectElementById('mail-link');
const svgCV = selectElementById('cv-link');
const sideNav = selectElementById('side-nav');
const menuButton = selectElementById('menu-button');
const breakpoint = 768;

//check for window location on scroll
function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 70 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

//controll mobile menu opening link clicking
function navModified(location = null) {

    if (window.innerWidth < breakpoint) {
        menuButton.classList.toggle('opened');
        menuButton.classList.contains('opened') ? sideNav.classList.add('full-width') : sideNav.classList.remove('full-width');
    }

    if (location) {
        selectElementById(location).scrollIntoView({ behavior: 'smooth' });
    }
};

//set SVG variables and class for nav
function setSvgSizes() {
    if (window.innerWidth >= breakpoint) {
        svgSignature.setAttribute('height', '20');
        svgGit.setAttribute('height', '40');
        svgLink.setAttribute('height', '40');
        svgCV.setAttribute('height', '35');
        sideNav.classList.remove('full-width');
    } else {
        svgSignature.setAttribute('height', '30');
        svgGit.setAttribute('height', '50');
        svgLink.setAttribute('height', '50');
        svgCV.setAttribute('height', '45');
    }
};

//helper function to get element
function selectElementById(idName) {
    return document.querySelector(`#${idName}`);
};


//set up events listeners
changeLinkState();
window.addEventListener('scroll', changeLinkState);

window.onresize = function() {
    this.setSvgSizes();
};

window.onload = function() {
    this.setSvgSizes();
    selectElementById('year').innerText = new Date().getFullYear();
}