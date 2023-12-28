// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import socialBadgesHTML from "../html-sections/social-badges.js";

document.querySelectorAll(".social-badges").forEach((el) => {
  el.innerHTML = socialBadgesHTML;
});
