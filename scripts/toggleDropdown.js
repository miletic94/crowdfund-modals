const openDropdown = () => {
    let dropdown = document.querySelector("#dropdown")
    let hamburger = document.querySelector("#hamburger")
    let exit  = document.querySelector("#exit")

    dropdown.style.display = "flex"
    hamburger.style.display = "none"
    exit.style.display = "block"
}

const closeDropdown = () => {
    let dropdown = document.querySelector("#dropdown")
    let hamburger = document.querySelector("#hamburger")
    let exit  = document.querySelector("#exit")

    dropdown.style.display = "none"
    hamburger.style.display = "block"
    exit.style.display = "none"
}