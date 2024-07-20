function newTagElement() {
  const elm = document.createElement("span");
  elm.classList.add("clickbait");
  elm.textContent = "Clickbait";
  return elm;
}

const reportButton = document.createElement("button");

function checkClickbait(videoId) {
  return true;
}

function handleAddedNodes(nodes) {
  nodes.forEach((node) => {
    if (
      node.href &&
      (node.href.includes("/watch?v=") || node.href.includes("/shorts/")) &&
      node.classList.contains("ytd-thumbnail")
    ) {
      const videoId = node.href.match(/.+\/(?:watch\?v=)?(.+)/)[1];
      const isClickbait = checkClickbait(videoId);
      if (isClickbait) node.parentNode.appendChild(newTagElement());
      console.log("added tag to", videoId);
    } else if (node.id == "actions-inner" && node.childNodes[0].id == "menu") {
      node.childNodes[0].childNodes[0].appendChild(newButton());
    }
  });
}

const observer = new MutationObserver((mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      handleAddedNodes(Array.from(mutation.addedNodes));
    }
  }
});

function waitForBodyLoad() {
  return new Promise((resolve) => {
    const intervalId = setInterval(() => {
      if (document.body) {
        clearInterval(intervalId);
        resolve(document.body);
      }
    }, 200);
  });
}

async function init() {
  const targetNode = await waitForBodyLoad();
  const config = { childList: true, subtree: true };
  observer.observe(targetNode, config);
}

init();
