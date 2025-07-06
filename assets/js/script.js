const ele = document.getElementById("ele1")
ele.style.backgroundColor = "green"
ele.addEventListener("click", function pintar(){
    ele.style.backgroundColor = 'yellow'
});

/*
- Se separan los archivos pintar.html y script.js
- Se modifica la función para integrar "pìntar" como función anónima (líneas 3 y 4)
- Se modifica el código para que sea "green" por defecto y al clickear cambie a "yellow" (línea 2)
*/