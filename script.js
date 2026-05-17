const share = document.querySelector("#share-button");
const shareContainer = document.querySelector(".share-container");
share.addEventListener("click", (e) => {
    console.log(e.target.tagName)
    if(shareContainer.contains(document.querySelector("#share-button"))) {
        share.remove()
        document.querySelector('.avatar-links').appendChild(share);
    }
    if (e.target.tagName === "IMG") {
        if (shareContainer.classList.contains("hidden")) {
            shareContainer.classList.remove("hidden");
            shareContainer.appendChild(share);

        } else {
            shareContainer.classList.add("hidden");
        }
    }
    console.log("test");
})
console.log("second console")