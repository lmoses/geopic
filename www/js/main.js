var GeoPic = Parse.Object.extend("GeoPic");
var geopic = new GeoPic();
var point = new Parse.GeoPoint();


function initparse()
{
  Parse.initialize("Cu6t2yF3ZUMBskXAZiL6ZZBgwwcBGdmeSmoeQf5s", "GCd1CufkIfDR3f4MUm1LTzFp5EmxcLtIZeihnynN");
  console.log("parse started");
}

function createGeoSpot(){

  geopic.save({
              user: "Default",
              location: point
              }, {
              success: function(geopic) {
              console.log("Saved");
              // The object was saved successfully.
              },
              error: function(geopic, error) {
              console.log("not saving");
              // The save failed.
              // error is a Parse.Error with an error code and description.
              }
              });
}

var logpoint = function(position) {
   var lat= position.coords.latitude +20;
   var long = position.coords.longitude +20;
  console.log("latitude is "+ lat);
  console.log("longitude is "+long);

 
  var newpoint = new Parse.GeoPoint(lat,long);
  console.log(newpoint.latitude);
  geopic.set("user","billy");
  
  geopic.save()
}
function storegeopoint()
{
  navigator.geolocation.getCurrentPosition(logpoint,onError);
}
function wheresfriend(name)
{
 
  var query = new Parse.Query(GeoPic);
  query.equalTo("user", name);
  query.first({
             success: function(object) {
              console.log(name + "'s ID is:"+object.id)
              console.log(object.get("location").latitude+","+object.get("location").longitude);

              
              $("#result").text(name + "'s ID is:"+object.id +". The last known location was:"+object.get("location").latitude+","+object.get("location").longitude);
//             alert("Successfully retrieved " + object.id);
             },
             error: function(error) {
             alert("Error: " + error.code + " " + error.message);
             }
             });
}
//function myposition(latitude,longitude) {
//  this.longitude= longitude;
//  this.latitude=latitude;
//}
//var mypos = new myposition(0,0);
//function friendsdisatance(name)
//{
//  console.log("you are at " + mypos.latitude + "," + mypos.longitude);
//  console.log(name+ " is at a magic");
//}
//var wheresfred =function(position)
//{
//  mypos.latitude=position.coords.latitude;
//  mypos.longitude=position.coords.longitude;
//  console.log(mypos.latitude + "," + mypos.longitude);
//}
//
//function findfriend(name)
//{
//  console.log("let me find "+ name);
//  navigator.geolocation.getCurrentPosition(wheresfred, onError);
//  setTimeout(friendsdisatance(name),3000);
//
//}

// onSuccess Callback
//   This method accepts a `Position` object, which contains
//   the current GPS coordinates
//
var onSuccess = function(position) {
  alert('Latitude: '          + position.coords.latitude          + '\n' +
        'Longitude: '         + position.coords.longitude         + '\n' +
        'Altitude: '          + position.coords.altitude          + '\n' +
        'Accuracy: '          + position.coords.accuracy          + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
        'Heading: '           + position.coords.heading           + '\n' +
        'Speed: '             + position.coords.speed             + '\n' +
        'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}

function getpos(){
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}