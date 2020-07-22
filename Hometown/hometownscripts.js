var map = L.map('map').setView([34.128142, -111.610899],
  6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/ainsleykm/ck9lyymde1x7s1imt1mah4z9n/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ', {
    attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        minZoom: 6.5,
        maxZoom: 16,
  })
  .addTo(map);

// var northeast = L.LatLng(37.075, -114.687);
// var southwest = L.LatLng(31.318, -108.963);
// var bounds = L.latLngBounds(northeast, southwest);
//
// map.setMaxBounds(bounds);
// map.on('drag', function() {
//     map.panInsideBounds(bounds, { animate: false });
// });

map.bounds = [],
   map.setMaxBounds([
     [37.075, -114.687],
     [31.318, -108.963]
   ]);
