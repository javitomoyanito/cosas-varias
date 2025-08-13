// Función que inicializa el mapa de Google Maps
function iniciarMap(){
    // Coordenadas de ubicación inicial (Santiago de Chile)
    var coord = {lat:-33.3877018 , lng:-70.6856146};
    // Crear el mapa y centrarlo en las coordenadas especificadas
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10, // Nivel de zoom
        center: coord // Centro del mapa
    });

    // Crear un marcador en la ubicación especificada
    var marker = new google.maps.Marker({
        position: coord, // Posición del marcador
        map: map // Asignar el marcador al mapa
    });
}