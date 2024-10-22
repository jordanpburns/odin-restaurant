import "./style.css"
import {ShowMenuPage, ShowHomePage, ShowAboutPage } from "./pages.js";

ShowHomePage();

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");

homeButton.addEventListener("click", ShowHomePage);
menuButton.addEventListener("click", ShowMenuPage);
aboutButton.addEventListener("click", ShowAboutPage);