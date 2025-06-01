import recommended from "./components/recommended";
import recommendedGetter from "./functions/recommendedGetter";
import Rootwriter from "./functions/rootwriter";
import hamburgerMenu from "./functions/hamburgerMenu.js";
import panelItems from "./functions/panel_items.js";
import accountBtn from "./functions/accountMenu.js";
import activation from "./functions/searchBar.js";
import menuBar from "./components/menu_bar.js";
import scroll from "./functions/scroll.js";
import logic from "./functions/slider_logic.js";
import slides from "./functions/slides.js";
import slider from "./components/slider.js";
import searchMenu from "./components/searchMenu.js";
import header from "./components/header.js";

Rootwriter(header,recommended);
scroll();
menuBar();
searchMenu();
hamburgerMenu();
accountBtn();
slider();
slides().then(() => {
    logic();
});
panelItems();
recommendedGetter();
activation();
// recommended => should be inside the rootWriter
