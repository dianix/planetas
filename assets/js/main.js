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
                //crearTarjeta(datos);
                console.log(datos);
            }))
        })
    })

var crearTarjeta = function (datos) {
    
    var tarjeta = document.createElement();
    var fila = $("<div class='row center-align'/>")
    $(pokemons).each(function (i, pokemon) {
        var cajaPokemon = $("<div class='card col s6 m3 hoverable'/>");
        var pokeFoto = $("<img class='responsive-img'/>").attr("src", pokeimagenes[i].imagen);
        var nombre = $("<a class='datos'/>").text(pokemon.name).attr("data-info", pokemon.url).attr('href', "#modal1");
        cajaPokemon.append(pokeFoto).append(nombre);
        fila.append(cajaPokemon);
        contenedorPokemones.append(fila)
    });
};