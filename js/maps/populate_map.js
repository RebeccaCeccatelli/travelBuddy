var leaflet_map = L.map('map').setView([43.7696, 11.2558], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(leaflet_map);

addUserLocationMarkerWithPopup(leaflet_map);

var urlParams = new URLSearchParams(window.location.search);
var type = urlParams.get('type');

var jsonFile;
if (type === 'toilets') {
    jsonFile = '../../json_files/toilets.json';
}
else if (type === 'wifi_hotspots') {
    jsonFile = '../../json_files/wifi_hotspots.json';
}
else if (type === 'luggage_deposit') {
    jsonFile = '../../json_files/luggage_deposit.json';
}
else if (type === 'parking_lots') {
    jsonFile = '../../json_files/parking_lots.json';
}
else if (type === 'tourist_attractions') {
    jsonFile = '../../json_files/tourist_attractions.json';
}
else if (type === 'dining_options') {
    jsonFile = '../../json_files/dining_options.json';
}

fetch(jsonFile)
    .then(function(response) {
        return response.json();
    })
    .then(function(popupData) {
        addBusinessMarkerWithPopup(leaflet_map, popupData);
    })
    .catch(function(error) {
        console.error('Error while loading JSON file:', error);
    });

function addUserLocationMarkerWithPopup(map) {
    var customIcon = L.icon({
        iconUrl: '../../images/icons/red_icon.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    var marker = L.marker([43.798296474714505, 11.252671445131638], { icon: customIcon })
        .bindPopup('You are here!')
        .addTo(map);
}

function addBusinessMarkerWithPopup(map, popupData) {
    popupData.forEach(function(data) {
        var marker = L.marker(data.coordinates).addTo(map);

        var popupContent = '<div class="popup_message">' + data.message + '</div>' +
            '<div class="popup_button"><button onclick="reserve()">Reserve</button></div>';

        marker.bindPopup(popupContent);
    });
}

function reserve() {
    var modalWindow = window.open('../../html/user_area/reservation.html');
}
