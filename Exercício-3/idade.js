function calcularImc() {
    var idade = parseFloat(document.getElementById('idade').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

  
    // Calcular o IMC
    var imc = peso / (altura * altura);
  
    // Interpretar o IMC
    var interpretacao = '';
    if (imc < 18.5) {
        interpretacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        interpretacao = 'Peso normal';
    } else if (imc < 29.9) {
        interpretacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        interpretacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
        interpretacao = 'Obesidade grau II';
    } else {
        interpretacao = 'Obesidade grau III';
    }
  
    // Exibir o resultado
    var resultado = 'Seu IMC é ' + imc.toFixed(2) + ' - ' + interpretacao;
    document.getElementById('imc').innerHTML = resultado;
}

  