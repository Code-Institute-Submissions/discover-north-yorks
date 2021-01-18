function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: {

        // Centres the map on North Yorkshire:

            lat: 54.250359,
            lng: -1.470855},
            
        // Zooms into North Yorkshire:
            
            zoom: 8,

        // Map Styles:

            styles: [
    {
        "featureType": "landscape",
        "stylers": [
            {"hue": "#FFA800"},
            {"saturation": 0},
            {"lightness": 0},
            {"gamma": 1}
        ]},
    {
        "featureType": "road.highway",
        "stylers": [
            {"hue": "#53FF00"},
            {"saturation": -73},
            {"lightness": 40},
            {"gamma": 1}
        ]},
    {
        "featureType": "road.arterial",
        "stylers": [
            {"hue": "#FBFF00"},
            {"saturation": 0},
            {"lightness": 0},
            {"gamma": 1}
        ]},
    {
        "featureType": "road.local",
        "stylers": [
            {"hue": "#00FFFD"},
            {"saturation": 0},
            {"lightness": 30},
            {"gamma": 1}
        ]},
    {
        "featureType": "water",
        "stylers": [
            {"hue": "#00BFFF"},
            {"saturation": 6},
            {"lightness": 8},
            {"gamma": 1}
        ]},
    {
        "featureType": "poi",
        "stylers": [
            {"hue": "#679714"},
            {"saturation": 33.4},
            {"lightness": -25.4},
            {"gamma": 1}
        ]}
       ]
    });

        // Map Markers:
        
        const myMark = {"lat": 54.1218, "lng": -0.9061};

        const placeMarker = new google.maps.Marker({position: myMark});

        placeMarker.setMap(map);
}