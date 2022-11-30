export const windowWidth = () => {
  return window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
};

export const windowHeight = () => {
  return window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
};
