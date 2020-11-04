window.onload = function() {
    setTimeout(() => {
        const loadingDisplay = document.getElementById("loading");
        loadingDisplay.classList.add("fadeout");
        setTimeout(() => {
            loadingDisplay.style.display = "none";
        }, 1000);
    }, 1000);
}
