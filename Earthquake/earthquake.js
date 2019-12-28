mapboxgl.accessToken = 'pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ainsleykm/ck39270pf0hqg1cqj324m6va1',
  center: [-124, 8],
  zoom: 1
});

map.on('load', function(){
map.addSource('earthquakes', {
  "type": "geojson",
  "data": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson"
});

//https://docs.mapbox.com/mapbox-gl-js/example/heatmap-layer/
map.addLayer({
    "id": "earthquakes-heat",
    "type": "heatmap",
    "source": "earthquakes",
    "maxzoom": 8,
    "paint": {
// Increase the heatmap weight based on frequency and property magnitude
    "heatmap-weight": [
        "interpolate",
        ["linear"],
        ["get", "mag"],
        0, 0,
        6, 1
    ],
// Increase the heatmap color weight weight by zoom level
// heatmap-intensity is a multiplier on top of heatmap-weight
    "heatmap-intensity": [
        "interpolate",
        ["linear"],
        ["zoom"],
        0, 1,
        9, 3
    ],
// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
// Begin color ramp at 0-stop with a 0-transparancy color
// to create a blur-like effect.
  "heatmap-color": [
      "interpolate",
      ["linear"],
      ["heatmap-density"],
      0, "rgba(33,102,172,0)",
      0.2, "#FEDA84",
      0.4, "#FF9B83",
      0.6, "#976393",
      0.8, "#685489",
      1, "#43457F"
  ],
// Adjust the heatmap radius by zoom level
  "heatmap-radius": [
      "interpolate",
      ["linear"],
      ["zoom"],
      0, 2,
      9, 20],
// Transition from heatmap to circle layer by zoom level
  "heatmap-opacity": [
      "interpolate",
      ["linear"],
      ["zoom"],
      7, 1,
      9, 0],
 }
}, 'waterway-label');

map.addLayer({
    "id": "earthquakes-point",
    "type": "circle",
    "source": "earthquakes",
    "minzoom": 7,
    "paint": {
// Size circle radius by earthquake magnitude and zoom level
      "circle-radius": [
      "interpolate",
          ["linear"],
          ["zoom"],
          7, [
      "interpolate",
          ["linear"],
          ["get", "mag"],
          1, 1,
          6, 4
        ],
      16, [
    "interpolate",
        ["linear"],
        ["get", "mag"],
        1, 5,
        6, 50]
  ],
// Color circle by earthquake magnitude
"circle-color": [
    "interpolate",
    ["linear"],
    ["get", "mag"],
    1, "rgba(33,102,172,0)",
    2, "#E7D3FC",
    3, "#6A0DC4",
    4, "#B871FF",
    5, "#9D38FF",
    6, "#6A0DC4"
],
"circle-stroke-color": "white",
"circle-stroke-width": 1,
// Transition from heatmap to circle layer by zoom level
"circle-opacity": [
    "interpolate",
    ["linear"],
    ["zoom"],
    7, 0,
    8, 1
    ]}
}, 'waterway-label');
});

map.on('click', 'earthquakes-point', function (e) {
  console.log(e)
  var dateTime = new Date(e.features[0].properties.time);
  var formatted = dateTime.toGMTString();
      map.getCanvas(). style.cursor= 'pointer';
      //1. set the coordinates of the popup
      var coordinates = e.features[0].geometry.coordinates;
      //2. create the information that will display in the popup
      var description = "<h3>"+e.features[0].properties.title+"</h3>"+ "<p><b>" + formatted + "</b>" + "<br><b>Magnitude:</b> " + e.features[0].properties.mag + "<br><b>Felt by:</b> " + e.features[0].properties.felt + "<br><b> Tsunami:</b> " + e.features[0].properties.tsunami + "<br>" + "<a target='_blank' href=" + e.features[0].properties.url + ">More Details</a>"+"</p>";

      //3. make the popup
      new mapboxgl.Popup().setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
        });

        //pointer on hover
        map.on('mouseenter', 'earthquakes-point', function () {
        map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'earthquakes-point', function () {
        map.getCanvas().style.cursor = '';
        });

        map.addControl(new mapboxgl.FullscreenControl());
