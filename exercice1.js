var Tableau = [];

var VA = Tableau[Math.round(Math.random() * Tableau.length)];

document.getElementById("Bouton").addEventListener("click", function () {

    VA = Tableau[Math.round(Math.random() * Tableau.length)];
    var Val = document.getElementById("Input").value;
    Tableau.push(Val);
    console.log(Tableau);
    document.getElementById("Input").focus();
    document.getElementById("Input").value = "";

    if (Tableau.length >= 10) {

        document.getElementById("ValeurAlea10").innerHTML = VA;

        var Alea5 = Tableau[4];

        document.getElementById("ValeurAlea5").innerHTML = Alea5;

    } else {

        document.getElementById("ValeurAlea10").innerHTML = "Entrez au moins 10 valeurs"

    }

});



document.getElementById("Random").addEventListener("click", function () {

    VA = Tableau[Math.round(Math.random() * Tableau.length)];

    document.getElementById("ValeurRandom").innerHTML = VA;

});

document.getElementById("Tableau").addEventListener("click", function () {

    document.getElementById("ValeurTableau").innerHTML = "";

    for (var i = 0; i < Tableau.length; i++) {

        document.getElementById("ValeurTableau").innerHTML += "<br>" + i + " " + "-" + " " + Tableau[i];

    }

});

document.getElementById("DernierValeur").addEventListener("click", function () {

    Tableau.pop();

});

document.getElementById("TableauxEntier").addEventListener("click", function () {

     for (var y = 0; y < Tableau.length; y++) {

         Tableau = [];

     }

});


