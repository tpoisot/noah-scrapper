var fs = require('fs');

read_spotting = function(fname) {
  var filename = "spottings/" + fname;
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

// List of file in the spottings/ folder
var spottings = fs.readdirSync("spottings/");

var collection = {"type": "FeatureCollection"}
var features = []
for (var i = 0; i < spottings.length; i++) {
  features.push(read_spotting(spottings[i]));
}

collection.features = features;
fs.writeFile("noah.json", JSON.stringify(collection, null, ' '), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("saved")
  }
})
