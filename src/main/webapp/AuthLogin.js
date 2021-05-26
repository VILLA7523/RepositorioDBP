/**
 * 
 */

var formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');

const expresionesregulares = {
    nombres : /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{3,50}$/,
    apellidos : /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{3,50}$/,
	age:   /^[0-9]{2}$/
}

const estados = {
    nombres : false,
    apellidos : false ,
	age : false
}


const verificaciondeform = (e) => {
    switch (e.target.name) {
        case "names":
            if(expresionesregulares.nombres.test(e.target.value)){
                console.log("bien");
                document.getElementById('caja_names').classList.remove('form__caja-incorrecto');
		        document.getElementById('caja_names').classList.add('form__caja-correcto');
		        document.querySelector('#caja_names i').classList.add('fa-check-circle');
		        document.querySelector('#caja_names i').classList.remove('fa-times-circle');
                document.querySelector('#caja_names .form__input-error').classList.remove('form__input-error-activo');
                estados['nombres'] = true;
            } else {
                console.log("mal");
                document.getElementById('caja_names').classList.add('form__caja-incorrecto');
		        document.getElementById('caja_names').classList.remove('form__caja-correcto');
		        document.querySelector('#caja_names i').classList.remove('fa-check-circle');
		        document.querySelector('#caja_names i').classList.add('fa-times-circle');
                document.querySelector('#caja_names .form__input-error').classList.add('form__input-error-activo');
                estados['nombres'] = false;
            }

            break;
        case "surname":
            if(expresionesregulares.apellidos.test(e.target.value)){
                console.log("bien");
                document.getElementById('caja_surname').classList.remove('form__caja-incorrecto');
		        document.getElementById('caja_surname').classList.add('form__caja-correcto');
		        document.querySelector('#caja_surname i').classList.add('fa-check-circle');
		        document.querySelector('#caja_surname i').classList.remove('fa-times-circle');
                document.querySelector('#caja_surname .form__input-error').classList.remove('form__input-error-activo');
                estados['apellidos'] = true;
            } else {
                console.log("mal");
                document.getElementById('caja_surname').classList.add('form__caja-incorrecto');
		        document.getElementById('caja_surname').classList.remove('form__caja-correcto');
		        document.querySelector('#caja_surname i').classList.remove('fa-check-circle');
		        document.querySelector('#caja_surname i').classList.add('fa-times-circle');
                document.querySelector('#caja_surname .form__input-error').classList.add('form__input-error-activo');
                estados['apellidos'] = false;
            }
            break;

        case "age":
            if(expresionesregulares.age.test(e.target.value)){
                document.getElementById('caja_age').classList.remove('form__caja-incorrecto');
		        document.getElementById('caja_age').classList.add('form__caja-correcto');
		        document.querySelector('#caja_age i').classList.add('fa-check-circle');
		        document.querySelector('#caja_age i').classList.remove('fa-times-circle');
                document.querySelector('#caja_age .form__input-error').classList.remove('form__input-error-activo');
                estados['age'] = true;
            } else {
                document.getElementById('caja_age').classList.add('form__caja-incorrecto');
		        document.getElementById('caja_age').classList.remove('form__caja-correcto');
		        document.querySelector('#caja_age i').classList.remove('fa-check-circle');
		        document.querySelector('#caja_age i').classList.add('fa-times-circle');
                document.querySelector('#caja_age .form__input-error').classList.add('form__input-error-activo');
                estados['age'] = false;
            }
            break;

		
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',verificaciondeform);
    input.addEventListener('blur',verificaciondeform);
});

formulario.addEventListener ( 'submit' ,  ( e )  =>  {
	const  condiciones  =  document.getElementById ( 'condiciones' ) ;
    console.log(estados);
	if (estados.nombres &&  estados.apellidos && estados.age ) {
        document.getElementById('form__msj-exito').classList.add('form__msj-exito-activo');
		setTimeout(() => {
			document.getElementById('form__msj-exito').classList.remove('form__msj-exito-activo');
		}, 5000);

		document.querySelectorAll('.form__caja-correcto').forEach((icono) => {
			icono.classList.remove('form__caja-correcto');
		});
	}  else  {
        e.preventDefault();
        document.getElementById('form__msj').classList.add('form__msj-activo');
	}
} ) ;