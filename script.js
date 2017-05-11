var input = document.querySelector("input[type='range']");
var resultDisplay = document.getElementById("result");
var info = document.getElementsByClassName("info");
var span = document.querySelector("span");
var submit = document.querySelector("button");

var userNumber = input.value;
var numbers = [[],[]];
var primes = [];
var currentPrime;
var cycles = 0;
var startTime;
var endTime;
var endTime2;
var startNumber = 2;


function reset(){
    for(var i = 0; i < info.length; i++){
        info[i].textContent = "";
    }
    resultDisplay.textContent = "";
    cycles = 0;
    numbers = [];
    primes = [];
    startNumber = 2;
}

function step1(){
    for(var i = startNumber; i <= userNumber; i++){
        numbers.push(i);
    }
}

function step2() {
  currentPrime = numbers[0];
  primes.push(numbers.shift());
}

function step3(){
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % currentPrime === 0){
            numbers.splice(i, 1);
        }
    }
}

function step4(){
    while(currentPrime < Math.sqrt(numbers[numbers.length-1])){
        step2();
        step3();
        cycles++;
    }
    secondInfo(resultTable);
}

function resultTable(){
    primes = primes.concat(numbers);
    var cells = Math.floor(window.innerWidth / 75);
    if(cells % 2 != 0) cells -= 1;
    var rows = primes.length / cells;
    for(var i = 0; i < rows; i++){
        var row = document.createElement("tr");
        resultDisplay.appendChild(row);
        for(var x = 0; x < cells; x++){
            var cell = document.createElement("td");
            document.querySelector("tr:last-child").appendChild(cell);
        }
    }
    printResult();
}

function printResult(){
    var cells = document.getElementsByTagName("td");
    for(var i = 0; i < primes.length; i++){
        cells[i].textContent = primes[i];
        if(i % 2 != 0){
            cells[i].classList.add("grey");
        }
    }
    setTimeout(finalInfo, 30);
}

function firstInfo(){
    startTime = new Date();
    info[0].textContent = "Computing prime numbers...";
}

function secondInfo(){
    endTime = new Date() - 30;
    info[0].textContent += " Done!";
    info[1].textContent = "Creating a results table...";
	setTimeout(resultTable, 30);
}

function finalInfo(){
    endTime2 = new Date() - 30;
    info[1].textContent += " Done!";
    info[2].textContent = cycles + " cycles needed to generate "+ primes.length +" primes at time " + (endTime - startTime) + "ms";
    info[3].textContent = "Table generated in " + (endTime2 - endTime) + "ms." + " Total time is " + (endTime2 - startTime) / 1000 + "s";
}

input.addEventListener("change", function(){
    userNumber = Number(input.value);
    span.textContent = userNumber;
});

submit.addEventListener("click", function(){
    reset();
    firstInfo();
    step1();
    step2();
    setTimeout(step3, 1);
    setTimeout(step4, 30);
});

