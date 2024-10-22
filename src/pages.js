import "./style.css";
import restaurantImage from "./assets/canadian_restaurant-1-cropped.png";
import poutineImage from "./assets/poutine-cropped.png";
import aboutImage from "./assets/canadian_resaurant-2.png"
const ShowHomePage = () => {
    const content = document.getElementById("content");
    content.textContent = "";

    const homePageContainer = document.createElement("div");
    homePageContainer.id = "home-page-container";

    content.appendChild(homePageContainer);

    const restaurantImageHomePage = document.createElement("img");
    restaurantImageHomePage.src = restaurantImage;
    restaurantImageHomePage.id = "restaurant-image-home-page";

    const topDiv = document.createElement("div");
    topDiv.id = "home-top-div";
    homePageContainer.appendChild(topDiv);

    topDiv.appendChild(restaurantImageHomePage);

    const whiteBoxTop = document.createElement("div");
    whiteBoxTop.id = "white-box-top";
    topDiv.appendChild(whiteBoxTop);

    const whiteBoxBottom = document.createElement("div");
    whiteBoxBottom.id = "white-box-bottom";

    const restaurantImageSideDiv = document.createElement("div");
    restaurantImageSideDiv.id = "restaurant-image-side-div";

    const canadianDelightsP = document.createElement("p");
    canadianDelightsP.id = "canadian-delights-p"
    canadianDelightsP.textContent ="Welcome to the most Canadian experience you could possibly imagine";
    restaurantImageSideDiv.appendChild(canadianDelightsP);

    topDiv.appendChild(restaurantImageSideDiv);

    const poutine = document.createElement("img");
    poutine.id = "poutine";
    poutine.src = poutineImage;

    const bottomDiv = document.createElement("div");
    bottomDiv.id = "home-bottom-div";
    homePageContainer.appendChild(bottomDiv);

    bottomDiv.appendChild(whiteBoxBottom);

    bottomDiv.appendChild(poutine);

    const poutineSideDiv = document.createElement("div");
    poutineSideDiv.id = "poutine-side-div";

    const trulyCanadianP = document.createElement("p");
    trulyCanadianP.textContent = "A truly Canadian encounter with all of your favorites in one place";
    trulyCanadianP.id = "truly-canadian-p";
    poutineSideDiv.appendChild(trulyCanadianP);

    bottomDiv.appendChild(poutineSideDiv);

}

