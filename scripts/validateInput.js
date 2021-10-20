import {pledge0InputElement, pledge25InputElement, pledge75InputElement, pledge200InputElement } from "./consts.js"


const minmaxChecker = (e, min, max) => {
    if(e.target.value < 0) {
        console.log("Not possible value. Try somethinig else")
    } else if (e.target.value < min) {
        console.log(`Pledge too small for this reward. You should try other type of pledge`)
    }else if(e.target.value > max) {
        console.log(`Pledge is too big for this reward. You should try other type of pledge`)
    }
} 

pledge0InputElement.addEventListener("input",(e) => {
    minmaxChecker(e, 0, 25)
})
pledge25InputElement.addEventListener("input",(e) => {
    minmaxChecker(e, 25, 75)
})
pledge75InputElement.addEventListener("input",(e) => {
    minmaxChecker(e, 75, 200)
})
pledge200InputElement.addEventListener("input",(e) => {
    minmaxChecker(e, 200, Infinity)
})

