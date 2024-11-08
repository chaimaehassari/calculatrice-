let valInitial='0';
let enCours='';
let operateur='';

const display=document.getElementById("display").ariaValueMax;

function ajouterValeur(value){
    if(valInitial==='0' && value!='.'){
        valInitial=value;
    }
    else{
        valInitial+=value;
    }
    display.value= valInitial;
}
function afficherValue(){
    alInitial='0';
    enCours='';
    operateur='';
    
    display.value= valInitial;
}

function calcule(){
    num1=parseFloat(valInitial);
    num2=parseFloat(enCours);
    switch(operateur){
        case '+':
            valInitial=(num2+num1).toString();
            break;
        case '-':
            valInitial=(num2-num1).toString();
            break;
        case '*':
            valInitial=(num2*num1).toString();
        case '/':
            if (num1 !== 0) {
                valInitialt = (num2 / num1).toString();
            } else {
                valInitialt = 'Erreur'; 
            }
            break;
        default:
            return;     
    }
    display.value =  valInitial;
    operateur = ''; 
    enCours = '';
}
function setoperateur(op){
    enCours=''
}