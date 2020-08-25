urls = new Set();
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.initiator = "https://www.youtube.com")
        {
            let url = details.url;
            if(url.indexOf("---")!=-1)
            {
                url = url.replace(/(&range.+?)&?/ig,'');
                url = url.replace(/(&rn.+?)&?/ig,'');
                url = url.replace(/(&rbuf.+?)&?/ig,'');
                console.log(url);
                urls.add(url);
                // Strip off this from url &range=3108470-3559323&rn=17&rbuf=111893
                
            }
        }
    },
    {urls: ["<all_urls>"]},
    ["requestBody"]
);