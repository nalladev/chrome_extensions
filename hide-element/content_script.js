let selectedElement;
document.addEventListener("contextmenu", function (event) {
    selectedElement = event.target;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.hideSelectedElement) {
        if (selectedElement) {
            selectedElement.style.display = "none";
            sendResponse({ status: "success" });
            selectedElement = undefined;
        } else {
            sendResponse({ status: "no element selected" });
        }
    }
});
