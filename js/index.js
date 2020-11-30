window.onload = function() {
    setTimeout(() => {
        const loadingDisplay = document.getElementById("loading");
        loadingDisplay.classList.add("fadeout");
    }, 1000);

    const memberList = [
        ["pi629", "Pokemon"],
        ["ズや", "FireEmblem"],
        ["グーよん", "Mario"],
        ["ぬかちゃん", "Metroid"],
        ["まっすー", "FireEmblem"],
        ["mune", "StarFox"],
        ["あらぶるペンギン", "FireEmblem"],
        ["Raito", "Persona"],
        ["りんごまん", "MetalGear"],
        ["たた", "StreetFighter", "pf35301"],
    ];

    const memberListElem = document.getElementById("member-list");

    memberList.forEach(member => {
        console.log(member[2]);
        const memberElem = document.createElement("div");
        memberElem.setAttribute("ontouchstart", "");
        memberElem.setAttribute("class", "member");

        const nameElem = document.createElement("div");
        nameElem.setAttribute("class", "name");

        const pElem = document.createElement("p");
        pElem.textContent = member[0];
        const charaIconElem = document.createElement("div");
        charaIconElem.setAttribute("class", "chara-icon");

        const icon = document.createElement("img");
        icon.setAttribute("src", "./img/CharaIcon/" + member[1] + ".svg");

        charaIconElem.appendChild(icon);

        nameElem.appendChild(charaIconElem);
        nameElem.appendChild(pElem);

        memberElem.appendChild(nameElem);

        memberListElem.appendChild(memberElem);
    });

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
    const headerHeight = document.getElementsByTagName("header")[0].clientHeight;

    const targetTop = (document.getElementById(targetName).getBoundingClientRect().top - headerHeight);

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