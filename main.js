//alert('¡Bienvenida a nuestro sitio! Para recibir novedades y promociones no dejes de subscribirte');

$("#botonsesion").click(function (event) {
    event.preventDefault()
    var email = document.getElementById("email").value;
    var clave = document.getElementById("clave").value;

    if (email === "margarita54@yahoo.com" && clave === "marga") {
        welcomeUser(email)
    }
    else {
        alert("El usuario y contreseña no son validos")
    }

})

function welcomeUser(email) {
    $.ajax({
        url: "usuario.json", success: function (data) {

            const user = data.filter(usuario => usuario.email === email)
            alert(`Bienvenida ${user[0].firstname}`)
        }
    });
}

function registrar() {
    var email = document.getElementById("email2").value;
    var clave = document.getElementById("clave2").value;
    var confirmarclave = document.getElementById("confirmarclave2").value;

    login(email, clave)

    if (email != 0 && clave != 0 && clave === confirmarclave) {
        alert("Su cuenta se ha creado con éxito")
    }
    else if (email != 0 && clave != 0 && clave !== confirmarclave) {
        alert("Las contraseñas no coinciden")
    }
    else {
        alert("Por favor asegurese de haber rellenado todos los campos")
    }
}


var wishList = localStorage.getItem('wishList') ? JSON.parse(localStorage.getItem('wishList')) : []

wishList.forEach(productName => addToList(productName))

document.querySelectorAll('.target-cartera').forEach(boton => {
    boton.onclick = () => {

        var productName = boton.parentNode.parentNode.childNodes[1].textContent
        if (wishList.indexOf(productName) === -1) {
            wishList.push(productName)
            addToList(productName)
            localStorage.setItem('wishList', JSON.stringify(wishList))
            alert(`Agregaste la ${productName} a tu lista de deseos`)
        } else {
            alert(`La ${productName} ya esta en tu lista de deseos`)
        }
    }
})

function addToList(productName) {
    var insertarALista = document.createElement("li");
    insertarALista.innerHTML = productName;
    document.querySelector(".lista").appendChild(insertarALista);
}

$("nav").hover(function () {
    $(this).css("background-color", "#cb997e");
}, function () {
    $(this).css("background-color", "#ddbea9");
});

$("#hoverLogo").hover(function () {
    $(this).css("width", "50")
    $(this).css("height", "50");
}, function () {
    $(this).css("width", "30")
    $(this).css("height", "30");
});