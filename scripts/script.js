
let inputcapitalInicial = document.getElementById("capitalInicial");
let inputJurosAnuais = document.getElementById("JurosAnuais");
let inputQuantidadeAnos = document.getElementById("QuantidadeAnos");

let resultado = document.getElementById("resultado");

function calcular() {

    let capitalInicial = inputcapitalInicial.value;
    let JurosAnuais = inputJurosAnuais.value;
    let QuantidadeAnos = inputQuantidadeAnos.value;
        

    var montanteFinal = 0;
    var juros = 0

    montanteFinal = capitalInicial * (1 + (JurosAnuais/100))**QuantidadeAnos
    montanteFinal = Math.round(montanteFinal) // arredonda o valor 
    // montanteFinal.toFixed(2);
    
    juros = montanteFinal - capitalInicial

    resultado.innerHTML = `<p>${montanteFinal} Montante Final</p>`
    resultado.innerHTML += `<p>${juros} Juros Final</p>`
    
}

