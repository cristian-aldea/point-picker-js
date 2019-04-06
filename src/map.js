var map;
var locations = [];
var markers = [];
var circles = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(45.495420, -73.658467),
        mapTypeId: 'roadmap'
    });

    google.maps.event.addListener(map, 'click', function (event) {
        placeLocation(event.latLng);
    });

    google.maps.event.addListener(map, 'rightclick', function (event) {
        removeLocation();
    });
    var data = getData();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        var marker = new google.maps.Marker({
            position: data[i],
            map: map,
            title: ""
        });
        new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: data[i],
            radius: 1000
        });
    }
}

window.onkeypress = function(e){
    var key = e.keyCode;
    if(key == 115){
        printLocations();
    }
}

function printLocations(){
    var tempString = "";
    for (let i = 0; i < locations.length; i++) {
        tempString += locations[i] + "\n";
    }
    console.log(tempString);
}


function removeLocation(){
    locations.pop();
    markers.pop().setMap(null);
    circles.pop().setMap(null);
}

function placeLocation(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    var circle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: location,
        radius: 1000
    });
    locations.push(location.lat() + ", " + location.lng());
    markers.push(marker);
    circles.push(circle);
    
}

function getData() {
    var temp = data.split(/\r?\n/);
    for (var i = 0; i < temp.length; i++) {
        temp[i] = temp[i].split(", ");
        temp[i] = { lat: parseFloat(temp[i][0]), lng: parseFloat(temp[i][1]) };
    }
    return temp;
}

var data = `45.43259655360039, -73.95532684828976
45.41777765919096, -73.93455582167843
45.44355762226654, -73.92923431899288
45.42765735435791, -73.89902191664913
45.45234902832292, -73.89936523940304
45.43777622502486, -73.87086945082882
45.46258387044823, -73.86606293227413
45.480400103479596, -73.8449485829089
45.447170694708845, -73.83808212783077
45.46378784738957, -73.81885605361202
45.50374528474161, -73.8343055775378
45.48954679131407, -73.81164627577999
45.46330625969846, -73.78864365126827
45.45343280542449, -73.75259476210812
45.47534471780308, -73.76186447646359
45.49532288161067, -73.78143387343624
45.499413920485466, -73.74435501601437
45.48136298266113, -73.7244422962878
45.45511863951933, -73.71070938613155
45.44500287901268, -73.66676407363155
45.466436506154345, -73.68187027480343
45.48713991218504, -73.68976669814327
45.50518899877816, -73.70933609511593
45.4368126012223, -73.63964157607296
45.45820413751094, -73.64032745361328
45.48491943243888, -73.65128386848676
45.51224156122108, -73.67199897766113
45.5310552378692, -73.70218146675336
45.54073980131072, -73.66772204886718
45.564180145386544, -73.64506274710936
45.58958322007983, -73.62590536210081
45.60807980157866, -73.61543401810667
45.62672601426483, -73.59559091836962
45.64305015784101, -73.57138666421923
45.65778821335758, -73.54271063224564
45.67410330758506, -73.51455816642533
45.64365387108938, -73.51286779051895
45.63477230196399, -73.53930364256973
45.61856581246018, -73.56093297606583
45.607758883054906, -73.52969060546036
45.584216586449415, -73.53278051024552
45.5943073515266, -73.57466588622208
45.58073244867684, -73.59749684935684
45.57364336301578, -73.57123265868302
45.559737193889966, -73.54986190795898
45.559726133988036, -73.61598000307583
45.545782207234616, -73.58662590761685
45.534239789465104, -73.56276497622036
45.53820776283713, -73.63692269106411
45.52257473150971, -73.60413536806607
45.51283195331438, -73.57409462709927
45.51533982494369, -73.63849361082845
45.49945979801597, -73.61154277464681
45.492360458483255, -73.57377727171712
45.479964551130514, -73.61686427733235
45.46250937896797, -73.60707957884603
45.44071292307029, -73.60759456297689
45.464932261360765, -73.57778062025056`;