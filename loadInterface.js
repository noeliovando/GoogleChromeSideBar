/**
 * @author Rubench0 <rubenchoo.garcia@gmail.com>
 * @author noeliovando <noeliovando@gmail.com>
 * @version 1.0
 *
 */
(function() {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.zIndex = '2147483647';
    iframe.style.right = '0px';
    iframe.style.bottom = '0px';
    iframe.style.top = '0px';
    iframe.style.width = '15%';
    iframe.style.height = '100%';
    iframe.style.border = '1px solid black';
    iframe.style.backgroundColor = 'red';
    body.style.width = '85%';
    body.style.marginLeft = '0px';
    body.style.marginRight = '15%';
    iframe.addEventListener('load', function (e) {
        iframe.style.transition = '.3s';
        var btn = document.createElement("button");
        btn.innerHTML = 'X';
        iframe.contentDocument.body.appendChild(btn);
        btn.addEventListener('click', (e) => {
            //iframe.style.display = 'none';
            body.style.marginRight = '0px';
            body.style.width = '100%';
            iframe.style.maxWidth = '0%';
            body.style.transition = '.3s';
            iframe.style.transition = 'maxWidth .3s';
            html.removeChild(iframe);
            chrome.runtime.sendMessage({
                value: false
            }, function(value) {
                if (value === null) {
                    // Example: If no preference is set, set one:
                    chrome.runtime.sendMessage({
                        value: false
                    });
                }
            });
        });
    }, false);
    html.insertBefore(iframe, body);
    chrome.runtime.sendMessage({
        value: true
    }, function(value) {
        if (value === null) {
            // Example: If no preference is set, set one:
            chrome.runtime.sendMessage({
                value: true
            });
        }
    });
})();