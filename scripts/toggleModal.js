const openModal = (event) => {
    let modalContainer = document.querySelector(".modal-container")
    let checkingParameter
    let checked
    let inputValue = event.target.value.replace("pledge-", "")
    switch (event.target.value) {
        case "pledge-0":
            checkingParameter = "pledge-0"
            break;
        case "pledge-25":
            checkingParameter = "pledge-25"
            break; 
        case "pledge-75":
            checkingParameter = "pledge-75"
            break;   
        case "pledge-200":
            checkingParameter = "pledge-200"
            break;
        default:
            checkingParameter = "pledge-0"
            break;
    }

    checked = document.querySelector(`#${checkingParameter}`)
    checked.checked = true;
    modalContainer.style.display = "flex";
}

const closeModal = () => {
    document.querySelector(".modal-container").style.display = "none"
}