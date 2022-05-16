/*
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
(attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, 
e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco 
quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente 
nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba
*/

// salviamo il contenitore della griglia
const gridEl = document.getElementById('grid');

const createMyElement = () => {
    const node = document.createElement('div');
    node.className = 'square';
    return node;
}






// funzioni del programma

// creazione array random senza doppioni



function createRandUniqueArr(numItems, min, max) {
    const arrUni = [];
    while(arrUni.length < numItems) {
        let randomNum = getRandomNumMinMax(min, max);
        if (!arrUni.includes(randomNum)) {
            arrUni.push(randomNum);
       }
    }
    return arrUni;
}

// funzione che crea un numero random
function getRandomNumMinMax(min, max) {
    let result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}


console.log(createRandUniqueArr(100, 1, 100));


function pariODispari(numeroCheck) {
    let risultato;
    if(numeroCheck % 2 === 0) {
        risultato = "pari"
    } else {
        risultato = "dispari"
    }
    return risultato;
}