//Variables
let n1 , n2 ,cociente, residuo;

//Entrada de datos
n1 = Number(prompt("Ingrese un numero: "));
n2 = Number(prompt("Ingrese el siguiente numero: "));

//Proceso
cociente = n1 / n2;
residuo = n1 % n2 ;

document.write("Cociente: " + cociente + "<br>");
document.write("Residuo: " , residuo);