// var script = document.createElement("script");
// script.setAttribute("type", "text/javascript");
// script.setAttribute("src", chrome.runtime.getURL("work.js"));
// document.getElementsByTagName("html")[0].appendChild(script);

const progressElementName = "yt-page-navigation-progress";
const heroElementClassName = "heroElementYTCleaner";
let heroElement;

function handleFullScreen() {
  const path = window.location.pathname;
  if (path != "/watch") return;
  if (document.fullscreenElement) {
    heroElement.classList.add("no" + heroElementClassName);
  } else {
    heroElement.classList.remove("no" + heroElementClassName);
  }
}

function handlePathChange() {
  const path = window.location.pathname;
  heroElement.className = heroElementClassName;
  if (path == "/") {
    heroElement.classList.add("home" + heroElementClassName);
  } else if (path == "/watch") {
    heroElement.classList.add("watch" + heroElementClassName);
  } else if (path.includes("/shorts")) {
    heroElement.classList.add("shorts" + heroElementClassName);
  } else {
    heroElement.classList.add("no" + heroElementClassName);
  }
}

function observeMutations(progressElement) {
  const observer = new MutationObserver(() => {
    if (progressElement.hidden) handlePathChange();
  });
  observer.observe(progressElement, { attributes: true, subtree: false });
}

function init() {
  const progressElement = document.getElementsByTagName(progressElementName)[0];
  if (!progressElement) {
    setTimeout(init, 500);
    return;
  }
  observeMutations(progressElement);
  handlePathChange();
  document.addEventListener("fullscreenchange", handleFullScreen);
}

heroElement = document.createElement("div");
heroElement.className = heroElementClassName;
document.body.append(heroElement);

init();
