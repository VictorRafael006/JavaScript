function calcularIdade(){
    nacimento = window.prompt('Digite o seu ano de nacimento: ');
    idade = 2023 -nacimento;
    frase = 'Quem nasceu em '+nacimento+' vai completar '+idade+' anos em 2023';
    document.getElementById('frase').innerHTML = frase;
}