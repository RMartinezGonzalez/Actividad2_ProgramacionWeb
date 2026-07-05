
function validaCorreo(correo) {
   if (!correo) return false;
   const correoValido = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
   let valido = correoValido.test(correo);

   return valido;
}

function soloLetras(texto) {
   const letrasValidas = /[a-zA-ZáéíóúñÁÉÍÓÚÑ]/;
   let valido = letrasValidas.test(texto);

   return valido;
}

function validarLongitud(numero, maxLongitud) {
   return numero.toString().length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
   if (!fechaNacimiento) return false;

   if()
}

function esMayorDeEdad(fechaNacimiento) {

}

function validarPassword(password) {
   const contraValida = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
   let valido = contraValida.test(password);

   return valido;
}

