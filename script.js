const share = document.querySelector("#share-button");
const rightSidePositionParent = document.querySelector(".right-side")
share.addEventListener("click", (e) => {
    console.log(e.target.tagName)
    const container = document.createElement("div");
    container.className = "share-container"
    const shareText = document.createElement("span");
    shareText.textContent = "SHARE";
    const facebook = document.createElement("img");
    facebook.setAttribute("src","images/icon-facebook.svg");
    const twitter = document.createElement("img");
    twitter.setAttribute("src", "images/icon-twitter.svg");
    const pinterest = document.createElement("img");
    pinterest.setAttribute("src", "images/icon-pinterest.svg");
    document.body.appendChild(container);
    container.appendChild(shareText);
    container.appendChild(facebook);
    container.appendChild(twitter);
    container.appendChild(pinterest);
    rightSidePositionParent.appendChild(container)
    console.log("test");
})
console.log("second console")