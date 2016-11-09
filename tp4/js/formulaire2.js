$(function() {

$( "#datepicker" ).datepicker();
	var validForm  = true ;  
   $("#valider").on("click" , function (e) {
		
			e.preventDefault() ; 
			if( $("#nom").val().length < 5  ){
			  validForm = false ; 
			}  
			if( $("#prenom").val().length ==0  ){
			  validForm = false ; 
			}  
			var dateNaissance =  $(".date-naissance").val() ; 
			if( !isValidDate(dateNaissance)  ){
			  validForm = false ; 
			}  
			
			if( $("#adresse").val().length ==0  ){
			  validForm = false ; 
			} 
			var  email = $("#email").val() ;
		
			if( !validateEmail(email)  ){
			  validForm = false ; 
			}
	
	 
		if ( false === validForm  )
		{
			$("#modal").modal("show") ;  
			validForm = true ; 
			console.log("not valid") ; 
		}		
		else
		{
		var  nom , prenom ,  date_naissance ,  adresse , email ; 
			if($("#nom").val().length > 0 ) 
			{
				  nom  = $("#nom").val()  ; 
				  prenom  =  $("#prenom").val()  ; 
				  date_naissance  =  $("#date-naissance").val()  ; 
				  adresse  =  $("#adresse").val()  ; 
				  email  =  $("#email").val()  ; 
			}		
			
			if(typeof(Storage) !== "undefined") {
			
			  localStorage.setItem("nom",  nom  );
			  localStorage.setItem("prenom",  prenom ) ; 
			  localStorage.setItem("date-naissance",date_naissance  ) ; 
			  localStorage.setItem("adresse", adresse ) ; 
			  localStorage.setItem("email", email  ) ; 
			  
			  $("#bravo").removeClass("hide") ;
			  if(nom.length> 0 ) 
			 {
				  nom.val(localStorage.getItem("nom") ); 
				  prenom.val(localStorage.getItem("prenom") ); 
				  date_naissance.val(localStorage.getItem("date-naissance") ); 
				
				  adresse.val(localStorage.getItem("adresse") ); 
				  email.val(localStorage.getItem("email") ); 
				  console.log(localStorage) ; 
			  }
			
			} else {
			  console.log("local  storage not supported") ; 
			 
			}
			
		}
		 
   }) ; 
   
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
