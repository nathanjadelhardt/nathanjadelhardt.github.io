function enlarge(input) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = input.src;
    document.getElementById("expandedImg").style.display = "block";
    document.getElementById("expandedImg").style.pointerEvents = "all";
    if ((window.innerWidth * 0.9 * input.height / input.width) > (window.innerHeight * .9)){
        document.getElementById("expandedImg").style.height = "90vh";
        document.getElementById("expandedImg").style.width = "auto";
        document.getElementById("expandedImg").style.marginTop = "5vh";
    }
    else {
        var newHeight = String(((1.0-((input.height * ((window.innerWidth * 0.9)/input.width)) / window.innerHeight))/2)*100);
        document.getElementById("expandedImg").style.marginTop = newHeight+"vh";
        document.getElementById("expandedImg").style.width = "90vw";
        document.getElementById("expandedImg").style.height = "auto";
    }
    document.getElementById("expandedImg").style.marginLeft = "auto";
    document.getElementById("expandedImg").style.marginRight = "auto";
}

function hide() {
    document.getElementById("expandedImg").style.display = "none";
    document.getElementById("expandedImg").style.pointerEvents = "none";
}