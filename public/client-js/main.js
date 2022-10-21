// Import utility code
import { mobileMenuToggler } from './event-handlers.js';

// For mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
burgerIcon.addEventListener('click', () => mobileMenuToggler(navbarMenu));