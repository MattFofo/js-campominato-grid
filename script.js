// - l'utente seleziona una difficoltà
// - a seconda della difficoltà selezionata devo creare n elementi


const difficulty = document.getElementById("difficulty").value;
console.log(difficulty);


// condizionale per eseguire diversi cicli a seconda della difficoltà
if (difficulty == 'easy') {
    
    //ciclo for per creare 100 elementi
    for (let i = 1; i < 101; i++) {
        let eleField = document.querySelector(".field");
        let eleCell = document.createElement("div");
        eleField.classList.add("field-easy");
        eleCell.classList.add("cell");
        eleCell.innerHTML = [i];
    
        eleField.append(eleCell);
    }
    
}else if (difficulty == 'medium') {

    //ciclo per craere 80 elementi
    for (let i = 1; i < 81; i++) {
        const element = array[i];
        
    }

}else if (difficulty == 'medium') {

    //ciclo per creare 40 elementi
    for (let i = 1; i < 41; i++) {
        const element = array[i];
        
    }

}