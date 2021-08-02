// URL Api
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Obtener los resultados de la API
const getData = (api) => {
    return fetch(api)
    .then((response) => response.json())
    .then((json) => {
        llenarDatos(json.results)
    })
    .catch((error) => {
        console.log("Error", error);
    });
};

//Dibujar cards de personajes
const llenarDatos = (data) => {
    let html = "";
    data.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 10rem;">';
        html += '<div class="card-boddy">';
        html += `<h5 class="card-tittle">${pj.name}</h5>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
};

// Se ejecuta la API
getData(API);