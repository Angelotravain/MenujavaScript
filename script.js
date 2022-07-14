// Código referente a atividade dois;

function sequenciaFibonacci() {
   // Aqui se encontra todas as variáveis utilizadas 
    var entrada = 0;
    var entrada1 = 1;
    var i = 0;
    var numReal = 0;
    var text = '';
    /*Abaixo são as duas variáveis que vão pegar o número do campo de texto 
    e a que vai levar o resultado para o campo de saida.*/
    var numero = document.getElementById('textEnter').value;
    var p = document.querySelector('#exitText');
    /*Abaixo se  econtra o laço de repetição que vai percorrer equivalente 
     ao número de entrada */
    for (i = 0; i <= numero; i++) {
        i = entrada + entrada1;
        entrada = entrada1 + i;
        entrada1 = i + entrada;
        /*Abaixo são as validações para saber se o 
        número digitado se encontra na sequencia ou não */
        if (i == numero || entrada == numero || entrada1 == numero) {
            numReal = numero;
            console.log(numReal);
        } if (numReal === numero) {
            text = 'O número ' + numero + ' pertence a sequência de fibonacci!';
            // esta linha inicia o HTMl e inclui nele a String da Variável Texto;
            p.innerHTML = text;
        } else if (numReal !== numero) {
            text = ('O número ' + numero + ' não pertence a sequência de fibonacci!');
            p.innerHTML = text;
        }
    }
}

// Código referente a atividade 5
function inverterString() {
    // Variável vazia para receber a String invertida
    var novaString = "";
    // Variáveis de entrada do HTML
    var entrada = document.getElementById('enterString').value;
    var exit = document.querySelector('#exitString');
    /* Laço de repetição que vai contar os caracteres da
    String Digitada e vai ir descendo um a um até chegar em zero
    adicionando esses caracteres na nova String */
    for (let i = entrada.length - 1; i >= 0; i--) {
        novaString += entrada[i];
    }
    // Entrada dos dados no HTML para exibir ao usuário
    exit.innerHTML =novaString;
}