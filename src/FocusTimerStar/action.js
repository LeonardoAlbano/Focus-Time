import state from './state.js'  //para mudar o valor do estado 
import * as timer from './timer.js'
import  * as el from "./elements.js"
import * as sounds from './sound.js'


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()
}


export function reset() {
    state.isRunning = true
    document.documentElement.classList.remove('light')
    timer.updateDisplay()
    
    sounds.buttonPressAudio.play()
}


export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}


export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if (state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}

