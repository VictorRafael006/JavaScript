function calcularMedia() {
    var nome = window.prompt("Digite seu Nome");
    document.getElementById("nome2").innerHTML = nome;

    var N1 = parseFloat(window.prompt("Digite a primeira nota"));
    document.getElementById("1").innerHTML = N1;

    var N2 = parseFloat(window.prompt("Digite a segunda nota"));
    document.getElementById("2").innerHTML = N2;

    var N3 = parseFloat(window.prompt("Digite a terceira nota"));
    document.getElementById("3").innerHTML = N3;

    var total = (N1 + N2 + N3) / 3;
    document.getElementById("totalM").innerHTML = total.toFixed(1); // Arredonda para 2 casas decimais
}