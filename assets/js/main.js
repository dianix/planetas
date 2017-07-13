function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();
        //var url = "data/earth-like-results.json";
        ajax.open("GET", url);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4) {
                resolve(JSON.parse(ajax.responseText));
            };
        };
    });
};

getJSON("data/earth-like-results.json")
    .then(function (planetas) {
        planetas.results.forEach(function (planeta) {
            (getJSON(planeta).then(function (datos) {
                crearTarjeta(datos);
                //console.log(datos);
            }))
        })
    })


var crearTarjeta = function (datos) {    
    // obteniendo datos a usar
    var nombre = datos.pl_name;
    var fechaDesc = datos.pl_disc;
    var pOrbita = datos.pl_orbper;
    var masInfo = datos.pl_edelink;
    console.log(pOrbita)

    // llamando contenedor en html
    var contenedorPlanetas = document.getElementById("planetas-datos");

    // creando elementos para dom
    var contTarjeta = document.createElement("div");
    contTarjeta.className = "col s12 m6";
    var tarjeta = document.createElement("div");
    tarjeta.className = "card";

    // creando sección imagen y nombre de planeta
    var contImagen = document.createElement("div");
    contImagen.className = "card-image";
    var imagen = document.createElement("img");
    imagen.src = "static/img/planeta.jpg";
    var nombrePlaneta = document.createElement("span");
    nombrePlaneta.className = "card-title";
    nombrePlaneta.innerText = nombre;
    //guardando elementos de sección imagen en su contenedor
    contImagen.appendChild(imagen);
    contImagen.appendChild(nombrePlaneta);

    // creando sección de datos de planeta
    var contDatos = document.createElement("div");
    contDatos.className = "card-content";
    var datoFecha = document.createElement("h6");
    datoFecha.innerText = "Descubierto en : " + fechaDesc;
    var datoOrbita = document.createElement("h6");
    datoOrbita.innerText = "Periodo de órbita: " + pOrbita;
    //guardando datos de planeta en su contenedor
    contDatos.appendChild(datoFecha);
    contDatos.appendChild(datoOrbita);
    
    //creando sección enlace más info
    var contEnlace = document.createElement("div");
    contEnlace.className = "card-action";
    var enlace = document.createElement("a");
    enlace.setAttribute("href", masInfo);
    enlace.innerText = "MÁS INFORMACIÓN";
    console.log(enlace)
    //guardando enlace en su contenedor
    contEnlace.appendChild(enlace);
    
    //guardando secciones en tarjeta
    tarjeta.appendChild(contImagen);
    tarjeta.appendChild(contDatos);
    tarjeta.appendChild(contEnlace);
    console.log(tarjeta)
    
    //guardando tarjeta en contenedor con columnas responsive
    contTarjeta.appendChild(tarjeta);
    
    //enviando tarjeta a html
    contenedorPlanetas.appendChild(contTarjeta);
}




