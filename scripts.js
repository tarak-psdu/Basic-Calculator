const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("results")

for (let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener('click', function() {
        const buttonVaue = buttonsEl[i].textContent;

        if (buttonVaue === "c"){
            clearResult();
        } else if (buttonVaue === "=") {
            calculateResult();
        } else {appendValue(buttonVaue)}
    })
}

function clearResult() {
    inputFieldEl.value = "";
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value);
}

function appendValue(buttonVaue){
    inputFieldEl.value += buttonVaue;
}