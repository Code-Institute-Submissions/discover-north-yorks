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
    
    // Credit: Map styling taken from: https://snazzymaps.com/style/47/nature 
    { "featureType": "landscape",
        "stylers": [{"hue": "#FFA800"}, {"saturation": 0}, {"lightness": 0}, {"gamma": 1}
        ]},
    {"featureType": "road.highway",
         "stylers": [{"hue": "#53FF00"}, {"saturation": -73}, {"lightness": 40}, {"gamma": 1}
        ]},
    {"featureType": "road.arterial",
        "stylers": [{"hue": "#FBFF00"}, {"saturation": 0}, {"lightness": 0}, {"gamma": 1}
        ]},
    {"featureType": "road.local",
        "stylers": [{"hue": "#00FFFD"}, {"saturation": 0}, {"lightness": 30}, {"gamma": 1}
        ]},
    {"featureType": "water",
        "stylers": [{"hue": "#00BFFF"}, {"saturation": 6}, {"lightness": 8}, {"gamma": 1}
        ]},
    {"featureType": "poi",
        "stylers": [{"hue": "#679714"}, {"saturation": 33.4}, {"lightness": -25.4}, {"gamma": 1}
        ]}
       ]
    });
        
    // Map Markers:
    // Attractions Markers array:
    let attractionMarkers = [

    {place: {lat: 54.3063, lng: -0.5997},
    content: "<h5>Dalby Forest</h5>"},

    {place: {lat: 54.021010, lng: -1.000332},
    content: "<h5>Piglets Adventure Farm</h5>"},

    {place: {lat: 54.4012, lng: -0.7125},
    content: "<h5>North York Moors Railway</h5>"},
    ];

    // Museums Markers array:
    let museumMarkers = [
    {place: {lat: 54.1511, lng: -0.7790},
    content: "<h5>Eden Camp</h5>"},

    {place: {lat: 54.23361, lng: -1.34485},
    content: "<h5>The World of James Herriot</h5>"},

    {place: {lat: 53.9605, lng: -1.0964},
    content: "<h5>National Railway Museum</h5>"},
    ];

    // Sites Markers array:
    let siteMarkers = [
    {place: {lat: 54.1218, lng: -0.9061},
    content: "<h5>Castle Howard</h5>"},

    {place: {lat: 54.2103, lng: -2.3703},
    content: "<h5>Ribblehead Viaduct</h5>"},

    {place: {lat: 54.4883, lng: -0.6079},
    content: "<h5>Whitby Abbey</h5>"},
    ];

    // Walks Markers array:
    let walkMarkers = [
    {place: {lat: 54.2945, lng: -1.9834},
    content: "<h5>Aysgarth Falls</h5>"},

    {place: {lat: 54.0803, lng: -1.6850},
    content: "<h5>Brimham Rocks</h5>"},

    {place: {lat: 54.0728, lng: -2.1579},
    content: "<h5>Malham Cove</h5>"},
    ];

    // Map Markers array:
    let mapMarkers = [];

    // Applying Map Marker function:
    function addMarker(props) {
        let marker = new google.maps.Marker({
        position: props.place,
        // Drops Map Markers onto position with animation:
        animation: google.maps.Animation.DROP,
        map: map,
        });
        // Pushes Markers into mapMarkers array:
        mapMarkers.push(marker);

    // Info Window for Markers:
    let infoWindow = new google.maps.InfoWindow();

        // Opens Info Window on click:
        marker.addListener("click", () => {
        infoWindow.open(map, marker);
        infoWindow.setContent(props.content);
        });
    }
    
    // Removes Markers:
        function clearMarkers() {
        for (let i = 0; i < mapMarkers.length; i++) {
            mapMarkers[i].setMap(null);
        }
        // Puts the removed Markers back into the array: 
            mapMarkers = [];
        }

        // Shows Markers on the map:
        function showMarkers(marker) {
        for (let i=0; i < marker.length; i++) {
            addMarker(marker[i]);
        }
    }

    // Button on click shows three markers for attractions and removes previously clicked markers:
    $(".attractions-btn").on("click", function(){
        clearMarkers(); showMarkers(attractionMarkers);
    });
    
    // Button on click shows three markers for museums and removes previously clicked markers:
    $(".museums-btn").on("click", function(){
        clearMarkers(); showMarkers(museumMarkers);
    });
    
    // Button on click shows three markers for sites and removes previously clicked markers:
    $(".sites-btn").on("click", function(){
        clearMarkers(); showMarkers(siteMarkers);
    });
    
    // Button on click shows three markers for walks and removes previously clicked markers:
    $(".walks-btn").on("click", function(){
        clearMarkers(); showMarkers(walkMarkers);
    });
}