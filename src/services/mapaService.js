import config from '../../config'

export function initMap(divMapa, dataService) {

    /**
     * Dibujo un circulo para que se vea bien CABA de lejos.
     */
    function circuloCaba() {        
        var circulo = new google.maps.Circle({
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            map: map,
            center: config.mapa.centro_caba,
            radius: 150000
        });

        // Eventos del Circulo
        circulo.addListener("mouseover", function (event) {
            let nombre = "CABA"
            let cantidad = dataService.countGroup("provincia", nombre);

            muestraInfo(event.latLng, nombre, cantidad);
        });

        circulo.addListener("mouseout", function (event) {
            infowindow.close();
        });
    }

    function colorProvincias() {
        // Styles
        map.data.setStyle(function (feature) {
            let nombre = feature.getProperty("Name");
            let cantidad = dataService.countGroup("provincia", nombre);

            let fillColor =
                cantidad > 0
                    ? config.mapa.colores.inactivo
                    : config.mapa.colores.excluido;
            return {
                fillColor: fillColor
            };
        });
    }

    function eventosProvincias() {
        // Eventos
        map.data.addListener("mouseover", function (event) {
            let nombre = event.feature.getProperty("Name");
            let cantidad = dataService.countGroup("provincia", nombre);

            map.data.overrideStyle(event.feature, {
              fillColor: config.mapa.colores.activo
            });

            muestraInfo(event.latLng, nombre, cantidad);
        });

        map.data.addListener("mouseout", function (event) {           
            map.data.revertStyle();
            infowindow.close();
        });
    }

    function muestraInfo(pos, nombre, cantidad) {
        infowindow.setContent(
            "<div class='info-window'>" + "<h6>" + nombre + "</h6>" + "Cantidad de equipos: <b>" + cantidad + "</b></div>"
        );
        infowindow.setPosition(pos);
        infowindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
        infowindow.open(map);
    }

    // Creo el mapa en el centro de Argentina
    const infowindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById(divMapa), {
        center: config.mapa.centro_argentina,
        zoom: config.mapa.zoom
    });

    // Hago "Responsive"
    google.maps.event.addDomListener(window, "resize", function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
    });

    colorProvincias(map);
    eventosProvincias(map);
    circuloCaba(map);

    // Cargo geolocalizacion de las provincias
    map.data.loadGeoJson(config.mapa.geoJson);
}