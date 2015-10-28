var fs = require('fs');
var request = require('request');
var colors = require('colors');

var args = process.argv.slice(2)

if (args.length == 0) {
  global.spotting_id = "1892586003";
} else {
  global.spotting_id = args[0];
}

console.log("-------------------------------------------");
console.log("Getting data for".magenta.bold + " " + spotting_id);

var url = "http://www.projectnoah.org/api/v1/spottings/" + spotting_id;

function get_spotting(error, response, html) {
  if (!error) {

    var record = JSON.parse(response.body);
    if (record.identified) {

      // Variables of interest
      var properties = {};
      properties.name = record.scientific;
      properties.category = record.category;
      properties.id = record.id;
      properties.date = record.spotted_on;
      console.log("\t" + "Sci. name: ".blue.bold + properties.name);

      // Create the feature
      var point = {};
      point.type = "Point";
      point.coordinates = record.location.reverse();

      // Wrap everything in a geojson object
      var json = {
        "type": "Feature",
        "geometry": point,
        "properties": properties
      };

      // Write the name
      // TODO use padding XXXX XX 600X (MAJOR MINOR MAGIC)
      var filename = 'spottings/' + properties.id + ".json";
      fs.writeFile(filename, JSON.stringify(json, null, ' '), function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("\t" + "Saved:     ".green.bold + filename);
        }
      })
    } else {
      console.log("\t" + "NO ID FOR THIS RECORD".red.bold);
    }
  }
}

request(url, get_spotting);
