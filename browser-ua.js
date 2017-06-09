(function () {

    var loaded = false;

    var timeOut = setTimeout(function() {
        if (document.readyState === 'complete')
            myFn();

        if (loaded)
            clearTimeout(timeOut); 
    }, 100);

    var myFn = function () {
        if (loaded)
            return;

        var ua = navigator.userAgent;
        // console.log('Begin bootstrapping ' + ua);

        var el = document.getElementById('add-ua-here');

        if (el) {
            // || false is used to try to avoid a crap exception on
            // ACTUAL legacy browsers.
            try {
                if (document.documentMode || false) {
                    var dmTag = document.createElement('p');
                    dmTag.innerText = 'MSIE Document Mode: ' + (document.documentMode || '');
                    el.appendChild(dmTag);
                }
            }
            catch (e) {
                // console.log("Failed to find a document mode property on the current browser");
            }

            var uaTag = document.createElement('p');
            uaTag.innerText = ua;
            el.appendChild(uaTag);
        }

        // console.log('Finished bootstrapping');

        loaded = true;
    }
})();