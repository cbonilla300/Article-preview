const share = document.querySelector("#share-button");

share.addEventListener("click", (e) => {
    console.log(e.target.tagName)
    let container = document.createElement("div");
    let shareText = document.createElement("span");
    shareText.textContent = "SHARE";
    let facebook = document.createElement("img");
    facebook.setAttribute("src","imagesicon-twitter.svg");
    let twitter = document.createElement("img");
    twitter.setAttribute("src", "imagesicon-twitter.svg");
    let pinterest = document.createElement("img");
    pinterest.setAttribute("src", "imagesicon-pinterest.svg");
    document.body.appendChild(container);
    container.appendChild(shareText);
    container.appendChild(facebook);
    container.appendChild(twitter);
    container.appendChild(pinterest);
    container.style.display = "flex";
    container.style.width = "250px";
    container.style.justifyContent = "space-evenly";
    container.style.backgroundColor = "hsl(217, 19%, 35%)";
    container.style.padding = ".7rem";
    console.log("test");
})
console.log("second console")