import {pledgeLeft25TextElements, pledgeLeft75TextElements, pledgeLeft200TextElements} from "./consts.js"
import {pledgeLeftParentElements} from "./consts.js"
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
    fundProject(pledgeLeftType, ammount) {
        this.pledgeReward(pledgeLeftType)
        this.addToFund(ammount)
    }
    /* NIJE DOBRO */
    pledgeReward(pledgeLeftType) {
        switch (pledgeLeftType) {
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

    get totalBakcers() {
        return this.#totalBackers
    }

    isNotFunded() {
        return this.backedFund < this.desiredFund
    }

    addToFund(ammount) {
        if(this.isNotFunded()) {
            if(this.backedFund + ammount > this.desiredFund) {
                console.log(`Ammount is too big. You will overfund project. Wee need $${this.desiredFund - this.backedFund} more`)
                return
            }
            this.#backedFund += ammount
            return 
        }
        console.log("Project is funded!")
    }

    styleZeroRewardsElement(elements) {
        elements.forEach(element => {
            if(element.querySelector("[data-pledge-left]").innerText === "0") {
                element.querySelector("button").disabled = true
                element.classList.add("disabled")
            }
        })
    }
}

let fundingTracker = new FundingTracker(100, 99, 5007)
fundingTracker.pledgeLeft25 = 101
fundingTracker.pledgeLeft75 = 64
fundingTracker.pledgeLeft200 = 0
console.log(fundingTracker.backedFund)

backedFundTextElement.innerText = `$${fundingTracker.backedFund}`
desiredFundTextElement.innerText = `of $${fundingTracker.desiredFund} backed`
totalBackersTextElement.innerText = fundingTracker.totalBakcers

pledgeLeft25TextElements.forEach(element => {
    element.innerText = fundingTracker.pledgeLeft25
})
pledgeLeft75TextElements.forEach(element => {
    element.innerText = fundingTracker.pledgeLeft75
})
pledgeLeft200TextElements.forEach(element => {
    element.innerText = fundingTracker.pledgeLeft200
})

fundingTracker.styleZeroRewardsElement(pledgeLeftParentElements)
fundingTracker.fundProject("75", 1)
console.log(fundingTracker.pledgeLeft75)
console.log(fundingTracker.backedFund)