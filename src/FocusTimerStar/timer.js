import state from './state.js'
import * as el from './elements.js'
import { reset } from './action.js'
import { kichenTimer } from './sound.js'


//Pra clicar e para em algum momento
export function countdown(){

    clearTimeout(state.countdownId)

    if (!state.isRunning) {
    return //momento de parada       
    }

    //TRANSFORMA OS MINUTOS E SEGUNDOS EM NUMEROS
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    //PARA USAR O DECREMENTO 
    seconds--

    if (seconds < 0 ) {
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        kichenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)


    //Função para executar daqi um tempo
    // daqui 1 segundo executar de novo
    state.countdownId = setTimeout(() => countdown(), 1000) //callback function
}


export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")

}