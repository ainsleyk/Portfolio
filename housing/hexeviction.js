var sf = L.map('sf').setView([37.758, -122.433], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/ainsleykm/ckb15sz0j1evp1inz544l19m0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ', {
  attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      minZoom: 12,
    }).addTo(sf);

  $.getJSON("housing/Json/TotalCountHexie.json",function(data){
    var hex =  L.geoJson(data,{
          style: function(feature){
      var fillColor,
          grade = feature.properties.Join_Count;
      if (grade > 140) fillColor = "#27123D";
      else if ( grade > 100 ) fillColor = "#3e1c61";
      else if ( grade > 50 ) fillColor = "#6b31a8";
      else if ( grade > 10 ) fillColor = "#8a42d6";
      else if ( grade > 0 ) fillColor = "#a859ff";
      else fillColor = "#5e5b53"; fillOpacity: .1;  // no data
      return { color: "#0000", weight: 1, fillColor:fillColor, fillOpacity: .50};
    },
    onEachFeature: function (feature,layer){
      layer.bindPopup('<b>' + "Number of Eviction Notices: " + '</b>' +  feature.properties.Join_Count)
    }
  }).addTo(sf);
  });
