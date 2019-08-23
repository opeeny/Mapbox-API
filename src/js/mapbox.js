var mapboxgl;
mapboxgl.accessToken = "pk.eyJ1Ijoib3BlZW55IiwiYSI6ImNqemE5cWw3cDAzdzUzYnFtMW1yNDN0NXkifQ.o90PK6RI-98tnL4hjdhOKA";
var map = new mapboxgl.Map({
    container: "map",//container id
    style:  "mapbox://styles/mapbox/dark-v10",
    center: [32.590362999999996, 0.31978989999999996],//starting position, Long, Lat
    minZoom: 10,
    maxZoom: 18,
    scrollZoom: false
});
function rotate(){
    map.easeTo({bearing: 40, duration: 10000, pitch: 0, zoom: 18});
    setTimeout(function(){
        map.easeTo({bearing: 180, duration: 10000, pitch: 0, zoom: 14});
        setTimeout(function(){
            map.easeTo({bearing: 270, duration: 10000, pitch: 0, zoom: 16});
            setTimeout(function() {
                rotate();
            },10000)
        },10000)
    },10000)
}
map.on('load', function(){
   // rotate()
});
map.on('load', function(){
   // alert('weee..');
    map.addLayer({
        id: 'terrain-data',
        type: 'line',
        source: {
            type: 'vector',
            url: 'mapbox://mapbox.mapbox-terrain-v2'
        },
        'source-layer': 'contour'
    });
});
map.on('load', function(e) {
	alert('what is this');
	mark();
});
function mark(){
	alert('gus');
var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0.3293, 32.5711]//Mak
      },
      properties: {
        title: 'Mapbox',
        description: 'Makerere University'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0.6119, 32.4759]
      },
      properties: {
        title: 'Mapbox',
        description: 'Ndejje University'
      }
    }]
  };
  var feature = features[0];
  var popup = new mapboxgl.Popup({offset: [0, 0] })
	  .setLngLat(feature.geometry.coordinates)
	  .setHTML('<div class="marker"><h2>' + feature.properties.description + '</p></div>')
	  .addTo(map);
}
/*Toggle side panel*/
function toggleSide() {
	//alert('side panel');
	document.getElementById("panel").style.width = "250px";
	document.getElementById("main").style.width = "250px";
}
function closeSide() {
	//alert('...');
	document.getElementById("panel").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}
/* Add Markers */
/*var markers = new mapboxgl.Marker()
    .setLngLat(0.6119, 32.4759)
    .addTo(map);*/
/*geojson.features.forEach(function(marker){
    //create HTML div element dynamically for each feature
    var University = document.createElement('div');
    University.className = 'marker';
    //make a marker for feature and add to the map
    var marker = new mapboxgl.Marker(University)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
})
