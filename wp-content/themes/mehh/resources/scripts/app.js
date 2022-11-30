/**
 * External Dependencies
 */
import {handleFancybox} from "./components/fancybox";
import {handleMenu} from "./components/menu";

const mountedFns = [
  handleFancybox,
  handleMenu,
]

// Run fn-s
for (const demountFn of mountedFns) {
  typeof demountFn === 'function' && demountFn()
}
