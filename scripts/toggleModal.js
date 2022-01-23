import { continueHandlers, openModalButtons, closeModalButtons } from "./consts.js"
import {pledgeLeftParentElements as checkedParentElement} from "./consts.js"
export const openModal = (event, modal) => {
    let modalContainer = document.querySelector(".modal-container")
    let checkingParameter
    let targetModalBox 
    if(modal === "selection-modal") {
        let checked
        checkingParameter = event.target.value
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

export const closeModal = () => {
    document.querySelector(".modal-container").style.display = "none"
    document.querySelector(".selection-modal").style.display = "none"
    document.querySelector(".success-modal").style.display = "none"
}

const styleCheckedLabel = (checked) => {
    checkedParentElement.forEach(element => {
        element.classList.remove("green-border")
    })
    let checkedLabel = checked.parentElement
    if(checkedLabel.dataset.outlineChecked) {
        checkedLabel.classList.add("green-border")
    }
}

openModalButtons.forEach(openModalButton => {
    openModalButton.addEventListener("click", (event) => {
        openModal(event, "selection-modal")
    })
})

closeModalButtons.forEach(closeModalButton => {
    closeModalButton.addEventListener("click", () => {
        closeModal()
    })
})

checkedParentElement.forEach(element => {
    if(element.dataset.outlineChecked) {
        element.querySelector("input").addEventListener("click", (event) => {
            styleCheckedLabel(event.target)
        })
    }
})