// JavaScript Document
window.onload = enviar; 

function enviar(){// Asociar la funcion validar al evento click de el boton Enviar
document.getElementById('enviar').addEventListener('click',validar,false);    
	}
/************************************************************Validacion Nombre*/
	function validanombre(){
		var nombre = document.getElementById('nombre');
		limpiarError(nombre);
		if (nombre.value ==''){
			alert ('El campo de Nombre es obligatorio');
			error(nombre);
			return false;
		}
		else if(!isNaN(nombre.value)){
			alert('Formato del Nombre debe ser Letras');
			error(nombre);
			return false;	
		}return true;
	}
/************************************************************Validacion Email*/
	function validaemail(){
		var email = document.getElementById('email');
		limpiarError(email);
		if (email.value ==''){
			alert('El campo del Correo es obligatorio');
			error(email);
			return false;
		}
		var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(email.value.match(expresion)){
			return true;
		}
		else{
			alert("EL formato del Correo en invalido");
			error(email);
			return false;
		}
	}
/************************************************************Validacion Asunto*/
function validaasunto(){
		var asunto = document.getElementById('asunto');
		limpiarError(asunto);
		if (asunto.value ==''){
			alert ('El campo de Asunto es obligatorio y no debe ir vacio');
			error(asunto);
			return false;
		}
		return true;
	}
/************************************************************Validacion cuadro*/
function valuedescrip(){
		var descripcion = document.getElementById('descripcion');
		limpiarError(descripcion);
		if (descripcion.value ==''){
			alert ('El campo de la Descripcion es obligatorio');
			error(descripcion);
			return false;
		}
		else if(!isNaN(descripcion.value)){
			alert('Formato de la Descripcion debe ser Letras');
			error(descripcion);
			return false;	
		}return true;
	}
/****************************************************************validacion*/

function validar (e){
		if ( validanombre() &&  validaemail() && validaasunto() && valuedescrip()  &&confirm('Pulsa aceptar si desea enviar sus cambios')){
			return false;
		}else {
			e.preventDefault();
			return false;
		}
	}


	function error(elemento){
		elemento.className = "error";
		elemento.focus();
	}

	function limpiarError(elemento){
		elemento.className = " ";
}

	

