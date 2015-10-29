var playerarray = new Array(),
    anzahlSpieler = 0,
    playercount = 0,
    zahlen = ["31", "32", "41", "42", "43", "51", "52", "53", "54", "61", "62", "63", "64", "65", "11", "22", "33", "44", "55", "66", "21"],
    gewZahl,
    eingebZahl,
    letzteEingebZahl,
    wurdeGewurfelt = false,
    mussUeber = false,
    schnellesSpiel = false,
    difficulty;

function wuerfeln() {
    if (wurdeGewurfelt == false) {
        gewZahl = zahlen[Math.floor(Math.random() * zahlen.length)];
        document.getElementById("gewuerfelteZahl").innerHTML = gewZahl;
        $.mobile.changePage('#wuerfel', {
            transition: 'pop',
            role: 'dialog',
        });
    } else {
        alert("Du hast bereits gewürfelt!\nDeine gewürfelte Zahl: " + gewZahl);
    }
    wurdeGewurfelt = true;


}

function fastGame() {
    schnellesSpiel = true;
}

function saveDiff() {
    difficulty = document.getElementById("difficulty");
}

function savePlayers() {
    for (var i = 1; i <= 5; i++) {
        if (document.getElementById("player" + i).value != "") {
            playerarray[i - 1] = document.getElementById("player" + i).value;
            anzahlSpieler++;
        }
    }
}

function loadCurrentPlayer() {
    if (schnellesSpiel == true) {
        document.getElementById("spheader").innerHTML = "Spieler, du bist am Zug!";

    } else {
        document.getElementById("spheader").innerHTML = playerarray[playercount] + ", du bist am Zug!";

    }
    if (playercount == playerarray.length - 1) {
        playercount = 0;
    } else {
        playercount++;

    }
    document.getElementById("eingebZahl").value = "";
}
//weitergeben
function saveEingebZahl() {

    eingebZahl = document.getElementById("eingebZahl").value;
    if (mussUeber === true) {
        if (zahlen.indexOf(eingebZahl) < zahlen.indexOf(letzteEingebZahl)) {
            alert("Deine Zahl muss höher als die letzte sein!");
            location.href = "#sp1";

        } else {
            location.href = "#sp2";
            letzteEingebZahl = eingebZahl;
        }
    } else {
        location.href = "#sp2";
        letzteEingebZahl = eingebZahl;
    }
}


function wahrheit() {

    if (schnellesSpiel == true) {
        letzteEingebZahl = eingebZahl;
        mussUeber = true;
        location.href = "#sp1";
        wurdeGewurfelt = false;
        document.getElementById("eingebZahl").value = "";

    } else {
        letzteEingebZahl = eingebZahl;
        loadCurrentPlayer();
        mussUeber = true;
        location.href = "#sp1";
        wurdeGewurfelt = false;

    }


}

function luege() {
    if (schnellesSpiel == true) {
        if (zahlen.indexOf(eingebZahl) > zahlen.indexOf(gewZahl)) {
            document.getElementById("richtigausgabe").innerHTML = "Alles richtig gemacht, Spieler!";
            location.href = "#istluege";
            mussUeber = false;
            wurdeGewurfelt = false;
        } else {
            document.getElementById("falschausgabe").innerHTML = "Alles falsch gemacht, Spieler";
            location.href = "#keineluege";
            mussUeber = false;
            wurdeGewurfelt = false;
        }
    } else {
        if (zahlen.indexOf(eingebZahl) > zahlen.indexOf(gewZahl)) {
            document.getElementById("richtigausgabe").innerHTML = "Alles richtig gemacht, " + playerarray[playercount];
            location.href = "#istluege";
            mussUeber = false;
            wurdeGewurfelt = false;
        } else {
            document.getElementById("falschausgabe").innerHTML = "Alles falsch gemacht, " + playerarray[playercount];
            location.href = "#keineluege";
            mussUeber = false;
            wurdeGewurfelt = false;
        }
    }



}