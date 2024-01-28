var scriptElement = document.createElement("scriptElement");
scriptElement.setAttribute("type", "text/javascriptElement");
scriptElement.setAttribute("src", chrome.runtime.getURL("work.js"));
document.getElementsByTagName("html")[0].appendChild(scriptElement);
