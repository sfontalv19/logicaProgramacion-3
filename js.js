// creamos funcion
function calculo() {
    let numero = document.getElementById("numero").value;

   // verificamos si es numero valido 
    if (isNaN(numero) || numero < 0 || numero === "") {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido.";
        return;
    }

    numero = Number(numero);
    let factorial = 1;

    
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    
    document.getElementById("resultado").innerHTML = `El factorial de ${numero} es: ${factorial}`;
}