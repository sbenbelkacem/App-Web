 function validation()
    {       
        var errorHtml = "";
        var valNom= document.getElementById("nom").value;
        var valPrenom= document.getElementById("prenom").value;
        var valNaissance= document.getElementById("dateNaissance").value;
        var valAdresse= document.getElementById("adresse").value;
        var valMail= document.getElementById("mail").value;
        var formulaireValide = true;

        if (valNom == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>La saisie du nom est obligatoire.";
        }else
        {
            if (valNom.length < 5)
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>Le nom doit contenir au moins 5 caractères.";
            }
        }

        if (valPrenom == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>La saisie du prénom est obligatoire.";
        }else
        {
            if (valPrenom.length < 5)
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>Le prénom doit contenir au moins 5 caractères.";
            }
        }

        if (valNaissance == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>La date de naissance est obligatoire.";
        }else
        {
            if (valNaissance.length != 10)
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>La date doit avoir le format JJ/MM/AAAA .";
            }
        }

        if (valAdresse == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>L'adresse est obligatoire.";
        }else
        {
            if (valAdresse.length < 5)
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>L'adresse  doit contenir au moins 5 caractères.";
            }
        }

        if (valMail == "")
        {
            formulaireValide = false;
            errorHtml= errorHtml + "<br>Le mail est obligatoire.";
        }else
        {
            if (valMail.length < 5)
            {
                formulaireValide = false;
                errorHtml= errorHtml + "<br>Le mail  doit contenir au moins 5 caractères.";
            }
        }

       
        if(formulaireValide)
        {
            document.getElementById("resultat").innerHTML="Bienvenue " + valNom + ".";
            document.getElementById("resultat").style.display="block";
            document.getElementById("error").style.display="none";
        }else
        {
            document.getElementById("error").innerHTML=errorHtml;
            document.getElementById("error").style.display="block";
            document.getElementById("resultat").style.display="none";
        }

    }