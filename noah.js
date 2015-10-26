var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');

var args = process.argv.slice(2)

if (args.length == 0) {
  global.spotting_id = "1892586003";
} else {
  global.spotting_id = args[0];
}

console.log("Getting data for".magenta.bold + " " + spotting_id)
var url = "http://www.projectnoah.org/spottings/" + spotting_id;

function get_spotting(error, response, html) {
  if(!error) {

    // We get the whole html page as text
    var $ = cheerio.load(html);

    // Variables of interest
    var scientific_name, coordinates, date;

    // Scientific name
    // This one is easy since there is a single tag
    $('.scientific_name').filter(function(){
      var data = $(this);
      scientific_name = data.text();
      console.log("\t" + "Sci. name: ".blue.bold + scientific_name)
    })

    // Latitude and longitude
    $('.spotting-map-wrapper').filter(function(){
      var loc_bits = $(this).children().last().text().split(" ");
      var latitude = parseFloat(loc_bits[1]);
      var longitude = parseFloat(loc_bits[3]);
      coordinates = [longitude, latitude]
      console.log("\t" + "Location:  ".blue.bold + coordinates)
    })

    // We then return everything as a GEOJson object
    var point = {"type": "Point", "coordinates": coordinates}
    var properties = {"name": scientific_name, "spotting": spotting_id}
    json = {"type": "Feature", "geometry": point, "properties": properties}
    var filename = 'spottings/' + spotting_id + ".json";
    fs.writeFile(filename, JSON.stringify(json, null, ' '), function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("\t" + "Saved:     ".green.bold + filename)
      }
    })
  }
}

request(url, get_spotting);
