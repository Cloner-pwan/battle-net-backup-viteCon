import recommended from "./components/recommended";
import recommendedGetter from "./functions/recommendedGetter";
import Rootwriter from "./functions/rootwriter";
import hamburgerMenu from "./functions/hamburgerMenu.js";
import panelItems from "./functions/panel_items.js";
import accountBtn from "./functions/accountMenu.js";
import header from "./components/header.js";
import activation from "./functions/searchBar.js";
import menuBar from "./components/menu_bar.js";
import scroll from "./functions/scroll.js";

Rootwriter(recommended);
scroll();
menuBar();
hamburgerMenu();
accountBtn();
panelItems();
recommendedGetter();
activation();
// recommended => should be inside the rootWriter


