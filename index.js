let input = document.getElementsByClassName('input');
let outicon = document.getElementById('outicon');
let output = document.getElementById('output');
let out = document.getElementById('out')
console.log(input);

function rand(){
    return Math.floor((Math.random())*2.9);
}
    input[0].onclick = function f(){
        out.style.color = 'red';
        const outpt = rand();
        //console.log(outpt);

        if (outpt == 1) {
            output.textContent = '\nYou sore fucking loser \nYou are worthless your life is worthless';
            outicon.innerHTML = '<i class="fas fa-hand-paper"></i>';
        }
        if (outpt == 2) {
            output.textContent = "\nSo What you won it's not that big of a deal";
            outicon.innerHTML = '<i class="fas fa-hand-scissors"></i>';
            out.style.color = 'yellow';
        }
        if (outpt == 0) {
            output.textContent = "\nDamn you are a worthy opponent";
            outicon.innerHTML = '<i class="fas fa-hand-rock"></i>';
        }
    }

    input[1].onclick = function f(){
        out.style.color = 'red';
        const outpt = rand();
        //console.log(outpt);

        if (outpt == 2) {
            output.textContent = '\nYou sore fucking loser \nYou are worthless your life is worthless';
            outicon.innerHTML = '<i class="fas fa-hand-scissors"></i>';
        }
        if (outpt == 0) {
            output.textContent = "\nSo What you won it's not that big of a deal";
            outicon.innerHTML = '<i class="fas fa-hand-rock"></i>';
            out.style.color = 'yellow';
        }
        if (outpt == 1) {
            output.textContent = "\nDamn you are a worthy opponent";
            outicon.innerHTML = '<i class="fas fa-hand-paper"></i>';
        }
    }

    input[2].onclick = function f(){
        out.style.color = 'red';
        const outpt = rand();
        //console.log(outpt);

        if (outpt == 0) {
            output.textContent = '\nYou sore fucking loser \nYou are worthless your life is worthless';
            outicon.innerHTML = '<i class="fas fa-hand-rock"></i>';
        }
        if (outpt == 1) {
            output.textContent = "\nSo What you won it's not that big of a deal";
            outicon.innerHTML = '<i class="fas fa-hand-paper"></i>';
            out.style.color = 'yellow';
        }
        if (outpt == 2) {
            output.textContent = "\nDamn you are a worthy opponent";
            outicon.innerHTML = '<i class="fas fa-hand-scissors"></i>';
        }
    }