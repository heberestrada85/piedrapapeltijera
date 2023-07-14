// Global declarations
const elements          = document.querySelectorAll(".person"); // Get all elements of person option to evaluate results
const divPersonResult   = document.querySelector("#result-person");
const divComputerResult = document.querySelector("#result-computer");
const resultElement     = document.querySelector("#result");
const personValue       = document.querySelector("#person");
const computerValue     = document.querySelector("#computer");
const options           = ["piedra","papel","tijera"];
let personResult        = "";
let computerResult      = "";

// Add listeners to elements
for (const element of elements) {
    element.addEventListener("click", (event) => {
        personOptionSelected(event); // Print option person selected
        randomResult(); // Get option random computer
        evaluateResults(); // Evaluate results
    });
}

// Generate random result for computer
function randomResult(){
    var option = Math.ceil(Math.random() * 3)-1;
    objDiv = createElementResult(elements[option]);
    computerResult = elements[option].dataset.value
    divComputerResult.innerHTML='';
    divComputerResult.appendChild(objDiv);
}

// Print option for person selected in screen
function personOptionSelected(ev){
    objDiv = createElementResult(ev)
    personResult = ev.target.dataset.value
    divPersonResult.innerHTML='';
    divPersonResult.appendChild(objDiv);
}

// Generate object into DOM
function createElementResult(ev){
    var divPerson = document.createElement("div");
    var imagePerson = document.createElement("img");
    imagePerson.src = ev.target != null ? ev.target.src : ev.src
    var text = document.createElement("label");
    text.textContent = `${ev.target != null ? ev.target.dataset.value : ev.dataset.value}`;
    divPerson.appendChild(imagePerson);
    divPerson.appendChild(text);
    return divPerson;
}

// Evaluate results
function evaluateResults(){
    personResult = getKeyByValue(personResult);
    computerResult = getKeyByValue(computerResult);

    // Evaluate results values
    if (personResult == computerResult)
        result = "Empate";
    else if (personResult == 0 && computerResult == 2)
        result = "Ganaste";
    else if (personResult == 1 && computerResult == 0)
        result = "Ganaste";
    else if (personResult == 2 && computerResult == 1)
        result = "Ganaste";
    else
        result = "Perdiste";

    resultElement.innerHTML=result
    if (result == "Ganaste")
        personValue.innerHTML = parseInt(personValue.innerHTML)+1;
    if (result == "Perdiste")
        computerValue.innerHTML = parseInt(computerValue.innerHTML)+1;

    setTimeout(() => {
        resultElement.innerHTML='marcador';
        divPersonResult.innerHTML='';
        divComputerResult.innerHTML='';
        personResult = "";
        computerResult = "";
    }, "2000");
}

////////////////////
/* Helper section */
////////////////////

// Get value from option selected
function getKeyByValue(value) {
    return Object.keys(options).find(key => options[key] === value);
}
