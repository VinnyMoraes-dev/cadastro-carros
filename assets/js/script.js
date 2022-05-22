function cadastra() {
    var modelo = document.getElementById("inputModelo").value;
    var fabricante = document.getElementById("inputFabricante").value;
    var placa = document.getElementById("inputPlaca").value;
    var cor = document.getElementById("inputCor").value;

    var card =  "<div class='card-carro' style='color: black; text-shadow: 1px 1px black'>" +
                    "Modelo: " + modelo + "</br>" +
                    "Fabricante: " + fabricante + "</br>" +
                    "Placa: " + placa + "</br>" +
                    "Cor: " + cor + "</br>" +
                "</div>";


// Resultado
document.getElementById("resultado").innerHTML += card;

// Reset para o estado inicial
document.getElementById("formulario").reset();

}














