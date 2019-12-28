
mapboxgl.accessToken = 'pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [-124, 8],
  zoom: 3
});

map.on('load', function(){
  map.addSource('earthquakes', {
    "type": "geojson",
    "data": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
  });
});
