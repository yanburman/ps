#target photoshop

var SuperResResizeAndAlign = function () {
	var docRef = app.activeDocument;

	docRef.resizeImage(
	  UnitValue(200, '%'),
	  UnitValue(200, '%'),
	  null,
	  ResampleMethod.NEARESTNEIGHBOR
	);

	var numLayers = docRef.artLayers.length;
        var curLayer;

	for (var i = numLayers - 1; i >= 0; --i) {
		curLayer = docRef.artLayers[i];
		//$.writeln(i + " : " +curLayer .name);
		curLayer.selected = true;
		curLayer.opacity = Math.round((1.0 / i) * 100);
        }
}

SuperResResizeAndAlign()
