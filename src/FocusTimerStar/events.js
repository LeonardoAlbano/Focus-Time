import { controls } from "./elements.js";
import * as actions from './action.js'
import * as el from "./elements.js"
import  { updateDisplay } from "./timer.js";
import state from "./state.js";

// caturando os eventos de clices e verificando quais são ações
// evento de capturar e obervar os botoçoes para disparar as ações
export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () =>{
        el.minutes.textContent = ""
    })

    // expressão regular somente numeros
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}