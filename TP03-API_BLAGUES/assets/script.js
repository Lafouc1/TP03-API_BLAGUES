//Définir le endpoint
let endpoint = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

function nouvelleBlague(){
//Récupérer les datas de l'endpoint
fetch(endpoint)
//Une fois les valeurs récupérées, on appelle une fonction de callback anonyme
.then(
    function(response){
        console.log(response);

        if (response.status == 200){
            // Si le status est OK, on convertit la réponse en JSON
            response.json()
            .then(
                function (datas){
                    console.info("Données reçues");
                    console.log(datas);
                    console.info("-------");

                    console.log(datas.setup + "" + datas.delivery);

                    let dataBlagues = document.getElementById("dataBlagues");
                    let btnAjouterBlague = document.getElementById("ajouterBlague");
                    let btnSupprimerTableau = document.getElementById("supprimerTableau");
                    let btnSupprimerBlague = document.getElementById("supprimerBlague");
                    
                    //Générer une blague au chargement de la page
                    dataBlagues.appendChild(ajouterBlague(datas));

                    //Supprimer le tableau au clic sur le bouton "Supprimer le tableau"
                    btnSupprimerTableau.addEventListener("click", function(){
                        dataBlagues.innerHTML = "";
                    });
                    
                }
            );
        }
        else{
            console.error("Mauvais statut de réponse");
        }
    }
);
}
//fonction qui génère une blague
function ajouterBlague(data){
    //Création des éléments du HTML
    let row = document.createElement("tr");
    let Catégorie = document.createElement("th");
    let Blague = document.createElement("th");
    let Edition = document.createElement("th");

    //Ajout de valeurs dans le tableau
    Catégorie.innerText = data.category;
    Blague.innerText = data.setup + " " + data.delivery;

    //Ajout des éléments dans le tableau
    row.appendChild(Catégorie);
    row.appendChild(Blague);
    row.appendChild(Edition);
    return row;
}

//Générer une blague au clic sur le bouton "Ajouter une blague" 
                    btnAjouterBlague.addEventListener("click", function nouvelleBlague(){
                        
                        dataBlagues.appendChild(ajouterBlague(datas));
                    });
                    
//Supprimer une blague au clic sur le bouton "Supprimer la blague"
                    btnSupprimerBlague.addEventListener("click", function nouvelleBlague(){
                        dataBlagues.removeChild(dataBlagues.lastChild);
                    });

                    