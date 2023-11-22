document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    var numero1 = document.getElementById('n1').value;
    var numero2 = document.getElementById('n2').value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, digite números válidos.');
        return;
    }

    if (numero1 > numero2) {
        alert('Formulário válido! Número B é maior que o número A.');
    } else {
        alert("Formulário não aceito! Número B deve ser maior que o número A.");
    }
});
