chrome.contextMenus.create({
  title: "Hide Element",
  contexts: ["all"],
  onclick: hideElement,
});

function hideElement(info, tab) {
  try {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { hideSelectedElement: true },
        function (response) {
          if (response && response.status) {
            console.log(response.status);
          }
        }
      );
    });
  } catch (error) {
    console.error(error);
  }
}
