// Import utility code
import { mobileMenuToggler } from './event-handlers.js';

// For mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
burgerIcon.addEventListener('click', () => mobileMenuToggler(navbarMenu));

// Year in footer section gets updated
const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;