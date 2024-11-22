const botonSuccess = document.querySelector('#bSuccess')
const miinput = document.querySelector('#correo')
const correoRecibido = document.querySelector('#correoRecibido')
const miBoton = document.querySelector('#miBoton')
const modalAll = document.querySelector('#modal')
const form = document.querySelector('#form')

/// Expresiones de mi formulario
const expresiones = { 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
// campos del formulario
const campos = {
    correo: false
}
//Contenido de mi Input correo
miinput.addEventListener('keyup', validarFormulario);
miinput.addEventListener('blur', validarFormulario);
// funciones 
const validarFormulario = (e) => {
    // console.log(e.target.name);
    switch (e.target.name) {
		case "correo":
			if (expresiones.correo.test(e.target.value)) {
                document.querySelector('#correo').classList.add('correo-success');
                document.querySelector('.email h6').classList.remove('error-active');
                document.querySelector('#correo').classList.remove('input-error');
                campos.correo = true;
            }else{
                document.querySelector('.email h6').classList.add('error-active');
                document.querySelector('#correo').classList.add('input-error');
                campos.correo = false;
            }
		break;

	}
}
function toggleModal() {
    modalAll.classList.toggle('d-none');
}
function addEmailSuccess() {
    correoRecibido.textContent = miinput.value ;
}
// Mis eventos
miBoton.addEventListener('click', function(e){
    e.preventDefault()
    if (campos.correo === true) {
        addEmailSuccess()
        toggleModal()
    }else if (campos.correo === false) {
        console.log("nop")
    }
});
botonSuccess.addEventListener('click', function(){
    toggleModal()
    form.reset();
})
