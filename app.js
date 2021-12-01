document.addEventListener('DOMContentLoaded', (event) => {
    let drawButton = document.getElementById('draw');
    let displayNumbers = document.getElementsByClassName('display-numbers');
    let oddHtml = document.getElementById('odd-numbers');
    let evenHtml = document.getElementById('even-numbers')
    let randomNumbers = [];



    drawButton.addEventListener('click', (event)=>{
        clearNumbers();
        getRandomNumbers(randomNumbers);
        randomNumbers.sort((a, b) => a - b);
        showGeneretedNumbers(randomNumbers,displayNumbers);
        oddOrEven(randomNumbers,oddHtml,evenHtml);
    })
});

function getRandomNumbers(array) {
    
    for(let i = 0; i < 20; i++){
        array[i] = Math.floor(Math.random() * (100 - 1) + 1);
    }
    
}

function showGeneretedNumbers(numbersArray) {
    let displayNumbers = document.getElementById('show-numbers');
    displayNumbers.innerHTML = "[ " + numbersArray.join(',') + " ]"
}

function oddOrEven(numbers,...htmlObjects) {

    let odd = [];
    let even = [];

    numbers.forEach(element => {
        
        if(element % 2 == 0){
         
            even[even.length] = element
        }else{
            odd[odd.length] = element
        }
    });
    insertNumbers(odd,htmlObjects[0])
    insertNumbers(even,htmlObjects[1])
  
}

function insertNumbers(numberArray,insertIntoHtmlObject) {
    numberArray.forEach((element) =>{
        let createSpan = document.createElement('span')
        createSpan.innerHTML = element;
        insertIntoHtmlObject.appendChild(createSpan)
    })
}
function clearNumbers() {
    let oddHtml = document.getElementById('odd-numbers');
    let evenHtml = document.getElementById('even-numbers')
    let toDestroy = document.getElementsByClassName('display-numbers');

    if(toDestroy)
    toDestroy ? toDestroy.innerHTML = "" : null;
    
    
    
    while (oddHtml.firstChild) {
        oddHtml.removeChild(oddHtml.firstChild);
    }
    
    
    while (evenHtml.firstChild) {
        evenHtml.removeChild(evenHtml.firstChild);
    }
    
    
    
   

}