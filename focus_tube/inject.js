const searchElementName = "search_query";
const className = "focus-tube-home";
let focusSearch = () => {};

function handlePathChange() {
  if (window.location.pathname == "/") {
    document.body.classList.add(className);
    focusSearch();
  } else {
    document.body.classList.remove(className);
  }
}

function observeMutations(element) {
  const observer = new MutationObserver(handlePathChange);
  observer.observe(element, {
    childList: true,
  });
}

function handleTitleLoad() {
  const titleElement = document.getElementsByTagName("title")[0];
  if (!titleElement) {
    setTimeout(handleTitleLoad, 200);
    return;
  }
  observeMutations(titleElement);
}

function handleBodyLoad() {
  const bodyElement = document.body;
  if (!bodyElement) {
    setTimeout(handleBodyLoad, 200);
    return;
  }
  handlePathChange();
}

function handleSearchLoad() {
  const searchElement = document.getElementsByName(searchElementName)[0];
  if (!searchElement) {
    setTimeout(handleSearchLoad, 200);
    return;
  }
  focusSearch = () => searchElement.focus();
  focusSearch();
}

function init() {
  window.addEventListener("popstate", handlePathChange);
  handleTitleLoad();
  handleBodyLoad();
  handleSearchLoad();
}

init();
