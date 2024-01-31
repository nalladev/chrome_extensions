const progressElementName = "yt-page-navigation-progress";
const searchElementName = "search_query";
const className = "focus-tube-home";

function handlePathChange() {
  const path = window.location.pathname;
  console.log(path);
  if (path == "/") {
    document.body.classList.add(className);
  } else {
    document.body.classList.remove(className);
  }
}

function observeMutations(progressElement) {
  const observer = new MutationObserver((mutations) => {
    console.log(mutations);
    if (!progressElement.hidden) {
      handlePathChange();
    }
  });
  observer.observe(progressElement, {
    attributeFilter: ["hidden"],
  });
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
  window.addEventListener("popstate", handlePathChange);
  handlePathChange();
  handleSearchLoad();
  handlePageLoad();
}

init();
