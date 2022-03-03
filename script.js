// - l'utente seleziona una difficoltà
// - a seconda della difficoltà selezionata devo creare n elementi



const btnPlay = document.getElementById("btn-play");
const eleField = document.querySelector(".field");
const eleDifficulty = document.getElementById("difficulty");
const arrLevels = [100, 81, 49];

btnPlay.addEventListener('click', setupGame);



function setupGame() {

    //reset field
    eleField.innerHTML = '';


    //seleziono il livello
    let indexLevel = parseInt(eleDifficulty.value); // 0, 1, 2
    let cellsCount = arrLevels[indexLevel]; // 100, 81, 49

    //calcolo quante celle per riga in modo da  poterne calcolare i lati 
    let cellPerRow = Math.sqrt(cellsCount); // 10, 9, 7

    
    //ciclo per creare le celle
    for (let cellsNum = 1; cellsNum <= cellsCount; cellsNum++) {
        let eleCell = document.createElement("div");
        eleCell.classList.add("cell");
        eleCell.style.width = `calc(100% / ${cellPerRow})`;
        eleCell.style.height = `calc(100% / ${cellPerRow})`;
        eleCell.innerHTML = cellsNum;
        eleField.append(eleCell);
        
    }
}
