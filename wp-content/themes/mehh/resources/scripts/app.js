// Bootstrap (importing BS scripts individually)
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';

// Imports
import {handleFancybox} from "./components/fancybox";
import {handleMenu} from "./components/menu";
import {handleTables} from "./components/tables";
import {handleCheckScroll} from "./utilities/check-scroll";
import {handleForms} from "./components/forms";
import {handleCookieBanner} from "./components/cookie_banner";
import {handleFullCalendar} from "./components/full-calendar";
import {handleLangSwitcherFlags} from "./components/lang-switcher-flags";
// import {handleDropdowns} from "./components/dropdowns";

const mountedFns = [
  handleFancybox,
  handleMenu,
  handleTables,
  handleCheckScroll,
  // handleDropdowns,
  handleForms,
  handleCookieBanner,
  handleFullCalendar,
  handleLangSwitcherFlags,
]

// Run fn-s
for (const demountFn of mountedFns) {
  typeof demountFn === 'function' && demountFn()
}
