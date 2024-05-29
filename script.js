document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-bar').addEventListener('click', function () {
        var navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    });
    document.getElementById('search-btn').addEventListener('click', function () {
        var searchBarContainer = document.querySelector('.search-bar-container');
        searchBarContainer.classList.toggle('active');
    });
    document.getElementById('form-close').addEventListener('click', function () {
        var loginFormContainer = document.querySelector('.login-form-container');
        loginFormContainer.classList.toggle('active');
        var formCloseIcon = document.getElementById('form-close');
        formCloseIcon.classList.toggle('fa-times');
    });

    document.getElementById('login-btn').addEventListener('click', function () {
       
        var loginFormContainer = document.querySelector('.login-form-container');
        loginFormContainer.classList.add('active');
    });
    
    
});
let videoBtns = document.querySelectorAll('.vid-btn');
videoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.controls .vid-btn.active').forEach(activeBtn => {
            activeBtn.classList.remove('active');
        });
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
function changeVideo(source) {
    var video = document.getElementById('video-slider');
    video.src = source;
    video.load();
    video.play();
    var buttons = document.querySelectorAll('.vid-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    var activeButton = document.querySelector('.vid-btn[data-src="' + source + '"]');
    activeButton.classList.add('active');
}
function showmessage() {
        var name = document.getElementById('name').value;
        var number = document.getElementById('number').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        if (name && number && email && subject && message) {
            alert("Votre message a été bien envoyé");
        } else {
            alert("Veuillez remplir tous les champs avant d'envoyer le message.");
        }
    }
    function calculerBudgetTotal() {
        var paysSelectionne;
        while (true) {
            paysSelectionne = prompt('Choisissez le pays (Népal, Inde, Thaïlande, etc.):');
            if ( paysSelectionne == 'Népal' || paysSelectionne == 'Inde' || paysSelectionne == 'Thailande' || paysSelectionne == 'Indonésie' || paysSelectionne == 'Australie' || paysSelectionne == 'Chili' || paysSelectionne == 'Argentine' || paysSelectionne == 'Bolivie' || paysSelectionne == 'Pérou' ||paysSelectionne == 'Equateur' ||paysSelectionne == 'Colombia' ) {
                break; 
            } else {
                alert('Pays invalide. Veuillez choisir un pays présent dans la table.');
            }
        }
        var lignes = document.querySelectorAll('table tr:not(:first-child)');
        var ligneSelectionnee = Array.from(lignes)
            .find(function(ligne) {
                return ligne.children[0].innerHTML.toLowerCase() === paysSelectionne.toLowerCase();
            });
        var budgetParAdulte = parseFloat(ligneSelectionnee.children[6].innerHTML);
        var budgetParEnfant = parseFloat(ligneSelectionnee.children[7].innerHTML);
        var nombreAdultes, nombreEnfants;
            while (true) {
                nombreAdultes = parseInt(prompt('Nombre d\'adultes pour ' + paysSelectionne));

                if (nombreAdultes >= 0 && nombreAdultes <= 21) {
                    break;
                } else {
                    alert('Le nombre total d\'adultes  ne doit pas dépasser 21, et le nombre ne peut pas être négatif.');
                }
            }
            
            while (true) {
                nombreEnfants = parseInt(prompt('Nombre d\'enfants pour ' + paysSelectionne));

                if (nombreEnfants >= 0 && nombreEnfants<= 21) {
                    break;
                } else {
                    alert('Le nombre total  d\'enfants ne doit pas dépasser 21, et les nombres ne peut pas être négatif.');
                }
            }


            
        function evaluerFiabilite(budgetTotal) {
            if (budgetTotal >= 1000) {
                return 'Assez fiable';
            } else {
                return 'Très fiable';
            }
        }
        var budgetTotal = (budgetParAdulte * nombreAdultes) + (budgetParEnfant * nombreEnfants);
        var celluleTotal = ligneSelectionnee.querySelector('.total');
        celluleTotal.innerHTML = budgetTotal.toFixed(2) + '€';
        var celluleFiabilite = ligneSelectionnee.querySelector('.fia');
        celluleFiabilite.textContent = evaluerFiabilite(budgetTotal);
    }
    function displayWelcomeMessage() {
      
        document.write('<div style="margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 35vh; background: linear-gradient(to right,#D8B5FF,#1EAE98); background-size: 20%; color: #fff; font-size: 24px; padding: 20px; border-radius: 10px;">Bienvenue chez notre agence !</div>');
   
    
    }
    displayWelcomeMessage();

    function showmessage1() {
        var name = document.getElementById('name').value;
        var number = document.getElementById('number').value;
        var date1 = document.getElementById('date1').value;
        var date2= document.getElementById('date2').value;
        

        if (name && number && date1 && date2) {
            alert("Votre reservation a ete bien effectue , vous pouvez voir votre emeil pour savoir le prix de votre voyage");
        } else {
            alert("Veuillez remplir tous les champs avant d'envoyer le message.");
        }
    }