# Get data from http://www.projectnoah.org

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

## Todo

Parse date / time on the website
