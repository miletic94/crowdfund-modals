let continueHandlers = [...document.querySelectorAll(".continue-handler")]

const openModal = (event, modal) => {
    let modalContainer = document.querySelector(".modal-container")
    let checkingParameter
    let targetModalBox 
    if(modal === "selection-modal") {
        let checked
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
        styleCheckedLabel(checked)
        targetModalBox = document.querySelector(".selection-modal")
    } else if (modal === "success-modal") {
        targetModalBox = document.querySelector(".success-modal")
    }
    
    targetModalBox.style.display = "flex"
    modalContainer.style.display = "flex"
    
}



const closeModal = () => {
    document.querySelector(".modal-container").style.display = "none"
    document.querySelector(".selection-modal").style.display = "none"
    document.querySelector(".success-modal").style.display = "none"
}


const styleCheckedLabel = (checked) => {
    let labels = document.querySelectorAll("label")
    for (label of labels) {
        label.classList.remove("green-border")
    }
    let checkedLabel = checked.parentElement
    checkedLabel.classList.add("green-border")
}

continueHandlers.forEach(continueHandler => {
    continueHandler.addEventListener("click", () => {
        closeModal()
        openModal("click", "success-modal")
    })
})


