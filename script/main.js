const botonSuccess = document.querySelector('#bSuccess')
const contenedor = document.querySelector('#contenedor')
const formularioEmail = document.querySelector('#email')
const miinput = document.querySelector('#correo')
const miBoton = document.querySelector('#miBoton')
const modalAll = document.querySelector('.modal')
const expresiones = { 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}
const campos = {
    correo: false
}
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
miinput.addEventListener('keyup', validarFormulario);
miinput.addEventListener('blur', validarFormulario);
// dewe@ggg.com
miBoton.addEventListener('click', function(){
    if (campos.correo === true) {
        contenedor.innerHTML = ""
    }
});
// botonSuccess.addEventListener('click', function(){
//     contenedor.innerHTML = ""
//     let template_first = `<div id="contenedor"
//     class="container-fluid w-100 d-flex flex-column m-0 flex-md-row-reverse bg-white mx-md-auto my-md-auto ">
//     <div class="py-md-3"><img class="image_mobile w-100 m-0 d-md-none"
//         src="./assets/images/illustration-sign-up-mobile.svg" alt="imagen de agenda">
//       <img class="image_desktop d-none d-md-block" src="./assets/images/illustration-sign-up-desktop.svg"
//         alt="imagen de agenda">
//     </div>
//     <div class="text my-4 w-100">
//       <h1 class="headText w-100 mx-3 mt-md-0 mx-md-5">Stay updated!</h1>
//       <p class="pText ms-2 fs-5 mt-3 mx-md-5">Join 60,000+ product managers receiving monthly updates on:</p>
//       <ul>
//         <li class="list-text mt-3 ms-2 me-5 ps-2 fs-5 ">Product discovery and building what matters</li>
//         <li class="list-text mt-3 ms-2 me-5 ps-2 fs-5 ">Measuring to ensure updates are a success</li>
//         <li class="list-text mt-3 ms-2 me-5 ps-2 fs-5 ">And much more!</li>
//       </ul>
//       <div class="email m-2 mx-md-5">
//         <div class="d-flex labelEmail">
//           <label class="lemail mb-1 ms-2" for="correo">Email address</label>
//           <h6 for="correo" class="error ">Valid email required</h6>
//         </div>
//         <input type="email" class="correo w-100 ps-4 is-invalid" id="correo" name="correo"
//           placeholder="email@company.com" />
//         <button id="miBoton" class="boton my-4 w-100 fs-5 btn btn-outline-warning" type="submit ">Subscribe to monthly
//           newsletter</button>
//       </div>
//     </div>
//   </div>`
//     contenedor.innerHTML += template_first
// })
botonSuccess.addEventListener('click', function(e){
    e.preventDefault
    contenedor.reset()
})