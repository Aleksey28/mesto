include = (url) => {
  const script = document.createElement('script');
  script.src = url;
  document.querySelector('.page').append(script);
}

include('./blocks/popup/popup.js');
include('./blocks/card/card.js');
