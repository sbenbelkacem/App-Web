var gpsResult = document.getElementById('gps-result');
window.onload = function()
{
    document.getElementById("searchCity").addEventListener("submit", function( event ){
		event.preventDefault(); // pour annuler le rechargement de la page
        var city = document.getElementById("city").value;
        searchCity(city);
    });
    document.getElementById("gps").addEventListener("click", function(){
		getLocation();
    });
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position)
{
    searchLatLng(position.coords.latitude, position.coords.longitude);
}
   
function searchCity(_city)
{
    console.log('searchCity','Hello from '+ _city);
    var request = new XMLHttpRequest ();
	
    request.open ( 'GET' , 'https://demo.bilelz.fr/owmap/?q='+_city+'&appid=fd0d0f5f343af1028fda61214f298ea7' +'&units=metric' , true );
    request.onload = function () {
		var resultHtml = '';
		if ( request.status >= 200 && request.status < 400 ) {
			var resp = request.responseText ;
			var respObject = JSON.parse(resp);
			resultHtml += '<h1>' + respObject["name"] + '</h1>';
			var icon = "http://openweathermap.org/img/w/"+respObject["weather"][0]["icon"]+".png";
			resultHtml += '<img src='+icon+' />';
			resultHtml += '<p>' + respObject["main"]["temp"] + "°" + '</p>';
			resultHtml += '<p>' + respObject["weather"][0]["main"] + '</p>';
			resultHtml += '<p>' + 'Humidity' + respObject["main"]["humidity"] + "%" + '</p>';
			resultHtml += '<p>' + "Nuage" + respObject["clouds"]["all"] + "%" + '</p>';
			resultHtml += '<p>' + "Vent " + respObject["wind"]["speed"] + "m/s" + '</p>';
		} else {
		resultHtml += 'We reached our target server, but it returned an error'
		}
		document.getElementById("result").innerHTML = resultHtml;
	};
	
	request.onerror = function () {
   // There was a connection error of some sort
	};
	
	request.send ();
	}

	function searchLatLng(_lat, _lng){ 
		var latlon = _lat + "," + _lng;
		var img_url = "https://maps.googleapis.com/maps/api/staticmap?markers="+latlon+"&zoom=5&size=640x400";
		document.getElementById("gpsResult").innerHTML = "<img src='"+img_url+"'>";
	}
