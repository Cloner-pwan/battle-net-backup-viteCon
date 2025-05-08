import recommended from "./components/recommended";
import recommendedGetter from "./functions/recommendedGetter";
import Rootwriter from "./functions/rootwriter";
import navbar from "./components/navbar.js";

// Rootwriter(navbar,recommended);
// recommendedGetter();

const hamburgerMenu = document.querySelector("#hamburgerMenubtn");
const hamburgerMenuItems = document.querySelector("#hamburgerMenuItems");
const closeBtnTimes = document.querySelector("#closeBtnTimes");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenuItems.style.left = "0";
});

closeBtnTimes.addEventListener("click", () => {
    hamburgerMenuItems.style.left = "-100%";
});
