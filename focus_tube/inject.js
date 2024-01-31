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

function observeMutations(element) {
  const observer = new MutationObserver(handlePathChange);
  observer.observe(element, {
    childList: true,
  });

  // const observer = new MutationObserver((mutations) => {
  //   if (!element.hidden) {
  //     handlePathChange();
  //   }
  // });
  // observer.observe(element, {
  //   attributeFilter: ["hidden"],
  // });
}

function handlePageLoad() {
  const titleElement = document.getElementsByTagName("title")[0];
  if (!titleElement) {
    setTimeout(handlePageLoad, 500);
    return;
  }
  observeMutations(titleElement);
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
  // window.addEventListener("popstate", handlePathChange);
  handlePathChange();
  handleSearchLoad();
  handlePageLoad();
}

init();
