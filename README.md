# Maps

## ray-casting algorithm based on
https://en.wikipedia.org/wiki/Point_in_polygon

##Below function checks whether you are inside polygon or not.

function inside(latLngs, lat, lng) {
  // ray-casting algorithm based on
  // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

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
