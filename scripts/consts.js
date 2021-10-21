export const pledgeInputElements = document.querySelectorAll("input[type='number']")
export const pledge0InputElement = pledgeInputElements[0]
export const pledge25InputElement = pledgeInputElements[1]
export const pledge75InputElement = pledgeInputElements[2]
export const pledge200InputElement = pledgeInputElements[3]

export const pledgeLeftParentElements = [...document.querySelectorAll("[data-pledge-left-parent]")]


export const pledgeLeftTextElements = [...document.querySelectorAll("[data-pledge-left]")]
export const pledgeLeft25TextElements = pledgeLeftTextElements.filter(element => element.dataset.pledgeLeft === "25")
export const pledgeLeft75TextElements = pledgeLeftTextElements.filter(element => element.dataset.pledgeLeft === "75")
export const pledgeLeft200TextElements = pledgeLeftTextElements.filter(element => element.dataset.pledgeLeft === "200")

export const backedFundTextElement = document.querySelector("[data-backed-fund")
export const desiredFundTextElement = document.querySelector("[data-desired-fund]")
export const totalBackersTextElement = document.querySelector("[data-total-backers]")

export const progressElement = document.querySelector("progress")

export const continueHandlers = [...document.querySelectorAll("[data-fund]")]

export const openModalButtons = document.querySelectorAll("[data-open-modal]")
export const closeModalButtons = document.querySelectorAll("[data-close-modal]")