var pktplayer1,
    pktplayer2,
    pktplayer3,
    pktplayer4,
    pktplayer5,
    playerarray = new Array(),
    anzahlSpieler = 0,
    playercount = 0,
    zahlen = Array(11, 21, 22, 31, 32, 33, 41, 42, 43, 44, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 66),
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
}


function wahrheit() {

    if (mussUeber == true) {
        if (eingebZahl > letzteEingebZahl) {
            location.href = "#sp1";
            loadCurrentPlayer();
            letzteEingebZahl = eingebZahl;
        } else {
            alert("Deine Zahl muss höher als die letzte sein!");
            location.href = "#sp1";
        }
    } else {
        loadCurrentPlayer();
        location.href = "#sp1";
    }

}

function luege() {

    if (eingebZahl > gewZahl) {
        location.href = "#istluege";
    } else {
        location.href = "#keineluege"
    }

}