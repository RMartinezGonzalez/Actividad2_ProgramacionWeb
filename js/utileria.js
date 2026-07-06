/**
 * Válida la sintaxis de una cadena
 *
 * @param {string} correo - El correo que se va a evaluar 
 * @returns {boolean} Retorna `true` en caso de un correo válido y `false` en caso de uno inválido
 */
function validaCorreo(correo) {
   if (!correo) return false;
   const correoValido = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
   let valido = correoValido.test(correo);

   return valido;
}


/**
 * Válida que el texto sean solamente letras
 *
 * @param {string} text - la cadena que va a evaluar 
 * @returns {boolean} Retorna `true` en caso de que tenga solamente letras y `false` en caso de no tener solamente letras
 */
function soloLetras(texto) {
   const letrasValidas = /[a-zA-ZáéíóúñÁÉÍÓÚÑ]/;
   let valido = letrasValidas.test(texto);

   return valido;
}


/**
 * Válida la logitud de una cadena
 *
 * @param {number} numero - El numero que se va a evaluar 
 * @param {number} maxLongitud - La longitud máxima de la cadena 
 * @returns {boolean} Retorna `true` en caso de que el largo del numero sea menor a la longitud máxima y `false` en caso contrario
 */
function validarLongitud(numero, maxLongitud) {
   return numero.toString().length <= maxLongitud;
}


/**
 * Calcula la edad ingresada
 *
 * @param {string} fechaNacimiento - La fecha de nacimiento que se va a evaluar 
 * @returns {number} Retorna la edad calculada en años
 */
function calcularEdad(fechaNacimiento) {
   if (!fechaNacimiento) return 0;

   let hoy = new Date();
   const cumple = new Date(fechaNacimiento);
   let edad = hoy.getFullYear() - cumple.getFullYear();
   let difMeses = hoy.getMonth() - cumple.getMonth();
   let difDias = hoy.getDate() - cumple.getDate();

   if (difMeses < 0) {
      edad--;
   }
   if (difMeses === 0 && difDias < 0) {
      edad --;
   }

   return edad;
}

/**
 * Calcula segun la fecha de nacimiento si es mayo de edad
 *
 * @param {string} fechaNacimiento - La fecha de nacimiento que se va a evaluar 
 * @returns {boolean} Retorna `true` en caso de ser mayor de edad y `false` en caso contrario
 */
function esMayorDeEdad(fechaNacimiento) {
   let edad = calcularEdad(fechaNacimiento);
   return edad >= 18;
}

/**
 * Valída si un texto tiene formato de contraseña
 *
 * @param {string} password - La contraseña que se va a evaluar 
 * @returns {boolean} Retorna `true` en caso de ser un contraseña valida y `false` en caso contrario
 */
function validarPassword(password) {
   const contraValida = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
   let valido = contraValida.test(password);

   return valido;
}

/**
 * Valída si un texto tiene formato de contraseña
 *
 * @param {string} idElemento - el id del elemento a ocultar o mostrar 
 * @param {boolean} mostrar - Define si se muestra el elemento `true` o se oculta `false`  
 * @returns {boolean} Retorna `true` si se cambió y `false` si no se encontró
 */
function mostrarOcultar (idElemento, mostrar) {
   const elemento = document.getElementById(idElemento);

   if(!elemento) return false;

   if (mostrar) {
      elemento.classList.remove('hidden');
      elemento.classList.add('show');
   } else {
      elemento.classList.remove('show');
      elemento.classList.add('hidden');
   }

   return true
}

/**
 * Valída si un texto tiene formato de contraseña
 *
 * @param {string} idElemento - el id del elemento a ocultar o mostrar 
 * @param {boolean} mostrar - Define si se muestra el elemento `true` o se oculta `false`  
 * @returns {boolean} Retorna `true` si se cambió y `false` si no se encontró
 */
function capitalizarTexto (texto) {
   const palabras = texto.trim().toLowerCase().split(' '); 

   for(let i = 0; i < palabras.length; i++){
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
   }

   return palabras.join(" ");
}