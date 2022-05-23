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


const btn = document.querySelector('button');
const lvl = document.getElementById('level');

let punteggio = 0;

const createMyElement = (classDiv) => {
    const node = document.createElement('div');
    node.className = classDiv;
    return node;
}

btn.addEventListener('click', 

    () => {
        // salviamo il contenitore della griglia
        const gridEl = document.getElementById('grid');

        // variabili per salvare il la quantità di celle da far stampare e la classe da assegnare base alle classi
        let nCells, classCells;

       




        // svuota griglia ogni volta che si preme il bottone per creare la nuova griglia
        gridEl.innerHTML = "";
        
        const selectLvl = parseInt(lvl.value);

        // switch per assegnare quantità celle e classe scelta
        switch(selectLvl){
            case 0:
            default:
                nCells = 100;
                classCells = "square10";
                break;
            case 1:
                nCells = 81;
                classCells = "square9";
                break;
            case 2:
                nCells = 49;
                classCells = "square7";
                break;
        }
        console.log(nCells);
        const newArrRandom = createRandUniqueArr(nCells, 1, nCells);
        const bomb = createRandUniqueArr(16, 1, nCells);
        console.log(bomb);
        for (let i = 0; i < newArrRandom.length; i++) {
            const divEl = createMyElement(classCells);
            let arrItem = newArrRandom[i];
            
            divEl.addEventListener('click',
                function(){ 
                    divEl.append(arrItem);
                    this.classList.add('clicked');
                    punteggio++;
                    for (let j = 0; j < bomb.length; j++) {
                        let bombItem = bomb[j];
                            if(arrItem === bombItem) {
                                divEl.innerHTML = bombItem;
                                this.classList.add('clicked-red');
                                punteggio--;
                                alert("la partita è terminata, il tuo punteggio è: " + punteggio);
                                gridEl.innerHTML = "";
                            }
                    }  
                }
            );
            gridEl.append(divEl);
        }
    });

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
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}


