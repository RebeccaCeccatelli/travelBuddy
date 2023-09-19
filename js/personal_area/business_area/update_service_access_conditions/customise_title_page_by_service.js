function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var serviceType = getParameterByName('type');

var pageTitle = document.getElementById('page-title');
var commonText = "Update Access Conditions to your ";
if (serviceType === 'toilets') {
    document.title = "Toilets Access Conditions";
    pageTitle.textContent = commonText + "Toilets " + "here:";
} else if (serviceType === 'wifi_hotspots') {
    document.title = "WiFi Hotspots Access Conditions";
    pageTitle.textContent = commonText + "WiFi hotspots " + "here:";
} else if (serviceType === 'luggage_deposit') {
    document.title = "Luggage Deposit Access Conditions";
    pageTitle.textContent = commonText + "luggage deposit " + "here:";
} else if (serviceType === 'parking_lots') {
    document.title = "Parking Lots Access Conditions";
    pageTitle.textContent = commonText + "parking lots " + "here:";
} else if (serviceType === 'tourist_attractions') {
    document.title = "Tourist Attractions Access Conditions";
    pageTitle.textContent = commonText + "tourist attractions " + "here:";
} else if (serviceType === 'dining_options') {
    document.title = "Dining Options Access Conditions";
    pageTitle.textContent = commonText + "dining options " + "here:";
}