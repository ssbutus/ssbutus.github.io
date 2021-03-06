window.onload = function() {
    setTimeout(() => {
        const loadingDisplay = document.getElementById("loading");
        loadingDisplay.classList.add("fadeout");
    }, 1000);

    //["name", "Icon", "twitter"]
    const memberList = [
        ["pi629", "Pokemon"],
        ["ズヤ", "FireEmblem"],
        ["グーヨン", "Mario"],
        ["ぬかちゃん", "Metroid"],
        ["ヌマ", "Zelda"],
        ["まっすー", "FireEmblem"],
        ["mune", "StarFox"],
        ["あらぶるペンギン", "FireEmblem"],
        ["あきお", "Persona"],
        ["ゅゅゅ", "DK"],
        ["かなん", "Earthbound"],
        ["りんごまん", "MetalGear"],
        ["たた", "StreetFighter"],
        ["ウォッチA96992", "Pokemon"],
        ["kaz", "Yoshi"],
        ["TaK", "FireEmblem"],
        ["しまゆう", "Mario"],
        ["Zafkiel", "KidIcarus"],
        ["ふるばす", "Persona"],
    ];

    const memberListElem = document.getElementById("member-list");

    memberList.forEach(member => {
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
        
        if(member[2] != undefined) {
            const aElem = document.createElement("a");
            aElem.setAttribute("href", "https://twitter.com/" + member[2]);
            memberElem.appendChild(aElem);
        }

        memberListElem.appendChild(memberElem);
    });

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