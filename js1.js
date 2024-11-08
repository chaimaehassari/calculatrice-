let valInitial = '0'; 
let enCours = ''; 
let operateur = '';

const display = document.getElementById("display");

function ajouterValeur(value) {
    if (valInitial === '0' && value !== '.') {
        valInitial = value; 
    } else {
        valInitial += value; 
    }
    display.value = valInitial;
}

function reset() {
    valInitial = '0';
    enCours = '';
    operateur = '';
    display.value = valInitial;
}

function calcule() {
    const num1 = parseFloat(valInitial);
    const num2 = parseFloat(enCours);

    switch (operateur) {
        case '+':
            valInitial = (num2 + num1).toString();
            break;
        case '-':
            valInitial = (num2 - num1).toString();
            break;
        case '*':
            valInitial = (num2 * num1).toString();
            break;
        case '/':
            if (num1 !== 0) {
                valInitial = (num2 / num1).toString();
            } else {
                valInitial = 'Erreur';
            }
            break;
        default:
            return;
    }

    display.value = valInitial;
    operateur = ''; 
    enCours = ''; 
}

function setOperateur(op) {
    if (enCours === '') {
        enCours = valInitial; 
    }
    operateur = op;
    valInitial = ''; 
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        switch(value) {
            case "=":
                calcule();
                break;
            case "C":
                reset();
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                setOperateur(value);
                break;
            default:
                ajouterValeur(value);
                break;
        }
    });
});
