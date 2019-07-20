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
    const gb = document.getElementById('gb');
    const masthead = document.getElementById('masthead');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const facebook = document.querySelector('._50ti');
    const topbar = document.getElementById('Top_bar');
    iframe.style.position = 'fixed';
    iframe.style.zIndex = '2147483647';
    iframe.style.right = '0px';
    iframe.style.bottom = '0px';
    iframe.style.top = '0px';
    iframe.style.width = '15%';
    iframe.style.height = '100%';
    iframe.style.border = '1px solid black';
    iframe.style.backgroundColor = 'red';
    //html.style.width = '85%';
    body.style.width = '85%';
    body.style.marginRight = '15%';
    body.style.position = 'relative';
    //html.style.position = 'relative';
    // Get the element with id="myDIV" (a div), then get all <h2>, <div> and <span> elements inside <div>
    /*var x = document.body.querySelectorAll("div");

    // Create a for loop and set the background color of all <h2>, <div> and <span> elements in <div>
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = '85%';
    }*/
    if(gb){
        gb.style.position = 'relative';
    }
    if(nav){
        nav.style.position = 'relative';
    }
    if(header){
        header.style.position = 'relative';
    }
    if(masthead){
        masthead.style.position = 'relative';
    }
    if(facebook){
        facebook.style.position = 'relative';
    }
    if(topbar){
        topbar.style.position = 'relative';
    }
    iframe.addEventListener('load', function (e) {
        iframe.style.transition = '.3s';
        var btn = document.createElement("button");
        btn.innerHTML = 'X';
        iframe.contentDocument.body.appendChild(btn);
        btn.addEventListener('click', (e) => {
            //iframe.style.display = 'none';
            body.style.marginRight = '0px';
            body.style.width = '100%';
            body.style.position = 'relative';
            //html.style.width = '100%';
            iframe.style.maxWidth = '0%';
            body.style.transition = '.3s';
            iframe.style.transition = 'maxWidth .3s';
            html.removeChild(iframe);
            if(header){
                header.style.position = 'relative';
                //header.style.marginLeft = '0%';
            }
            if(gb){
                gb.style.position = 'relative';
            }
            if(nav){
                nav.style.position = 'relative';
            }
            if(masthead){
                masthead.style.position = 'relative';
            }
            if(facebook){
                facebook.style.position = 'relative';
            }
            if(topbar){
                topbar.style.position = 'relative';
            }
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