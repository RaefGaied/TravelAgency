function showmessage2() {
    var name = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('confirmPassword').value;
    var gender = document.getElementsByClassName('gender-category').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert("Les mots de passe sont identiques. Enregistrement en cours...");
    } else {
        alert("Les mots de passe ne sont pas identiques. Veuillez les vérifier.");
    }


    if (name && username && email && number && password && password2 && gender) {
       alert("Votre inscription a été bien effectuée");
    } else {
     alert("Veuillez remplir tous les champs avant d'envoyer le message.");
          }
    }
    