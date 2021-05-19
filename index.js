let countEl = document.getElementById("count");
let saveEl = document.getElementById("saveEl");
let count = 0;

function increment() {
     count += 1;
     countEl.innerText = count;

}

function save() {
     let dasher = count + " - ";
     saveEl.textContent += dasher;
     countEl.textContent = 0;
     count = 0;
}










 