const toggleBookmark = () => {
    let button = document.querySelector("#bookmark")
    let buttonTextHolder = button.querySelector("div")
    let buttonIconCircle = button.querySelector("svg circle")
    let buttonIconPath = button.querySelector("svg path")

    if (buttonTextHolder.innerText == "Bookmark") {
        buttonTextHolder.innerText = "Bookmarked"
    } else if (buttonTextHolder.innerText == "Bookmarked") {
        buttonTextHolder.innerText = "Bookmark"
    }
    buttonTextHolder.classList.toggle("green")
    buttonIconCircle.classList.toggle("green")
    buttonIconPath.classList.toggle("light")
    button.classList.toggle("light-green")
}