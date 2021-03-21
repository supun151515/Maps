// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
  const currentLatlng = { lat: -41.29896437345259, lng: 174.76523286703488 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: currentLatlng,
    mapTypeId: "terrain",
  });

  // Define the LatLng coordinates for the polygon's path.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: currentLatlng,
  });
  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (e) => {
    alert(inside(WellingtonCoords, e.latLng.lat(), e.latLng.lng()));
  });
  const WellingtonCoords = [{ lat: -41.3031394843847, lng: 174.76821548345944 }, { lat: -41.30271130601301, lng: 174.76802303496262 }, { lat: -41.302412083223274, lng: 174.76757309440038 }, { lat: -41.30242366931645, lng: 174.766940428349 }, { lat: -41.302628692450696, lng: 174.76613610092065 }, { lat: -41.302651864557994, lng: 174.76439870003125 }, { lat: -41.30057037198369, lng: 174.76517251733205 }, { lat: -41.29990742380718, lng: 174.7628564298477 }, { lat: -41.299011727801954, lng: 174.76292683783433 }, { lat: -41.29872860873327, lng: 174.76321182254216 }, { lat: -41.297807707604136, lng: 174.76391053799054 }, { lat: -41.29827319754617, lng: 174.76542464497945 }, { lat: -41.29735228998689, lng: 174.76702458265683 }, { lat: -41.29777546575353, lng: 174.76879752281567 }, { lat: -41.29874372188187, lng: 174.76853265467545 }, { lat: -41.300002131102126, lng: 174.76839653256795 }, { lat: -41.301068082447244, lng: 174.76928300264737 }, { lat: -41.30224887021383, lng: 174.76953244808576 }, { lat: -41.30288157021988, lng: 174.76943857077023 }, { lat: -41.30344575613052, lng: 174.76891285780331 },]
  // Construct the polygon.
  const WellingtonCity = new google.maps.Polygon({
    paths: WellingtonCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  WellingtonCity.setMap(map);

  WellingtonCity.addListener('click', (e) => {
    alert(inside(WellingtonCoords, e.latLng.lat(), e.latLng.lng()));
  });
}


function inside(latLngs, lat, lng) {
  // ray-casting algorithm based on
 
  vertices_y = new Array();
  vertices_x = new Array();
  longitude_x = lng;
  latitude_y = lat;
  var r = 0;
  var i = 0;
  var j = 0;
  var c = 0;
  var point = 0;

  for (r = 0; r < latLngs.length; r++) {
    vertices_y.push(latLngs[r].lat);
    vertices_x.push(latLngs[r].lng);
  }
  points_polygon = vertices_x.length;
  for (i = 0, j = points_polygon; i < points_polygon; j = i++) {
    point = i;
    if (point == points_polygon)
      point = 0;
    if (((vertices_y[point] > latitude_y != (vertices_y[j] > latitude_y)) && (longitude_x < (vertices_x[j] - vertices_x[point]) * (latitude_y - vertices_y[point]) / (vertices_y[j] - vertices_y[point]) + vertices_x[point])))
      c = !c;
  }
  return c;
};


// Retrive Polygon data from text file
var PolygonData = [];
async function loadFile(file) {
  let text = await (new Response(file)).text();
  var lines = text.split('\n');
  var result = "[";
  for (var line = 0; line < lines.length; line++) {
    var lineData = lines[line];

    lineData = lineData.split(',');
    lineData1 = parseFloat(lineData[0]);
    lineData2 = parseFloat(lineData[1]);
    PolygonData.push({ lat: lineData1, lng: lineData2 });
    result += ("{lat:" + lineData1 + "," + "lng:" + lineData2 + "},");

  }
  result += "]";
  console.log(result);
}

