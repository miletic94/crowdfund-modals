import {pledgeLeft25TextElements, pledgeLeft75TextElements, pledgeLeft200TextElements} from "./consts.js"
import {pledgeLeftParentElements} from "./consts.js"
import { continueHandlers as fundHandlers } from "./consts.js"
import { progressElement } from "./consts.js"
import { openModal, closeModal } from "./toggleModal.js"
// import {pledge0InputElement, pledge25InputElement, pledge75InputElement, pledge200InputElement} from "./consts.js"
import {backedFundTextElement, desiredFundTextElement, totalBackersTextElement} from "./consts.js"

class FundingTracker {
    #desiredFund
    #backedFund
    #totalBackers
    #pledgeLeft25
    #pledgeLeft75
    #pledgeLeft200
    constructor(desiredFund, backedFund, totalBackers) {
        this.#desiredFund = desiredFund
        this.#backedFund = backedFund
        this.#totalBackers = totalBackers
        this.#pledgeLeft25 = 0
        this.#pledgeLeft75 = 0
        this.#pledgeLeft200 = 0
        this.#backedFund = 0
    }

    set pledgeLeft25(ammount) {
        /* Some checkings */
        this.#pledgeLeft25 = ammount
    }
    set pledgeLeft75(ammount) {
        /* Some checkings */
        this.#pledgeLeft75 = ammount
    }
    set pledgeLeft200(ammount) {
        /* Some checkings */
        this.#pledgeLeft200 = ammount
    }

    fundProject(pledgeType, ammount) {
        if(this.isNotFunded()) {
            console.log(this.isNotFunded())
            this.fundingExecuted = false
            if(this.minmaxChecker(pledgeType)) {
                this.pledgeReward(pledgeType)
                this.addToFund(parseInt(ammount))
                this.updateTotalBackersNumber()
                this.updateProgressElementValue(progressElement)
                this.fundingExecuted = true
            }
            return
        }
        console.log("Project is already funded. Thank you for support.")
    }
    minmaxChecker(pledgeType) {
        let pledgeInputElement = document.querySelector(`[data-pledge-input='${pledgeType}']`)
        const min = parseInt(pledgeType)
        const pledgeInputValue = parseInt(pledgeInputElement.value)
        if(pledgeInputValue <= 0) {
            console.log("Not possible value. Please, try somethinig else")
            return false
        }
        if (pledgeInputValue < min) {
            console.log(`Pledge too small for this reward. You should try other type of pledge`)
            return false
        }
        return true
    } 
    pledgeReward(pledgeType) {
        switch (pledgeType) {
            case "25":
                this.#pledgeLeft25 -= 1
                pledgeLeft25TextElements.forEach(element => element.innerText = this.#pledgeLeft25)
                break;
            case "75":
                this.#pledgeLeft75 -= 1
                pledgeLeft75TextElements.forEach(element => element.innerText = this.#pledgeLeft75)
                break
            case "200":
                this.#pledgeLeft200 -= 1
                pledgeLeft200TextElements.forEach(element => element.innerText = this.#pledgeLeft200)
            default:
                break;
        }
    } 

    get pledgeLeft25() {
        return this.#pledgeLeft25
    }
    get pledgeLeft75() {
        return this.#pledgeLeft75
    }
    get pledgeLeft200() {
        return this.#pledgeLeft200
    }

    get desiredFund() {
        return this.#desiredFund
    }

    get backedFund() {
        return this.#backedFund
    }

    get totalBackers() {
        return this.#totalBackers
    }
    set totalBackers(amount) {
        this.#totalBackers = amount 
    }

    isNotFunded() {
       return this.backedFund < this.desiredFund
        
    }

    addToFund(ammount) {
        if(this.backedFund + parseInt(ammount) > this.desiredFund) {
            console.log(`Ammount is too big. You will overfund project. Wee need $${this.desiredFund - this.backedFund} more`)
            return
        }
        this.#backedFund += parseInt(ammount)
        this.updaateBackedFundTextElement(backedFundTextElement)
        return 
    }

    updaateBackedFundTextElement(backedFundTextElement) {
        backedFundTextElement.innerText = `$${this.backedFund}`
    }
    updateTotalBackersNumber() {
        this.totalBackers += 1
        console.log(this.totalBackers)
        this.updateTotalBackersNumberTextElement(totalBackersTextElement)
    }
    updateTotalBackersNumberTextElement(totalBackersTextElement) {
        totalBackersTextElement.innerText = this.totalBackers
    }
    updateProgressElementValue(progressElement) {
        progressElement.value = this.backedFund
    }
    styleZeroRewardsElement(elements) {
        elements.forEach(element => {
            if(element.querySelector("[data-pledge-left]").innerText === "0") {
                element.querySelector("button").disabled = true
                element.classList.add("disabled")
                element.dataset.outlineChecked = false
            }
        })
    }
}

let fundingTracker = new FundingTracker(1000, 0, 5007)
fundingTracker.pledgeLeft25 = 101
fundingTracker.pledgeLeft75 = 64
fundingTracker.pledgeLeft200 = 0

backedFundTextElement.innerText = `$${fundingTracker.backedFund}`
desiredFundTextElement.innerText = `of $${fundingTracker.desiredFund} backed`
totalBackersTextElement.innerText = fundingTracker.totalBackers
progressElement.value = fundingTracker.backedFund
progressElement.max = fundingTracker.desiredFund

pledgeLeft25TextElements.forEach(element => {
    element.innerText = fundingTracker.pledgeLeft25
})
pledgeLeft75TextElements.forEach(element => {
    element.innerText = fundingTracker.pledgeLeft75
})
pledgeLeft200TextElements.forEach(element => {
    element.innerText = fundingTracker.pledgeLeft200
})

fundHandlers.forEach(element => {   
    element.addEventListener("click", (event) => {

        fundingTracker.fundProject(element.dataset.fund, element.previousElementSibling.querySelector("input").value) /* Ovo da ne zavisi od strukture HTML-a */
        if(fundingTracker.fundingExecuted) {
            closeModal()
            openModal(event, "success-modal")
        }
    })
})

fundingTracker.styleZeroRewardsElement(pledgeLeftParentElements)