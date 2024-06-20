// Juego de adivinar el numero entre 1 y 10
// El numero random va a ser el redondeo asi abajo y un numero random del 0 al 100 +1
const numeroRandom = Math.floor(Math.random() * 100 + 1);
// Numero que ingrese el usuario en el input
let numeroEntrada = document.getElementById("numeroEntrada");
// Mensaje de advertencia para el usuario
let mensaje = document.getElementById("mensaje");
// Iniciamos intentos en 0
let intentos = 0;
// Funcion para chequear el resultado
const chequearResultado = () => {
  // Aumentamos intentos en 1 para que cada vez que clickeemos se sume
  intentos++;
  // Le vamos a hacer un parseInt al numeroEntrada para que sea un dato tipo number y pueda ser validado
  let numeroIngresado = parseInt(numeroEntrada.value);
  // Usamos el operador OR para validar una operacion o otra
  // Con isNaN (is not a number) podemos preguntar si NO es un number
  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    // textContent es un atributo del parrafo para agregar contenido de texto
    mensaje.textContent = "Por favor, introduce un número válido entre 1 y 100";
    // Aplicamos el style de color rojo
    mensaje.style.color = "#f00";
    // Usamos return para en caso de que no sea valido el dato ingresado se corte la ejecucion del codigo
    return;
  } else if (numeroIngresado === numeroRandom) {
    if (intentos === 1) {
      mensaje.textContent = `Sos un capo man lo sacaste a la primera 😎😎`;
    } else if (intentos > 1 && intentos <= 5) {
      mensaje.textContent = `Re bien lo sacaste en tan solo ${intentos} intentos!!!`;
    } else {
      mensaje.textContent = `Muy bien! Le acertaste al numero en ${intentos} intentos!`;
    }
    mensaje.style.background = "#040";
    mensaje.style.color = "#fff";
    // Hacemos que una vez hayas ganado no se pueda cambiar el numero del input
    numeroEntrada.disabled = "true";
    return;
  } else if (numeroIngresado < numeroRandom) {
    mensaje.textContent = "¡El numero es más alto! Vuelve a intentar";
  } else {
    mensaje.textContent = "¡El numero es más bajo! Prueba de nuevo";
  }
};

document.querySelector("button").addEventListener("click", chequearResultado);
