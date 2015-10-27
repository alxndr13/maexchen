var pktplayer1,
    pktplayer2,
    pktplayer3,
    pktplayer4,
    pktplayer5,
    playerarray = new Array(),
    anzahlSpieler = 0,
    playercount = 0,
    zahlen = Array(31, 32, 41, 42, 43, 51, 52, 53, 54, 61, 62, 63, 64, 65, 11, 22, 33, 44, 55, 66, 21),
    gewZahl,
    eingebZahl,
    letzteEingebZahl,
    mussUeber = false,
    difficulty;

function wuerfeln() {
    gewZahl = zahlen[Math.floor(Math.random() * zahlen.length)];
    document.getElementById("gewuerfelteZahl").innerHTML = gewZahl;
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
    alert("Anzahl Spieler: " + anzahlSpieler + " Arraygröße: " + playerarray.length);

}

function loadCurrentPlayer() {
    document.getElementById("spheader").innerHTML = playerarray[playercount] + ", du bist am Zug!";
    if (playercount == playerarray.length - 1) {
        playercount = 0;
    } else {
        playercount++;

    }
    document.getElementById("eingebZahl").value = "";
}

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

    loadCurrentPlayer();
    mussUeber = true;
    location.href = "#sp1";

}

function luege() {

    if (zahlen.indexOf(eingebZahl) > zahlen.indexOf(gewZahl)) {
        document.getElementById("richtigausgabe").innerHTML = "Alles richtig gemacht, " + playerarray[playercount];
        location.href = "#istluege";
        mussUeber = false;
    } else {
        document.getElementById("falschausgabe").innerHTML = "Alles falsch gemacht, " + playerarray[playercount];
        location.href = "#keineluege";
        mussUeber = false;
    }

}