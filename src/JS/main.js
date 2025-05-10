import recommended from "./components/recommended";
import recommendedGetter from "./functions/recommendedGetter";
import Rootwriter from "./functions/rootwriter";
import navbar from "./components/navbar.js";
import hamburgerMenu from "./functions/hamburgerMenu.js";
import panelItems from "./functions/panel_items.js";

Rootwriter(navbar,recommended);
hamburgerMenu();
panelItems();
// recommended => should be inside the rootWriter
recommendedGetter();


