// #Consegna
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati (delle bombe) - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// # MILESTONE 1
// Prepariamo "qualcosa" per tenere il punteggio dell'utente.
// Quando l'utente clicca su una cella, incrementiamo il punteggio.
// Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
// # MILESTONE 2
// Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
// Generiamoli e stampiamo in console per essere certi che siano corretti
// # MILESTONE 3
// Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
// # MILESTONE 4
// Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
// (Ma come stabiliamo quale sia il punteggio massimo?)
// # MILESTONE 5
// Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.


// funzioni


const grid = document.getElementById('grid')

// creazione celle
let rows = 10
let cells = 10
const gridCells = rows * cells
const playBtn = document.getElementById('btn-play')

// # MILESTONE 1 punteggio
const scoreCounterTable = document.getElementById('score')
let score = 0 ;



// # MILESTONE 2 numeri random bombe
// bombe e numeri estratti
let NumeriCliccati = [];
let bomb = [];

for (let i = 0; i < 16; i++) {
    let bombNum = Math.floor((Math.random() * 100) + 1)
    if (!bomb.includes(bombNum)) {
        bomb.push(bombNum)
    }else{
        i--
    }
}

console.log(bomb)


    

// punteggio massimo
const winningPoints = gridCells - bomb ;

// azzerare la griglia
grid.innerHTML = '';

playBtn.addEventListener('click', function () {
    playBtn.innerText = "";
    playBtn.innerText = "Rigioca"
    score = 0
    scoreCounterTable.innerText = "il tuo punteggio è: " +  score;
    // azzerare la griglia
    grid.innerHTML = '';

    for (let i = 1; i <= gridCells; i++) {
        const cell = document.createElement('div')
        grid.appendChild(cell)
        cell.className = 'cell'
    
        // In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
        cell.innerText = [i]
        
        // Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
        cell.addEventListener('click', function () {
            // MILESTONE 1 Se arrivi qui e non è presente la classe "clicked" puoi proseguire
            if(cell.classList.contains("clicked")) return;
            cell.classList.add('clicked')
            
            console.log(i)
            NumeriCliccati.push(i)
            // console.log(NumeriCliccati)
            
            // controllo
            if(bomb.includes(parseInt(cell.innerText))){
                cell.classList.add('bomb')
                alert(`hai perso, hai totalizzato ${score} punti`)
            } else{
                cell.classList.add('safe')
                score++;
                if(score === 84){
                    alert(`hai vinto , hai totalizzato ${score} punti`)
                }
            }
            cell.innerText = '';
            
            // console.log(score)
            scoreCounterTable.innerText = "il tuo punteggio è: " +  score;
            
        })
        
    }
    
})





