function computeCircle(radius) {
    var positions = [];
    for (var i = 0; i < 360; i++) {
        var radians = Cesium.Math.toRadians(i);
        positions.push(new Cesium.Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians)));
    }
    return positions;
}

var redTube = viewer.entities.add({
    name: 'Red tube with rounded corners',
    polylineVolume: {
        positions: Cesium.Cartesian3.fromDegreesArray([-85.0, 32.0,
        -85.0, 36.0,
        -89.0, 36.0]),
        shape: computeCircle(60.0),
        material: Cesium.Color.RED
    }
});

function getPipline() {
    require(["esri/layers/ArcGISDynamicMapServiceLayer"], function (ArcGISDynamicMapServiceLayer) {

        var layer = new ArcGISDynamicMapServiceLayer("http://172.30.16.248/ArcGIS/rest/services/DY/DYPS/MapServer")


    });
}

