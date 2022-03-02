// - l'utente seleziona una difficoltà
// - a seconda della difficoltà selezionata devo creare n elementi



const btnPlay = document.getElementById("btn-play");

btnPlay.addEventListener('click', play);



function play() {
    const difficulty = document.getElementById("difficulty").value;
    let eleField = document.querySelector(".field");
    
    //reset field
    eleField.classList.remove("field-easy", "field-hard", "field-medium")
    eleField.innerHTML = '';


    // condizionale per eseguire diversi cicli a seconda della difficoltà
    if (difficulty == 'easy') {
        
        //ciclo for per creare 100 elementi
        for (let i = 1; i < 101; i++) {
            let eleField = document.querySelector(".field");
            let eleCell = document.createElement("div");
            eleField.classList.add("field-easy");
            eleCell.classList.add("cell");
            eleCell.innerHTML = i;
        
            eleField.append(eleCell);
        }
        
    }else if (difficulty == 'medium') {

        //ciclo per craere 80 elementi
        for (let i = 1; i < 82; i++) {
            let eleField = document.querySelector(".field");
            let eleCell = document.createElement("div");
            eleField.classList.add("field-medium");
            eleCell.classList.add("cell");
            eleCell.innerHTML = i;
        
            eleField.append(eleCell);
            
        }

    }else if (difficulty == 'hard') {

        //ciclo per creare 40 elementi
        for (let i = 1; i < 50; i++) {
            let eleField = document.querySelector(".field");
            let eleCell = document.createElement("div");
            eleField.classList.add("field-hard");
            eleCell.classList.add("cell");
            eleCell.innerHTML = i;
        
            eleField.append(eleCell);
            
        }

    }

}



