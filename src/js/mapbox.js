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
	//alert('what is this');
	mark();
});
function mark(){
  var geojson = {
    "type": "FeatureCollection",
    "features": [
    {
    "type": "Feature",
    "properties": {
    "message": "Makerere University",
    //"iconSize": [35, 35]
    },
    "geometry": {
    "type": "Point",
    "coordinates": [32.5688886, 0.3292873]
    }
    },
    {
    "type": "Feature",
    "properties": {
    "message": "Ndejje University",
    //"iconSize": [25, 25]
    },
    "geometry": {
    "type": "Point",
    "coordinates": [32.473703, 0.6118754]
    }
    },
    {
    "type": "Feature",
    "properties": {
    "message": "MUBs",
    "iconSize": [32, 32]
    },
    "geometry": {
    "type": "Point",
    "coordinates": [32.6149588, 0.3281222]
    }
    },
    
    {
    "type": "Feature",
    "properties": {
    "message": "KIU",
   // "iconSize": [25, 25]
    },
    "geometry": {
    "type": "Point",
    "coordinates": [32.6028326, 0.2946565]
    }
    },
    {
    "type": "Feature",
    "properties": {
    "message": "Kyamboogo Univserity",
    "iconSize": [30, 30]
    },
    "geometry": {
    "type": "Point",
    "coordinates": [32.6279459, 0.3520432]
    }
    }
    ]
    };
     
    var map = new mapboxgl.Map({
    container: 'map',
    style:  "mapbox://styles/mapbox/dark-v10",
    center: [32.590362999999996, 0.31978989999999996],//starting position, Long, Lat,
    zoom: 12
    });
     
    // add markers to map
    var geo = geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    /*el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';
     
    el.addEventListener('click', function() {
        alert(marker.properties.message);
    });
     */
    // add marker to map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML("<p>" +marker.properties.message + "</p>"))
    .addTo(map);
    //add a popup
    /*new mapboxgl.Popup(el)
    .setLngLat(marker.geometry.coordinates)
    .setHTML('<div class="marker"><h2>' + marker.properties.message + '</p></div>')
    .addTo(map);*/
    });
    
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
function markerere() {
  var item = document.getElementById('mak');
  item.addEventListener('click', function() {
    var geojson = {
      "type": "FeatureCollection",
      "features": [
      {
      "type": "Feature",
      "properties": {
      "message": "Makerere University",
      "desc": "Wandeg",
      "icon": "theatre"
      },
      "geometry": {
      "type": "Point",
      "coordinates": [32.5688886, 0.3292873]
      }
      },
      ]
      };
      var map = new mapboxgl.Map({
      container: 'map',
      style:  "mapbox://styles/mapbox/dark-v10",
      center: [32.590362999999996, 0.31978989999999996],//starting position, Long, Lat,
      zoom: 13
      });
      
        var geo = geojson.features.forEach(function(marker) {
          // create a DOM element for the marker
          var el = document.createElement('div');
          el.className = 'mak';
      
          // add marker to map
          new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({offset: 25})
          .setHTML("<p>" + marker.properties.message + "</p>"))
          .addTo(map);
          });  

  });

}//end mak
function kyambogo(){
  var item = document.getElementById('kya');
  item.addEventListener('click', function() {
    var geojson = {
      "type": "FeatureCollection",
      "features": [
      {
      "type": "Feature",
      "properties": {
      "message": "Kyambogo University",
      "desc": "Kya",
      "icon": "theatre"
      },
      "geometry": {
      "type": "Point",
      "coordinates": [32.6279459, 0.3520432]
      }
      },
      ]
      };
      var map = new mapboxgl.Map({
      container: 'map',
      style:  "mapbox://styles/mapbox/dark-v10",
      center: [32.590362999999996, 0.31978989999999996],//starting position, Long, Lat,
      zoom: 13
      });
      
        var geo = geojson.features.forEach(function(marker) {
          // create a DOM element for the marker
          var el = document.createElement('div');
          el.className = 'kya';
      
          // add marker to map
          new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({offset: 25})
          .setHTML("<p>" + marker.properties.message + "</p>"))
          .addTo(map);
          });  
  });  
}
function ndejje(){
  alert('Ndejje');
  var item = document.getElementById('ndejje');
  item.addEventListener('click', function() {
    alert('xxxx');
    var geojson = {
      "type": "FeatureCollection",
      "features": [
      {
      "type": "Feature",
      "properties": {
      "message": "Ndejje University",
      "desc": "Kya",
      "icon": "theatre"
      },
      "geometry": {
      "type": "Point",
      "coordinates": [32.473703, 0.6118754]
      }
      },
      ]
      };
      var map = new mapboxgl.Map({
      container: 'map',
      style:  "mapbox://styles/mapbox/dark-v10",
      center: [32.590362999999996, 0.31978989999999996],//starting position, Long, Lat,
      zoom: 9
      });
      
      var geo = geojson.features.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'ndejje';
    
        // add marker to map
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML("<p>" + marker.properties.message + "</p>"))
        .addTo(map);
        });  
});  
}
function mubs(){
  var item = document.getElementById('mubs');
  item.addEventListener('click', function() {
    var geojson = {
      "type": "FeatureCollection",
      "features": [
      {
      "type": "Feature",
      "properties": {
      "message": "MUBs University",
      "desc": "Kya",
      "icon": "theatre"
      },
      "geometry": {
      "type": "Point",
      "coordinates": [32.6149588, 0.3281222]
      }
      },
      ]
      };
      var map = new mapboxgl.Map({
      container: 'map',
      style:  "mapbox://styles/mapbox/dark-v10",
      center: [32.590362999999996, 0.31978989999999996],//starting position, Long, Lat,
      zoom: 10
      });
      
        var geo = geojson.features.forEach(function(marker) {
          // create a DOM element for the marker
          var el = document.createElement('div');
          el.className = 'mubs';
      
          // add marker to map
          new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({offset: 25})
          .setHTML("<p>" + marker.properties.message + "</p>"))
          .addTo(map);
          });  
  });  
  
}
function kiu(){
  var item = document.getElementById('kiu');
  item.addEventListener('click', function() {
    var geojson = {
      "type": "FeatureCollection",
      "features": [
      {
      "type": "Feature",
      "properties": {
      "message": "Kampala Internation University",
      "desc": "KIU",
      "icon": "theatre"
      },
      "geometry": {
      "type": "Point",
      "coordinates": [32.6279459, 0.3520432]
      }
      },
      ]
      };
      var map = new mapboxgl.Map({
      container: 'map',
      style:  "mapbox://styles/mapbox/dark-v10",
      center: [32.590362999999996, 0.31978989999999996],//starting position, Long, Lat,
      zoom: 10
      });
      
        var geo = geojson.features.forEach(function(marker) {
          // create a DOM element for the marker
          var el = document.createElement('div');
          el.className = 'kiu';
      
          // add marker to map
          new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({offset: 25})
          .setHTML("<p>" + marker.properties.message + "</p>"))
          .addTo(map);
          });  
  });  
  
}
