# Get data from http://www.projectnoah.org

[See an example map](https://gist.github.com/tpoisot/d1808c0e4de48cbf76f6#file-noah-geojson)

## Get started

~~~
npm install
~~~

## Run

~~~
node noah.js
~~~

Will output

~~~
[tpoisot@adele noah]$ node noah.js 1892586003
Getting data for 1892586003
	Sci. name: Porzana carolina
	Location:  -80.8,28.53
  Saved:     spottings/1892586003.json
~~~

and save a `JSON` blurb (in GeoJSON format):

~~~ json
{
 "type": "Feature",
 "geometry": {
  "type": "Point",
  "coordinates": [
   -80.8,
   28.53
  ]
 },
 "properties": {
  "name": "Porzana carolina",
  "spotting": "1892586003"
 }
}
~~~

## Get more than one id

~~~
make id.txt
make collect
~~~

This will parse the most recent *identified* records, and get them in sequence
thanks to the power of the command line.

## Todo

Parse date / time on the website
