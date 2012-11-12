//<script type="text/javascript" charset="utf-8" src="cordova-1.8.1.js"></script>
//<script type="text/javascript" charset="utf-8">

var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for Cordova to connect with the device
//

//document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
//
function touchme(){
  console.log("that tickles");
}

function cameraReady() {
  pictureSource=navigator.camera.PictureSourceType;
  destinationType=navigator.camera.DestinationType;
  console.log("camera Ready");
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
  // Uncomment to view the base64 encoded image data
  // console.log(imageData);
  
  // Get image handle
  //
  var smallImage = document.getElementById('smallImage');
  
  // Unhide image elements
  //
  smallImage.style.display = 'block';
  
  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  smallImage.src =  "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
  // Uncomment to view the image file URI
  // console.log(imageURI);
  
  // Get image handle
  //
  var largeImage = document.getElementById('largeImage');
  
  // Unhide image elements
  //
  largeImage.style.display = 'block';
  
  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
  console.log("take a picture");
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                              destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function capturePhotoEdit() {
  console.log("take and edit a picture");
  // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
                              destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                              destinationType: destinationType.FILE_URI,
                              sourceType: source });
}

// Called if something bad happens.
//
function onFail(message) {
  alert('Failed because: ' + message);
}