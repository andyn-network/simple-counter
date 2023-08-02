let countEl = document.getElementById("countEl");
let saveEl = document.getElementById("saveEl");
let count = 0;


// Update Counter on webpage

function updateCounter() {
    countEl.textContent = count;
}


// Adds to count based on increment

function add1() {
    count++;
    updateCounter();
}

function add5() {
    count = count + 5;
    updateCounter();
}

function add10() {
    count = count + 10;
    updateCounter();
}


// Subtracts from counter based on increment

function subtract1() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

function subtract5() {
    if (count >= 5) {    
        count -= 5;
        updateCounter();
    } else if (count > 0) { // Resets the count to 0 if the count difference is a negative number
        count = 0;
        updateCounter();
    }
}

function subtract10() {
    if (count >= 10) {
        count -= 10;
        updateCounter();
    } else if (count > 0) { // Resets the count to 0 if the count difference is a negative number
        count = 0;
        updateCounter();
    }
} 


// Resets counter to 0

function reset() {
    count = 0;
    updateCounter();
    saveEl.textContent = ""; // Resets previous entries to 0
}

// Saves the count to a new count string

function save() {
    let countStr = count + " "; //stores the current count to a new count string
    saveEl.textContent += countStr; // Adds the current count to the existing store count string
    count = 0; // Resets the current count to 0
    updateCounter();
}
