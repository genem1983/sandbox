var Geodesic = L.geodesic([], {
  weight: 7,
  opacity: 0.5,
  color: 'red',
  steps: 50
}).addTo(map);

var berlin = new L.LatLng(52.5, 13.35);
var losangeles = new L.LatLng(33.82, -118.38);
var capetown = new L.LatLng(-33.91, 18.41);

Geodesic.setLatLngs([
  [berlin, losangeles, capetown, berlin]
]);

var polygon = L.polygon([
  berlin,
  losangeles,
  capetown
]).addTo(map);