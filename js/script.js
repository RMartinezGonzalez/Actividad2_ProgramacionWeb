let modal = document.querySelector('.modal');
let header = document.querySelector('header');
let main = document.querySelector('main');
let modalTexto = document.querySelector('.modal-texto');

function validar() {
        let nombre = document.getElementById("nombreInput").value.trim();
        let apP = document.getElementById("apellidoPInput").value.trim();
        let apM = document.getElementById("apellidoMInput").value.trim();
        let fecha = document.getElementById("fechaInput").value;
        let correo = document.getElementById("correoInput").value.trim();
        let contra = document.getElementById("contraInput").value;


    if (!soloLetras(nombre) || !soloLetras(apP) || !soloLetras(apM)) {
        cambiarTextoModal('Los nombres y apellidos solo deben llevar letras.');
        blurTemp();
        return;
    }

    if (!esMayorDeEdad(fecha)) {
        cambiarTextoModal('Debes ser mayor de edad para registrarte.');
        blurTemp();
        return;
    }
    
    if (!validaCorreo(correo)) {
        cambiarTextoModal('El formato del correo no es válido.');
        blurTemp();
        return;
    }
    
    if (!validarPassword(contra)) {
        cambiarTextoModal('Formato de contraseña incorrecta. Necesita mayúsculas, minúsculas, números y un símbolo.');
        blurTemp();
        return;
    }

    let nombreCompleto = capitalizarTexto(`${nombre} ${apP} ${apM}`);
    // alert("Registro exitoso, Bienvenido " + nombreCompleto);

    let edad = calcularEdad(fecha);
    // modalTexto.textContent = 'La edad calculada es: ' + edad + ' años';    
    cambiarTextoModal(`
        "Registro exitoso, Bienvenido ${nombreCompleto}"
        La edad calculada es: ${edad} años
        `);
    blurTemp();

}

function validarLogin() {
    let correo = document.getElementById("correoInput").value.trim();
    let contra = document.getElementById("contraInput").value;

    if (!validaCorreo(correo)) {
        cambiarTextoModal('El formato del correo no es válido.');
        blurTemp();
        return;
    }
    
    if (!validarPassword(contra)) {
        cambiarTextoModal('Formato de contraseña incorrecta. Necesita mayúsculas, minúsculas, números y un símbolo.');
        blurTemp();
        return;
    }

    cambiarTextoModal("Login exitoso, Bienvenido");
    blurTemp();

}

function blurTemp() {
    main.classList.add('blur');
    header.classList.add('blur');
    modal.classList.remove('hidden');
    setTimeout(() => {
        header.classList.remove('blur');
        main.classList.remove('blur');
        modal.classList.add('hidden');
    }, 3000);
}

function cambiarTextoModal(texto) {
    modalTexto.textContent = texto;  
}
