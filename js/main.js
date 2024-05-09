//! calculadora

function calculadora() {
    while (true) {
        
        let operacion = prompt("Ingrese la operación que desea realizar (+, -, *, /) o 'salir' para terminar:");

        if (operacion === "salir") {
            console.log("hasta luego")
            alert("¡Hasta luego!");
            break;
        }

        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));

        switch (operacion) {
            case '+':
                alert("El resultado de la suma es: " + (num1 + num2));
                break;
            case '-':
                alert("El resultado de la resta es: " + (num1 - num2));
                break;
            case '*':
                alert("El resultado de la multiplicación es: " + (num1 * num2));
                break;
            case '/':
                
                if (num2 !== 0) {
                    alert("El resultado de la división es: " + (num1 / num2));
                } else {
                    alert("¡No se puede dividir por cero!");
                }
                break;
            default:
                alert("Operación no válida.");
        }
    }
}

calculadora();