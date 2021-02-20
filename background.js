console.log("Background running");

chrome.browserAction.onClicked.addListener(IconClicked);

function IconClicked(tab)
{
    let msg = {
        txt : "Taking screenshot..."
    }
    chrome.tabs.sendMessage(tab.id,msg);
}