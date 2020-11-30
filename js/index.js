window.onload = function() {
    setTimeout(() => {
        const loadingDisplay = document.getElementById("loading");
        loadingDisplay.classList.add("fadeout");
    }, 1000);

    const memberList = [
        "araburu_chrooom", "mokuroteresa", "pf35301", "Ryo_9726", "warawaramoti", "jonsqueeze"
    ];
    
/*     const loop1 = document.getElementById("loop1");
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
    } */

    const head = document.getElementsByTagName("head")[0];
    const styleElement = document.createElement("link");
    styleElement.setAttribute("href", "./css/loopAnimation.css");
    styleElement.setAttribute("rel", "stylesheet");

    head.appendChild(styleElement);

    document.getElementById("header-top").onclick = function() { HeaderListOnClick("introduction") };
    document.getElementById("header-activity").onclick = function() { HeaderListOnClick("description") };
    document.getElementById("header-way-to-participate").onclick = function() { HeaderListOnClick("description") };
    document.getElementById("header-members").onclick = function() { HeaderListOnClick("members") };
    document.getElementById("header-access").onclick = function() { HeaderListOnClick("access") };
}

function HeaderListOnClick(targetName) {
    console.log(targetName);

    const headerHeight = document.getElementsByTagName("header")[0].clientHeight;

    const targetTop = (document.getElementById(targetName).getBoundingClientRect().top - headerHeight);
    console.log(targetTop);
    console.log(headerHeight);

    const scrollOptions = {
        top: targetTop,
        behavior: "smooth"
    }

    window.scrollBy(scrollOptions);
}

window.onscroll = function() {
    const scrollTop = 
        document.documentElement.scrollTop || document.body.scrollTop;

    const header = document.getElementsByTagName("header")[0];

    const innerHeight = window.innerHeight;

    if(scrollTop > (innerHeight * (4 / 5))) {
        header.classList.remove("fadeout-header");
        header.classList.add("fadein-header");
    } else {
        header.classList.remove("fadein-header");
        header.classList.add("fadeout-header");
    }
}