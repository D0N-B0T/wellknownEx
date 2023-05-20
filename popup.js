chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var xhr = new XMLHttpRequest();
    var url = new URL(tabs[0].url);
    xhr.open("GET", url.origin + "/.well-known/ai-plugin.json", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        document.getElementById('title').textContent = data.name_for_human;
        document.getElementById('description').textContent = data.description_for_human;
        document.getElementById('logo').src = data.logo_url;
        document.getElementById('link').href = data.legal_info_url;
        document.getElementById('plugin').href = data.plugin_url;
      }
    }
    xhr.send();
  });
  