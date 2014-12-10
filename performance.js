var quickhash = require('./index.js');
var started = new Date().getTime();
var count = 1000000;
for (var x = 0; x < count; x++)
    quickhash("http://www.treehugger.com/slideshows/travel/photo-calm-blue-morning-lake-ontario/");
var time = new Date().getTime() - started;
console.log("Calculated " + count + " hashes in " + time + "msec at the rate of " + parseInt(count * 1000 / time) + " hashes per sec.");
