import TomSelect from 'tom-select';

export function handleDropdowns() {
  let selects = document.querySelectorAll('select');

  if (!selects.length) {
    return
  }

  selects.forEach(select => {
    new TomSelect(select, {});
  });
}
