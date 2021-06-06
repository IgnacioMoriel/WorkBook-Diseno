// JavaScript Document
window.onload = enviar; 

function enviar(){// Asociar la funcion validar al evento click de el boton Enviar
document.getElementById('btn').addEventListener('click',validar,false);    
	}

function validauser(){
		var user = document.getElementById('user');
		limpiarError(user);
		if (user.value ==''){
			alert ('El campo de Usuario es obligatorio');
			error(user);
			return false;
		}
		return true
}
function validapass(){
		var pass = document.getElementById('pass');
		limpiarError(pass);
		if (pass.value ==''){
			alert ('El campo de la Contraseña es obligatorio');
			error(pass);
			return false;
		}
		return true
}

function validar (e){
		if ( validauser() && validapass() &&confirm('Pulsa aceptar si desea enviar sus cambios')){
			return false;
		}else {
			e.preventDefault();
			return false;
		}
	}

function error(elemento){
	elemento.style.backgroundColor = "#393939";
	elemento.style.border= "solid 1px red" ;
    elemento.className = "error";
    elemento.focus();
}

function limpiarError(elemento){
    elemento.className = " ";
	elemento.style.border="solid 1px black";
	elemento.style.backgroundColor = "black";
}