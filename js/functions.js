// funzione che opera una somma tra due numeri
function sommaNumeri(num1, num2) {

    const risultato = num1 + num2;

    return risultato;
}

// funzione che genera un numero random in a range
function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}


// funzione che stabilisce se un numero è pari o dispari
function numeroPariODispari(numero) {

    return numero % 2 === 0 ? "pari" : "dispari";

}

//funzione che stabilisce se una parola è palindroma
function palindrome(word) {
    
    const letters = word.split("");
        
    const lettersReverse = letters.reverse();
    let wordReverse = lettersReverse.join("");
    
    return word === wordReverse ? "E' PALINDROMA!!" : "NON E' PALINDROMA!!";
}


// funzione che crea un elemento html con una classe
function createElementWithClass(tag, classToAdd) {
    // creo l'elemento blocco                        
    const element = document.createElement(tag);

    // aggiungo la classe principale al blocco
    element.classList.add(classToAdd);
    
    return element;
}


// funzione che genera un array di numeri in un range in ordine casuale


function generateRandomNumbersArray(min, max, arrayLength) {
    
    const arrToGen = [];

    while (arrToGen.length < arrayLength) {

        let newRandomNum =  generaNumeroRandom(min, max);

        if (!arrToGen.includes(newRandomNum)) {

            arrToGen.push(newRandomNum);                         
        }
        
    }

    return arrToGen
}


