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


document.querySelector("#jade").onclick = function listaDeDeseos() {
    listaDeDeseo.push("carteraJade")
    alert ("Agregaste la cartera Jade a tu lista de deseos")
    var insertarALista = document.createElement("li");
    insertarALista.innerHTML = "Cartera Jade";
    document.querySelector(".lista").appendChild(insertarALista);
}


document.querySelector("#aghata").onclick = function listaDeDeseos() {
    listaDeDeseo.push("carteraAghata")
    alert ("Agregaste la cartera Aghata a tu lista de deseos")
    var insertarALista = document.createElement("li");
    insertarALista.innerHTML = "Cartera Aghata";
    document.querySelector(".lista").appendChild(insertarALista);
}

document.querySelector("#amatista").onclick = function listaDeDeseos() {
    listaDeDeseo.push("carteraAmatista")
    alert ("Agregaste la cartera Amatista a tu lista de deseos")
    var insertarALista = document.createElement("li");
    insertarALista.innerHTML = "Cartera Amatista";
    document.querySelector(".lista").appendChild(insertarALista);
}

/* 
document.querySelector("#alejandrita").onclick = function listaDeDeseos() {
    listaDeDeseo.push("carteraAlejandrita")
    alert ("Agregaste la cartera Alejandrita a tu lista de deseos")
    var insertarALista = document.createElement("li");
    insertarALista.innerHTML = "Cartera Alejandrita";
    document.querySelector(".lista").appendChild(insertarALista);
} */

const cartera3= document.querySelector("#alejandrita")
cartera3.addEventListener("click", ()=>{
    listaDeDeseo.push("carteraAlejandrita")
    alert ("Agregaste la cartera Alejandrita a tu lista de deseos")
    var insertarALista = document.createElement("li");
    insertarALista.innerHTML = "Cartera Alejandrita";
    document.querySelector(".lista").appendChild(insertarALista);   
})

/* 


function myFunction() {
    var para = document.createElement("li");
    para.innerHTML = "cartera";
    document.querySelector(".lista").appendChild(para);
  }


 */

    // function impimirEnLista (carteras){
    // var nuevo= document.createElement("li") 
    // nuevo .innerHTML= "carteras"                   
    // var lista=document.querySelector(".lista")
    // lista.appenChild(nuevo)
    // }

    // impimirEnLista("cartera")

    // const content = element.insertAdjacentHTML("nayla")
/* 
/* listaDeDeseo.forEach(element => {
    var nuevo= document.createElement("li") 
    nuevo.textContent= element                   
    var lista=document.querySelector(".lista")
    lista.appenChild(nuevo)          
})  */
/* function agregarALista(element) {
    
    listaDeDeseo.forEach(element => {
        var li= document.createElement("li") 
        li.textContent= element                   
        var ul=document.querySelector(".lista")
        ul.appenChild(li)          
    })
    
    listaDeDeseo.forEach(element => console.log("paso adentro"))
    } */