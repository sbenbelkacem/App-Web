$(function() {
  var  adresse = $("#adresse") ;  
$("#locate").on("click" , function (e) {
		e.preventDefault() ; 
		getLocation() ; 

} ) ; 
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        adresse.val( "Geolocation is not supported by this browser.");
		
    }
}

function showPosition(position) {
    adresse.val(  position.coords.latitude + 
    " , " + position.coords.longitude) ; 
	
	
	var  src  = "http://maps.googleapis.com/maps/api/staticmap?markers="+position.coords.latitude
	+","+position.coords.longitude+"&size=640x400&zoom=5" ; 
	console.log(src) ;
	$("#googleMarker").attr("src" ,src).removeClass("hide").addClass("show") ;  
	
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
          adresse.val( "User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            adresse.val( "Location information is unavailable.")
            break;
        case error.TIMEOUT:
          adresse.val( "The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
           adresse.val( "An unknown error occurred.")
            break;
    }
}

})

$(function () {
$( "input[type=text] , input[type=email]" ).keyup(function() {
	var  inputText  = $(this).val() ; 
	var  parent  = $(this).parent() ; 
	var  span = parent.find("span.number") ; 
	if(span.length >0)
	span.text(inputText.length + "cars" ) ;  
	else 
		parent.append("<span class='number relative-pos'>" +inputText.length+"cars" +"</span>") ;   
});
}) 

// web  storage  
$(function () {

if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
  
  
  localStorage.setItem("nom", $("#nom").val()  );
  localStorage.setItem("prenom", $("#prenom").val()  ) ; 
  localStorage.setItem("adresse", $("#adresse").val()  ) ; 
  localStorage.setItem("email", $("#email").val()  ) ; 
  
}


}); 