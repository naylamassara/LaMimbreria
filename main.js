//alert('¡Bienvenida a nuestro sitio! Para recibir novedades y promociones no dejes de subscribirte');

function validarDatos() {
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;

    if (email != 0 && clave != 0) {
        alert("Sesión iniciada")
    }
    else {
        alert("Por favor inicie sesión para acceder a la tienda")
    }
    
}

function validarDatos2() {
    var email = document.getElementById("email2").value;
    var clave = document.getElementById("clave2").value;
    var confirmarclave = document.getElementById("confirmarclave2").value;

    if (email != 0 && clave != 0 && clave===confirmarclave) {
        alert("Su cuenta se ha creado con éxito")
    }
    else if ( email != 0 && clave != 0 && clave!==confirmarclave){
        alert("Las contraseñas no coinciden")
    }
    else {
        alert("Por favor asegurese de haber rellenado todos los campos")
    }
    
}

var listaDeDeseo= []


class carteras{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

var carteraAmatista = new carteras("Amatista",1500);
var carteraJade = new carteras("Jade",1700);
var carteraAghata = new carteras("Aghata",1500);
var carteraAlejandrita = new carteras("Alejandrita",2000);

document.getElementById("jade").onclick = function listaDeDeseos() {
listaDeDeseo.push("carteraJade")
alert ("Agregaste la cartera Jade a tu lista de deseos")
}

document.getElementById("aghata").onclick = function listaDeDeseos() {
    listaDeDeseo.push("carteraAghata")
    alert ("Agregaste la cartera Aghata a tu lista de deseos")
}

document.getElementById("amatista").onclick = function listaDeDeseos() {
    listaDeDeseo.push("carteraAmatista")
    alert ("Agregaste la cartera Amatista a tu lista de deseos")
}

document.getElementById("alejandrita").onclick = function listaDeDeseos() {
    listaDeDeseo.push("carteraAlejandrita")
    alert ("Agregaste la cartera Alejandrita a tu lista de deseos")
}

/* listaDeDeseo.forEach(element => {
    var nuevo= document.createElement("li") 
    nuevo.textContent= element                   
    var lista=document.querySelector(".lista")
    lista.appenChild(nuevo)          
})  */

/* listaDeDeseo.forEach(element => {
    var li= document.createElement("li") 
    li.textContent= element                   
    var ul=document.querySelector(".lista")
    ul.appenChild(li)          
}) 
 */

listaDeDeseo.forEach(element => console.log("paso adentro"));