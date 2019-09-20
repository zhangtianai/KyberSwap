function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

function changeTheme(theme) {
    const linkEl = document.getElementById("trading-view-css")
    if (linkEl !== null) {
        if (theme === "dark") {
            linkEl.setAttribute("href", "trading-view-dark.css")
        } else {
            linkEl.setAttribute("href", "trading-view-light.css")
        }
    }
}

// ready to listen to message, notify parent
window.parent.postMessage("ready", "*");

// Listen for event change theme
bindEvent(window, 'message', function (e) {
    const theme = e.data
    changeTheme(theme)
});
