chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('app/index.html',
    {width: 800, height: 550});
});
