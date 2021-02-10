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
    const myMarks = [
                        
    // Attractions
    {"lat": 54.3063, "lng": -0.5997,},
    {"lat": 54.021010, "lng": -1.000332,},
    {"lat": 54.4012, "lng": -0.7125,},

    // Museums
    {"lat": 54.1511, "lng": -0.7790,},
    {"lat": 54.23361, "lng": -1.34485,},
    {"lat": 53.9605, "lng": -1.0964,},

    // Sights
    {"lat": 54.1218, "lng": -0.9061,},
    {"lat": 54.2103, "lng": -2.3703,},
    {"lat": 54.4883, "lng": -0.6079,},

    // Walks
    {"lat": 54.2945, "lng": -1.9834,},
    {"lat": 54.0803, "lng": -1.6850,},
    {"lat": 54.0728, "lng": -2.1579,},
    ];

    for (let i=0; i < myMarks.length; i++) {             

    const placeMarker = new google.maps.Marker({position: myMarks[i]});

    placeMarker.setMap(map);
}
}