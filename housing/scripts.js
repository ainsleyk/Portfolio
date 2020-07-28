var sf = L.map('sf').setView([37.755509, -122.440651], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/ainsleykm/ckb15sz0j1evp1inz544l19m0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ', {
  attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      minZoom: 12,
}).addTo(sf);


  $.getJSON("housing/Json/A_HOLC_Count.json",function(data){
    var ablock =  L.geoJson(data,{
          style: function(feature){
      var fillColor,
          grade = feature.properties.Join_Count;
      if (grade > 779) fillColor = "#0000B3";
      else if ( grade > 507 ) fillColor = "#1959F7";
      else if ( grade > 0 ) fillColor = "#59A8FF"
      else fillColor = "white"; fillOpacity: .3;  // no data
      return { color: "#5e5b53", weight: .5, fillColor:fillColor, fillOpacity: .50};
    },
    onEachFeature: function (feature,layer){
      layer.bindPopup('<b>' + "HOLC Grade: " + '</b>' +  "Best" + '</br>' + '<b>' + "Number of Eviction Notices: " + '</b>' +  feature.properties.Join_Count)
    }
  }).addTo(holc);
  });

  $.getJSON("housing/Json/B_HOLC_Count.json",function(data){
    var ablock =  L.geoJson(data,{
          style: function(feature){
      var fillColor,
          grade = feature.properties.Join_Count;
      if (grade > 779) fillColor = "#00D600";
      else if ( grade > 507 ) fillColor = "#57F545";
      else if ( grade > 0 ) fillColor = "#8AF787";
      else fillColor = "white"; fillOpacity: .3;  // no data
      return { color: "#5e5b53", weight: .5, fillColor:fillColor, fillOpacity: .50};
    },
    onEachFeature: function (feature,layer){
      layer.bindPopup('<b>' + "HOLC Grade: " + '</b>' +  "Still Desirable" + '</br>' + '<b>' + "Number of Eviction Notices: " + '</b>' +  feature.properties.Join_Count)
    }
  }).addTo(holc);
  });

  $.getJSON("housing/Json/C_HOLC_Count.json",function(data){
    var ablock =  L.geoJson(data,{
          style: function(feature){
      var fillColor,
          grade = feature.properties.Join_Count;
      if (grade > 779) fillColor = "#FFD600";
      else if ( grade > 507 ) fillColor = "#FFF552";
      else if ( grade > 0 ) fillColor = "#FFF787";
      else fillColor = "white"; fillOpacity: .3;  // no data
      return { color: "#5e5b53", weight: .5, fillColor:fillColor, fillOpacity: .50};
    },
    onEachFeature: function (feature,layer){
      layer.bindPopup('<b>' + "HOLC Grade: " + '</b>' +  "Declining" + '</br>' + '<b>' + "Number of Eviction Notices: " + '</b>' +  feature.properties.Join_Count)
    }
  }).addTo(holc);
  });

  $.getJSON("housing/Json/D_HOLC_Count.json",function(data){
    var ablock =  L.geoJson(data,{
          style: function(feature){
      var fillColor,
          grade = feature.properties.Join_Count;
      if (grade > 779) {fillColor = "#BD0000"; fillOpacity: .7}
      else if ( grade > 507 ) {fillColor = "#FF4F4D";  fillOpacity: .5}
      else if ( grade > 0 ) {fillColor = "#FF9187";  fillOpacity: .3}
      else fillColor = "white"; fillOpacity: .3;  // no data
      return { color: "#5e5b53", weight: .5, fillColor:fillColor, fillOpacity:.50};
    },
    onEachFeature: function (feature,layer){
      layer.bindPopup('<b>' + "HOLC Grade: " + '</b>' +  "Hazardous" + '</br>' + '<b>' + "Number of Eviction Notices: " + '</b>' +  feature.properties.Join_Count)
    }
  }).addTo(holc);
  });


// var map1 = L.map('map1').setView([37.758, -122.433], 13);
// //Load tile layer
//   L.tileLayer('https://api.mapbox.com/styles/v1/ainsleykm/ck3uwpmn40uxn1cmjirbovtfg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ', {
//     attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
//         minZoom: 12,
//   }).addTo(map1);
//
//   $.getJSON("CASanFrancisco1937.geojson",function(data){
//       L.geoJson(data,{
//           style: function(feature){
//       var fillColor,
//           grade = feature.properties.holc_grade;
//       if (grade === 'A' ) fillColor = "Green";
//       else if ( grade === 'B' ) fillColor = "Blue";
//       else if ( grade === 'C' ) fillColor = "Yellow";
//       else if ( grade === 'D' ) fillColor = "Red";
//       else fillColor === "black";  // no data
//       return { color: "#999", weight: 1, fillColor:fillColor, fillOpacity: .5 };
//     },
//     onEachFeature: function (feature,layer){
//       layer.bindPopup("HOLC Grade: "  +  feature.properties.holc_grade)
//     },
//   }).addTo(map1);
//   });
//
// //load each json
// $.getJSON("2015.json",function(data){
//     var notice15 = L.geoJson(data,{
//       pointToLayer: function(feature,latlng){
//         var marker = L.marker(latlng);
//         marker.bindPopup("Notice in Zip Code: "  + feature.properties.zip);
//      return marker},
//  });
//
//  var clusters15 = L.markerClusterGroup();
//      clusters15.addLayer(notice15);
//
//
//       $.getJSON("2016.json",function(data){
//         var notice16 = L.geoJson(data,{
//           pointToLayer: function(feature,latlng){
//             var marker = L.marker(latlng);
//             marker.bindPopup('<b>' + "Notice in Zip Code: " + '</b>' +feature.properties.zip);
//          return marker},
//        });
//
//       var clusters16 = L.markerClusterGroup();
//           clusters16.addLayer(notice16);
//
//
//           $.getJSON("2017.json",function(data){
//             var notice17 = L.geoJson(data,{
//               pointToLayer: function(feature,latlng){
//                 var marker = L.marker(latlng);
//                 marker.bindPopup('<b>' + "Notice in Zip Code: " + '</b>' +feature.properties.zip);
//              return marker},
//            });
//
//           var clusters17 = L.markerClusterGroup();
//               clusters17.addLayer(notice17);
//
//
//               $.getJSON("2018.json",function(data){
//                 var notice18 = L.geoJson(data,{
//                   pointToLayer: function(feature,latlng){
//                     var marker = L.marker(latlng);
//                     marker.bindPopup('<b>' + "Notice in Zip Code: " + '</b>' +feature.properties.zip);
//                  return marker},
//                });
//
//               var clusters18 = L.markerClusterGroup();
//                   clusters18.addLayer(notice18);
//
//
//
//                   $.getJSON("2019.json",function(data){
//                     var notice19 = L.geoJson(data,{
//                       pointToLayer: function(feature,latlng){
//                         var marker = L.marker(latlng);
//                         marker.bindPopup('<b>' + "Notice in Zip Code: " + '</b>' +feature.properties.zip);
//                      return marker},
//                    });
//
//                   var clusters19 = L.markerClusterGroup();
//                       clusters19.addLayer(notice19);
//                     map1.addLayer(clusters19);
//
// //call as basemap, only one can be active at a time
//  var basemaps = {
// 		"2015": clusters15,
//     "2016": clusters16,
//     "2017": clusters17,
//     "2018": clusters18,
//     "2019": clusters19
// 	};
//
// 	L.control.layers(basemaps, null, {collapsed:false}).addTo(map1);
//
//   });
//     });
//       });
// });
// });
