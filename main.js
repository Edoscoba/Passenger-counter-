let count = 0;
let counting = document.getElementById("counting-el");
let previous = document.getElementById("save-el");

function increment() {
    count += 1;
    counting.textContent = count;
}

function sav_btn() {
    let countStr = " " + count + "-" 
    previous.textContent += countStr;

    counting.textContent = 0;
    count = 0;
    
}
console.log("lets count people on the subway");