const ShowMenuPage = () => {
    const content = document.getElementById("content");
    content.textContent = "";

    const menuPageContainer = document.createElement("div");
    menuPageContainer.id = "menu-page-container";
    menuPageContainer.classList.add("flex-container");

    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    menuContainer.classList.add("flex-container");

    menuPageContainer.appendChild(menuContainer);
    content.appendChild(menuPageContainer);

    const food = document.createElement("h3");
    food.textContent = "Food";
    food.classList.add("diamond");
    menuContainer.appendChild(food);

    const tourtiere = document.createElement("h6");
    tourtiere.textContent = "Tourtière";
    menuContainer.appendChild(tourtiere);

    const tourtiereDesc = document.createElement("p");
    tourtiereDesc.textContent = "The classic Québécois meat pie, made with minced beef and potatoes.";
    menuContainer.appendChild(tourtiereDesc);

    const donairs = document.createElement("h6");
    donairs.textContent = "Donair";
    menuContainer.appendChild(donairs);

    const donairsDesc = document.createElement("p");
    donairsDesc.textContent = "Spiced meat, fresh veggies, and donair sauce in pita bread";
    menuContainer.appendChild(donairsDesc);

    const bannock = document.createElement("h6");
    bannock.textContent = "Bannock";
    menuContainer.appendChild(bannock);

    const bannockDesc = document.createElement("p");
    bannockDesc.textContent = "Corn flour based fried bread";
    menuContainer.appendChild(bannockDesc);

    const peamealBacon = document.createElement("h6");
    peamealBacon.textContent = "Peameal Bacon";
    menuContainer.appendChild(peamealBacon);

    const peamealBaconDesc = document.createElement("p");
    peamealBaconDesc.textContent = "Wet-cured, unsmoked pork loin rolled in cornmeal";
    menuContainer.appendChild(peamealBaconDesc);

    const montrealSmokedMeatSandwich = document.createElement("h6");
    montrealSmokedMeatSandwich.textContent = "Montreal Smoked Meat Sandwich";
    menuContainer.appendChild(montrealSmokedMeatSandwich);

    const montrealSmokedMeatSandwichDesc = document.createElement("p");
    montrealSmokedMeatSandwichDesc.textContent = "Kosher style beef brisket, yellow mustard, rye bread, dill pickle";
    menuContainer.appendChild(montrealSmokedMeatSandwichDesc);

    const drinks = document.createElement("h3");
    drinks.textContent = "Drinks";
    drinks.classList.add("diamond");
    menuContainer.appendChild(drinks);

    const caesar = document.createElement("h6");
    caesar.textContent = "Caesar";
    menuContainer.appendChild(caesar);

    const caesarDesc = document.createElement("p");
    caesarDesc.textContent = "Vodka, Clamato, hot sauce, Worcestershire sauce, celery";
    menuContainer.appendChild(caesarDesc);

    const sortilege = document.createElement("h6");
    sortilege.textContent = "Sortilège";
    menuContainer.appendChild(sortilege);

    const sortilegeDesc = document.createElement("p");
    sortilegeDesc.textContent = "Canadian Whiskey - notes of maple, toffee and caramel aromas";
    menuContainer.appendChild(sortilegeDesc);

    const coureurDesBois = document.createElement("h6");
    coureurDesBois.textContent = "Coureur Des Bois";
    menuContainer.appendChild(coureurDesBois);

    const coureurDesBoisDesc = document.createElement("p");
    coureurDesBoisDesc.textContent = "Canadian Whiskey - notes of maple syrup, caramel, vanilla, and spices";
    menuContainer.appendChild(coureurDesBoisDesc);

    const iceWine = document.createElement("h6");
    iceWine.textContent = "Ice Wine";
    menuContainer.appendChild(iceWine);

    const iceWineDesc = document.createElement("p");
    iceWineDesc.textContent = "Harvested during our coldest frosts";
    menuContainer.appendChild(iceWineDesc);

    const canadaDry = document.createElement("h6");
    canadaDry.textContent = "Canada Dry";
    menuContainer.appendChild(canadaDry);

    const canadaDryDesc = document.createElement("p");
    canadaDryDesc.textContent = "Tangy with a slight citrus flavor";
    menuContainer.appendChild(canadaDryDesc);

    const desserts = document.createElement("h3");
    desserts.textContent = "Desserts";
    desserts.classList.add("diamond");
    menuContainer.appendChild(desserts);

    const butterTarts = document.createElement("h6");
    butterTarts.textContent = "Butter Tarts";
    menuContainer.appendChild(butterTarts);

    const butterTartsDesc = document.createElement("p");
    butterTartsDesc.textContent = "Sweet filling, baked in a pastry shell with a crunchy top";
    menuContainer.appendChild(butterTartsDesc);

    const nanaimoBars = document.createElement("h6");
    nanaimoBars.textContent = "Nanaimo Bars";
    menuContainer.appendChild(nanaimoBars);

    const nanaimoBarsDesc = document.createElement("p");
    nanaimoBarsDesc.textContent = "Coconut crumb base, custard filling, chocolate ganache top";
    menuContainer.appendChild(nanaimoBarsDesc);

    const menuChildNodes = menuContainer.childNodes;
    for (let i = 0; i < menuChildNodes.length; i = i + 1) {
        menuChildNodes[i].classList.add("menu-text");
    }
}

const ShowAboutPage = () => {
    const content = document.getElementById("content");
    content.textContent = "";

    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";

    content.appendChild(aboutContainer);

    const aboutBackgroundImage = document.createElement("img");
    aboutBackgroundImage.src = aboutImage;
    aboutBackgroundImage.id = "about-background-image";

    aboutContainer.appendChild(aboutBackgroundImage);

    const textDiv = document.createElement("div");
    textDiv.id = 'about-text-div';
    aboutContainer.appendChild(textDiv);

    const whiteBox = document.createElement("div");
    whiteBox.id = "white-box";
    aboutContainer.appendChild(whiteBox);

    const aboutText = document.createElement("p");
    aboutText.textContent = `Welcome to Canadian Delights, where the heart of 
    Canada meets your plate! Allow Chef John Beaverbrook Tabarnak to take you on a culinary 
    adventure featuring iconic Canadian specialties, from savory poutine and hearty tourtière 
    to rich butter tarts and Naniamo bars. Our cozy atmosphere and locally sourced 
    ingredients celebrate the diverse flavors of the True North, ensuring each dish 
    tells a story. Join us for a taste of true Canadian hospitality!`;

    const textInnerDiv = document.createElement("div");
    textInnerDiv.id = 'text-inner-div';

    textInnerDiv.appendChild(aboutText)
    textDiv.appendChild(textInnerDiv);

}

export {ShowMenuPage, ShowHomePage, ShowAboutPage};
