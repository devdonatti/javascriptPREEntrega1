
let respuesta = confirm("Hola! Desea hacer un pedido?")
if (respuesta === true) {
    let nombre = prompt("Introduja su nombre ")
    alert(`Hola! ${nombre} bienvenido/a a TiendaSaludable`)
    vender()
}
else {
    alert("hasta la proxima")
}

function vender() {
    let comida1 = "MILANESA DE BERENJENA CON PURÉ"
    let comida2 = "TARTA DE VERDURAS CON ENSALADA"
    let comida3 = "POLLO GRILLADO CON CALABAZA"

    alert("A continuacion se mostrarán los menús del dia de hoy")
    alert("opcion 1 " + comida1)
    alert("opcion 2 " + comida2)
    alert("opcion 3 " + comida3)
    let opcionCorrecta = true

    do {
        let opcionUsuario = prompt("Escriba 1 si desea MILANESA DE BERENJENA CON PURÉ, escriba 2 si desea TARTA DE VERDURAS CON ENSALADA o escriba 3, si desea POLLO GRILLADO CON CALABAZA")
        if (opcionUsuario == 1 && true) {
            confirm(`Elegiste ${comida1}?Selecciona Aceptar si es correcto, o en cancelar para volver a elegir tu menu`)
            alert("gracias por su pedido, ya se lo estamos preparando! ")
            break
        }
        else if (opcionUsuario == 2 && true) {
            confirm(`Elegiste ${comida2}?Selecciona Aceptar si es correcto, o en cancelar para volver a elegir tu menu`)
            alert("gracias por su pedido, ya se lo estamos preparando! ")
            break
        }
        else if (opcionUsuario == 3 && true) {
            confirm(`Elegiste ${comida3}?Selecciona Aceptar si es correcto, o en cancelar para volver a elegir tu menu`)
            alert("gracias por su pedido, ya se lo estamos preparando! ")
            break
        }
        else if (!isNaN(opcionCorrecta && false)) {
            alert("Tu opcion es incorrecta, escribe un numero")
        }
        else {
            alert("Hasta pronto!")
            console.log("usuario no eligió ningun menu")
            break
        }
    }
    while (opcionCorrecta) {
        alert("Te avisamos cuando sale el delivery :)")
    }
}
