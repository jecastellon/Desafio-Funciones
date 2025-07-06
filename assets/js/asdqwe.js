key = document.querySelector(`#key`)
document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
    color = '#FF1D8D'
    cambiarColor()
    }
    else if (event.key === 's' || event.key === 'S') {
    color = 'orange'
    cambiarColor()
    }
    else if (event.key === 'd' || event.key === 'D') {
    color = 'lightblue'
    cambiarColor()
    }
    else if (event.key === 'q' || event.key === 'Q') {
    color = 'purple'
    agregarDiv()
    }
    else if (event.key === 'w' || event.key === 'W') {
    color = 'gray'
    agregarDiv()
    }
    else if (event.key === 'e' || event.key === 'E') {
    color = 'brown'
    agregarDiv()
    }
})
function cambiarColor(){
    key = document.querySelector(`#key`)
    key.style.backgroundColor = color
}
function agregarDiv(){
    contenedor = document.querySelector(`#contenedor`)
    nuevoElemento = document.createElement(`div`)
    nuevoElemento.style.width = '200px'
    nuevoElemento.style.height = '200px'
    nuevoElemento.style.border = `solid black 2px`
    nuevoElemento.style.backgroundColor = color
    contenedor.appendChild(nuevoElemento)
}
/*
- Se guardan los colores presionando "a, s y d"
- Se cambia el color al presionar las teclas
- Se crean divs presionando "q, w y e" con los colores precisados en el desafío
*/