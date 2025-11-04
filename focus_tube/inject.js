// const searchElementName = "search_query";
// const className = "focus-tube-home";
// const loadTime = 200;
// let focusSearch = () => {};

// function handleShortsLoad() {
//   const shortElements = document.querySelectorAll("ytd-reel-video-renderer");
//   if (shortElements.length == 0) {
//     setTimeout(handleShortsLoad, loadTime);
//     return;
//   }
//   shortElements.forEach((element) => {
//     if (element.id != 0) element.remove();
//   });
// }

// function handlePathChange() {
//   if (window.location.pathname == "/") {
//     document.body.classList.add(className);
//     focusSearch();
//   } else document.body.classList.remove(className);

//   if (window.location.pathname.startsWith("/shorts")) {
//     handleShortsLoad();
//   }
// }

// function observeMutations(element) {
//   const observer = new MutationObserver(handlePathChange);
//   observer.observe(element, {
//     childList: true,
//   });
// }

// function handleTitleLoad() {
//   const titleElement = document.getElementsByTagName("title")[0];
//   if (!titleElement) {
//     setTimeout(handleTitleLoad, loadTime);
//     return;
//   }
//   observeMutations(titleElement);
// }

// function handleBodyLoad() {
//   const bodyElement = document.body;
//   if (!bodyElement) {
//     setTimeout(handleBodyLoad, loadTime);
//     return;
//   }
//   handlePathChange();
// }

// function handleSearchLoad() {
//   const searchElement = document.getElementsByName(searchElementName)[0];
//   if (!searchElement) {
//     setTimeout(handleSearchLoad, loadTime);
//     return;
//   }
//   focusSearch = () => searchElement.focus();
//   focusSearch();
// }

// function init() {
//   window.addEventListener("popstate", handlePathChange);
//   handleTitleLoad();
//   handleBodyLoad();
//   handleSearchLoad();
// }

// init();
