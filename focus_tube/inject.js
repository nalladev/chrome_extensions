const progressElementName = "yt-page-navigation-progress";
const searchElementName = "search_query";
const className = "focus-tube-home";
let timeout;

function handlePathChange() {
  const path = window.location.pathname;
  if (path == "/") {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
}

function observeMutations(progressElement) {
  const observer = new MutationObserver(() => {
    if (!progressElement.hidden) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(handlePathChange, 50)
    }
  });
  observer.observe(progressElement, { attributes: true, subtree: false });
}

function handlePageLoad() {
  const progressElement = document.getElementsByTagName(progressElementName)[0];
  if (!progressElement) {
    setTimeout(handlePageLoad, 500);
    return;
  }
  observeMutations(progressElement);
}

function handleSearchLoad() {
  const searchElement = document.getElementsByName(searchElementName)[0];
  if (!searchElement) {
    setTimeout(handleSearchLoad, 500);
    return;
  }
  searchElement.focus();
}

function init() {
  handlePathChange();
  handleSearchLoad();
  handlePageLoad();
}

init();
