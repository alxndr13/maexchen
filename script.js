var player1,
    player2,
    zahlen = Array(11, 21, 22, 31, 32, 33, 41, 42, 43, 44, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 66),
    gewZahl;

function wuerfeln() {
    gewZahl = zahlen[Math.floor(Math.random() * zahlen.length)];
    document.getElementById("gewuerfelteZahl").innerHTML = gewZahl;
}

function wahrheit() {

}