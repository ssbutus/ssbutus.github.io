window.onload = function() {
    setTimeout(() => {
        const loadingDisplay = document.getElementById("loading");
        loadingDisplay.classList.add("fadeout");
        setTimeout(() => {
            loadingDisplay.style.display = "none";
        }, 1000);
    }, 1000);

    const memberList = [
        "araburu_chrooom", "mokuroteresa", "pf35301", "Ryo_9726", "warawaramoti", "jonsqueeze"
    ];
    
    const loop1 = document.getElementById("loop1");
    const loop2 = document.getElementById("loop2");

    for(let i = 0; i < 2; i++) {
        memberList.forEach(member => {
        const li = document.createElement("li");
        const element = document.createElement("a");
        element.setAttribute("href", "https://twitter.com/" + member);
        element.setAttribute("target", "_blank");
        element.setAttribute("id", "member");
        const iconElement = document.createElement("img");
        iconElement.setAttribute("alt", "Twitter");
        iconElement.setAttribute("src", "./img/members/" + member + ".jpg");
        iconElement.setAttribute("id", "member-icon");
    
        element.appendChild(iconElement);
        li.appendChild(element);
        const copy1_li = li.cloneNode(true);
        loop1.appendChild(li);
        loop2.appendChild(copy1_li);
        });
    }

    const head = document.getElementsByTagName("head")[0];
    const styleElement = document.createElement("link");
    styleElement.setAttribute("href", "./css/loopAnimation.css");
    styleElement.setAttribute("rel", "stylesheet");

    head.appendChild(styleElement);
}

