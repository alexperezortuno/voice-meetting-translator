chrome.runtime.onInstalled.addListener(() => {
    console.log("Extensión instalada.");
});
chrome.runtime.onStartup.addListener(() => {
    console.log("Extensión iniciada.");
});
chrome
    .runtime
    .onMessage
    .addListener((request,
                  sender,
                  sendResponse) => {
        console.log("sender", sender);
        console.log("sendResponse", sendResponse);
        console.log("request", request);
    });
