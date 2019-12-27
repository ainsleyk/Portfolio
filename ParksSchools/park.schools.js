
		 	var mymap = L.map('mapid').setView([47.620, -122.332], 12);
			//Load tile layer
			L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA, </a><a href = "https://data.seattle.gov/">Seattle Parks, </a><a href = "https://www.seattleschools.org/departments/enrollment_planning/enrollment_data/maps"> Seattle Public Schools</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> Plug-Ins:<a href = "https://github.com/jseppi/Leaflet.MakiMarkers">Icons, </a><a href ="https://github.com/Leaflet/Leaflet.markercluster"> Clustering</a>',
				maxZoom: 20,
				id: 'mapbox.streets',
				accessToken: 'pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ'
			}).addTo(mymap);


	// //Mapbox accesscode for Makimarkers
			L.MakiMarkers.accessToken = 'pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ';

	//Add layers to map
		  $.getJSON("SeattleParks.geojson",function(data){
				var tree = L.MakiMarkers.icon({
				  icon: "park",
				  color: "#31802C",
			  	size: "m"
			});

		   var parks = L.geoJson(data,{
			   pointToLayer: function(feature,latlng){
				   var marker = L.marker(latlng,{icon: tree});
				   marker.bindPopup(feature.properties.SITENAME);
				return marker;}
		 });

		  var clusters = L.markerClusterGroup();
		    clusters.addLayer(parks);
		  mymap.addLayer(clusters);
	  });

	   $.getJSON("SchoolColor.geojson",function(data){
	     L.geoJson(data, {
				  	style: function(feature){
	        var fillColor,
	            density = feature.properties.Join_Count;
	        if ( density > 21 ) fillColor = "#006837";
	        else if ( density > 11 ) fillColor = "#31a354";
	        else if ( density > 7 ) fillColor = "#78c679";
	        else if ( density > 4 ) fillColor = "#c2e699";
	        else if ( density > -1 ) fillColor = "#ffffcc";
	        else fillColor = "black";  // no data
	        return { color: "#999", weight: 1, fillColor:fillColor, fillOpacity: .7 };
	      },

					onEachFeature: function (feature,layer){
					  layer.bindPopup('<b>' + feature.properties.ES_ZONE + " Elementary School " + '</b>' + '<br/>' + "Number of Parks: " + feature.properties.Join_Count)
					}
					}).addTo(mymap);
	          });
