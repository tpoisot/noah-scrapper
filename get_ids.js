// Test get
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var colors = require('colors');

var url = "http://www.projectnoah.org/organisms?identified=identified&order=most_recent&pages=10"

function get_ids(error, response, html) {
  if (!error) {

    // We get the whole html page as text
    var $ = cheerio.load(html);

    // Get IDs
    $('.spotting-avatar').filter(function() {
      var data = $(this);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].attribs.href.split('/')[2]);
      }
    })


  }
}

request(url, get_ids);
