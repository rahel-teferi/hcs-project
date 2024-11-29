var map = L.map("map").setView([52.52001, 13.40495], 2);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([52.52001, 13.40495]).addTo(map);
marker += L.marker([35.944, 14.3795]).addTo(map);
marker += L.marker([40.71427, -74.00597]).addTo(map);
marker += L.marker([9.02497, 38.74689]).addTo(map);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(map);
}

map.on("click", onMapClick);
