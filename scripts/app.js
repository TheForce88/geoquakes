// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

  // What is the structure of the data?
  //JSON
  //to get 'quakes' copy+paste entire json file into variable
     var quakes = "";
  // How many earthquakes does it list?
     quakes.features.length;
  // How would you grab the first earthquake?
     quakes.features[0];
  // How would you grab its title?
     quakes.features[0].properties.title;
  // How would you grab its geological coordinates:
  // latitude?
     quakes.features[0].geometry.coordinates[0];
  // longitude?
     quakes.features[0].geometry.coordinates[1];
  // When did it happen?
     var quakeDate = new Date(quakes.features[0].properties.time);
  // How many hours ago is that?
     var quakeEnd = new Date(quakes.features[0].properties.updated);
     var quakeDateHr = quakeEnd.getHours() - quakeDate.getHours();
     
});
