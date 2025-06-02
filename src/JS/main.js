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
import feature from "./components/featured.js";
import featuredGetter from "./functions/featuredGetter.js";
import trending from "./components/trendingNow.js";
import trendingGetter from "./functions/trendingGetter.js";
import mostGifted from "./components/mostGifted.js";
import mostGiftedGetter from "./functions/mostGiftedGetter.js";
Rootwriter(header,recommended,feature,trending,mostGifted);
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
featuredGetter()
trendingGetter();
mostGiftedGetter();
// recommended => should be inside the rootWriter
