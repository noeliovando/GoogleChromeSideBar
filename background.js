/**
 * @author Rubench0 <rubenchoo.garcia@gmail.com>
 * @author noeliovando <noeliovando@gmail.com>
 * @version 1.0
 *
 */
var isActive = false;
chrome.browserAction.onClicked.addListener(function(tab){
    if(!isActive){
        chrome.tabs.executeScript(tab.ib, {
            file: 'loadInterface.js'
        });
    }
});
chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    isActive = request.value;
});