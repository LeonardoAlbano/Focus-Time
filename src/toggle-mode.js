let darkMode = true 
const buttonToggle = document.getElementById('toggle-mode')

//Troca do darkmode
function replacement() {
    document.documentElement.classList.toggle('light')

    darkMode = !darkMode
}

buttonToggle.addEventListener('click', replacement)




