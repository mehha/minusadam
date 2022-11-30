const CheckLang = (inputLang) => {
  const documentLang = document.documentElement.lang;
  return documentLang.substring(0, 2) === inputLang;
};

export default CheckLang;
