import recommended from "./components/recommended";
import recommendedGetter from "./functions/recommendedGetter";
import Rootwriter from "./functions/rootwriter";
import navbar from "./components/navbar.js";


Rootwriter(navbar,recommended);
recommendedGetter();