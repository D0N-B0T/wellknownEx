chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
    const tabUrl = tab.url;
    if (tabUrl.startsWith('http://') || tabUrl.startsWith('https://')) {
      const url = new URL(tabUrl);
      fetch(url.origin + "/.well-known/ai-plugin.json")
        .then(response => {
          const icon = response.ok ? "green.png" : "red.png";
          chrome.action.setIcon({path: icon, tabId: tabId});

          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error: ' + response.statusText);
          }
        })
        .then(data => {
          chrome.storage.sync.set({[url.origin]: data}, function() {
            // handle the success case
          });
        })
        .catch(error => {
          // handle the error case
        });
    }
  }
});
