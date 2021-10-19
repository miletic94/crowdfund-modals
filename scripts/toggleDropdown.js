const toggleDropdown = () => {
    let dropdown = document.querySelector("#dropdown-container")
    if(window.getComputedStyle(dropdown).display === "none") {
        dropdown.style.display = "flex"
    } else if(window.getComputedStyle(dropdown).display === "flex") {
        dropdown.style.display = "none"
    }
    console.log(dropdown.style.display)
}






