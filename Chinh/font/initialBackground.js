if (localStorage.getItem("nightTabStyle")) {
    const e = document.createElement("style");
    switch (e.type = "text/css",
    e.media = "screen",
    localStorage.getItem("nightTabStyle")) {
    case "light":
        e.innerHTML = "html, body {background-color: rgb(255, 255, 255);}";
        break;
    case "dark":
        e.innerHTML = "html, body {background-color: rgb(0, 0, 0);}"
    }
    document.querySelector("head").appendChild(e)
}
