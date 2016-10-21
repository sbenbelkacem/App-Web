$(function() {

$( "#datepicker" ).datepicker();
	var validForm  = true ;  
   $("#valider").on("click" , function (e) {
			e.preventDefault() ; 
			if( $("#nom").val().length < 5 ){
			  validForm = false ; 
			}  
			if( $("#prenom").val().length < 5 ){
			  validForm = false ; 
			}  
			var dateNaissance =  $(".date-naissance").val(); 
			if( !isValidDate(dateNaissance)  ){
			  validForm = false ; 
			}  
			
			if( $("#adresse").val().length < 5 ){
			  validForm = false; 
			} 
			var email = $("#email").val();
			console.log(email)  ; 
			if( !validateEmail(email) ){
			  validForm = false ; 
			}
		if ( validForm == false )
		{
			$("#modal").modal("show");  
			validForm = true; 
		}		
		else
		{
			 var gmaps=  $("#gmaps"); 
			 gmaps.find(".modal-body").html("<p>vous etes né le " + dateNaissance+ 
			 "</p>" + '<img src= "http://maps.googleapis.com/maps/api/staticmap?center=France&size=480x320"> ' +
			 "<p>" + '<a href="https://www.google.fr/maps" target="_blank"> Paris </a> </p>'
			 ); 
			$("#gmaps").modal("show"); 
		}
		 
   }); 
   
   function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}
	function isValidDate(date)
{
    var matches = /^(\d{2})[-\/](\d{2})[-\/](\d{4})$/.exec(date);
    if (matches == null) return false;
    var d = matches[2];
    var m = matches[1] - 1;
    var y = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d &&
            composedDate.getMonth() == m &&
            composedDate.getFullYear() == y;
}
}) ; 
