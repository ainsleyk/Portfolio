window.alert("This webpage will ask you for your device location. This infomation will only be used provide feeback on the accuracy of your device and will not be stored or shared. Results accurate within a 100 meters will display green, less accurate results will display red.")

var light = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, </a><a href = "https://data.seattle.gov/">Seattle Parks, </a><a href = "https://www.seattleschools.org/departments/enrollment_planning/enrollment_data/maps"> Seattle Public Schools</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> Plug-Ins:<a href = "https://github.com/jseppi/Leaflet.MakiMarkers">Icons, </a><a href ="https://github.com/Leaflet/Leaflet.markercluster"> Clustering</a>',
  maxZoom: 20,
  minZoom: 10,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ'
});

var dark = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, </a><a href = "https://data.seattle.gov/">Seattle Parks, </a><a href = "https://www.seattleschools.org/departments/enrollment_planning/enrollment_data/maps"> Seattle Public Schools</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> Plug-Ins:<a href = "https://github.com/jseppi/Leaflet.MakiMarkers">Icons, </a><a href ="https://github.com/Leaflet/Leaflet.markercluster"> Clustering</a>',
  maxZoom: 20,
  minZoom: 10,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ'
});

var map = L.map('map', {layers:[dark, light]}).fitWorld();
  function onLocationFound(e) {
      var radius = e.accuracy; //this defines a variable radius as the accuracy value returned by the locate method divided by 2. It is divided by 2 because the accuracy value is the sum of the estimated accuracy of the latitude plus the estimated accuracy of the longitude. The unit is meters.

      L.marker(e.latlng).addTo(map)  //this adds a marker at the lat and long returned by the locate function.
          .bindPopup("You are within " + Math.round(radius * 3.28084) + " feet from this point").openPopup(); //this binds a popup to the marker. The text of the popup is defined here as well. Note that we multiply the radius by 3.28084 to convert the radius from meters to feet and that we use Math.round to round the conversion to the nearest whole number.

          if (radius <= 100) {
          L.circle(e.latlng, radius, {color: 'green'}).addTo(map);
      }
      else{
          L.circle(e.latlng, radius, {color: 'red'}).addTo(map);
      } //this adds a circle to the map centered at the lat and long returned by the locate function. Its radius is set to the var radius defined above.

      var times = SunCalc.getTimes(new Date(), e.latitude, e.longitude);
      var sunrise = times.sunrise.getHours();
      var sunset = times.sunset.getHours();

      var currentTime = new Date().getHours();
          if (sunrise < currentTime && currentTime < sunset){
            map.removeLayer(dark);
            map.addLayer(light);
          }
          else {
            map.removeLayer(light);
            map.addLayer(dark);
          }
  }

  map.on('locationfound', onLocationFound); //this is the event listener
    function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationerror', onLocationError);
  map.locate({setView: true, maxZoom: 16});

  var baseMaps = {
    "Day": light,
    "Night": dark
  };
  L.control.layers(baseMaps, null, {collapsed:false}).addTo(map);
