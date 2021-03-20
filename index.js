// This example creates a simple polygon representing the Bermuda Triangle.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: { lat: -41.29896437345259, lng: 174.76523286703488 },
    mapTypeId: "terrain",
  });
  // Define the LatLng coordinates for the polygon's path.
  
  const triangleCoords = [
    { lat: -41.29896437345259, lng: 174.76523286703488 },
    { lat: -41.3004796955793, lng: 174.76718551519772 },
    { lat: -41.30268813392684, lng: 174.76514167192838 },
    { lat: -41.300318492771254, lng: 174.76438528898618 }
  ];

  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  bermudaTriangle.setMap(map);
}
var PolygonData = [];

async function loadFile(file) {
    let text = await (new Response(file)).text();
    var lines = text.split('\n');
    
    
    var result = "[";
    for(var line = 0; line < lines.length; line++){
        var lineData = lines[line];
        
        lineData = lineData.split(',');
        lineData1 = parseFloat(lineData[0]);
        lineData2 = parseFloat(lineData[1]);
        PolygonData.push({lat: lineData1, lng: lineData2});
        result += ("{lat:" + lineData1 + "," + "lng:" + lineData2 + "},");

    }
    result +="]";
    console.log(result);
    
    
  }

  