

window.onload = enviar; 

function enviar(){// Asociar la funcion validar al evento click de el boton Enviar
document.getElementById('enviar').addEventListener('click',validar,false);    
	}
/************************************************************Validacion Nombre*/
	function validanombre(){
		var nombre = document.getElementById('pnombre');
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
		}return true
	}
/************************************************************Validacion Segundo Nombre*/
	function validaSnombre(){
		var nombre = document.getElementById('snombre');
		limpiarError(nombre);
		if (nombre.value ==''){
			alert ('El campo de Segundo nombre es obligatorio');
			error(nombre);
			return false;
		}
		else if(!isNaN(nombre.value)){
			alert('Formato del Nombre debe ser Letras');
			error(nombre);
			return false;	
		}return true
	}
/************************************************************Validacion apellido Paterno*/
	function validapapellido(){
		var papellido = document.getElementById('papellido');
		limpiarError(papellido);
		if (papellido.value==''){
			alert('El campo de Apellido Paterno no debe estar vacio');
			error(papellido);
			return false;
		}
		else if(!isNaN(papellido.value)){
			alert('Formato del Apellido Paterno debe ser Letras');
			error(papellido);
			return false;	
		}return true;
	}
/************************************************************Validacion apellido Materno*/
	function validamapellido(){
		var mapellido = document.getElementById('mapellido');
		limpiarError(mapellido);
		if (mapellido.value==''){
			alert('El campo de Apellido Materno no debe estar vacio');
			error(mapellido);
			return false;
		}
		else if(!isNaN(mapellido.value)){
			alert('Formato del Apellido Materno debe ser Letras');
			error(mapellido);
			return false;	
		}return true;
	}
/************************************************************Validacion Cedula o pasaporte*/
	function validaidentificacion(){
		var identificacion = document.getElementById('identificacion');
		limpiarError(identificacion);
		if(identificacion.value ==''){
			alert ('El campo de la Cedula o Pasaporte  es obligatorio');
			error(identificacion);
			return false;
		}
		else if(isNaN(identificacion.value)){
			alert('Formato de la Cedula o Pasaporte debe ser numeros');
			error(identificacion);
			return false;	
		}
		else if(identificacion.value.length<10){
			alert('Error: Solo se debe ingresar minimo 10 digitos');
			error(identificacion);
			return false;
		}
		else if(identificacion.value.length>10){
			alert('Error: solo se debe ingresar maximo 10 digitos');
			error(identificacion);
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
/************************************************************Validacion Celular*/
	function validanumero(){
			var celular = document.getElementById('celular');
			limpiarError(celular);
			if (celular.value ==''){
				alert('El campo del Celular no debe ir vacio');
				error(celular);
				return false;
			}
		else if(isNaN(celular.value)){
			alert('Formato del campo Celular  debe ser numerico');
			error(celular);
			return false;	
		}
		else if(celular.value.length<10){
			alert('Error: Solo se debe ingresar minimo 10 digitos');
			error(celular);
			return false;
		}
		else if(celular.value.length>10){
			alert('Error: solo se debe ingresar maximo 10 digitos');
			error(celular);
			return false;
		}return true;
	}
/************************************************************Validacion Direccion*/
	function valuedirecion(){
		var direcion = document.getElementById('direccion');
		limpiarError(direcion);
		if (direcion.value==''){
			alert('El campo Direcion domiciliaria no debe ir vacio');
			error(direcion);
			return false;
		}return true;
	}
/************************************************************Validacion Ciudad*/
	function valueciudad(){
		var ciudad = document.getElementById('ciudad');
		limpiarError(ciudad);
		if (ciudad.value==''){
			alert('El campo de Ciudad no debe ir vacio');
			error(ciudad);
			return false;
		}
		else if(!isNaN(ciudad.value)){
			alert('Formato de la Ciudad debe ser Letras');
			error(ciudad);
			return false;	
		}return true;
	}
/************************************************************Validacion Provincias*/
	function valueprovincias(){
		var  provincia = document.getElementById('provincia').selectedIndex;
		if(provincia == null || provincia == 0){
				alert('Seleccion una Provincia');
				return false;
		}return true;
	}
/************************************************************Validacion Titulo*/
	function validatitulo(){
		var titulo = document.getElementById('titulo');
		limpiarError(titulo);
		if (titulo.value ==''){
			alert ('El campo del Titulo es obligatorio');
			error(titulo);
			return false;
		}
		else if(!isNaN(titulo.value)){
			alert('Formato del Titulo debe ser Letras');
			error(titulo);
			return false;	
		}return true
	}
/************************************************************Validacion Profecion*/
	function valueprofesion(){
		var  Profesion = document.getElementById('Profesion').selectedIndex;
		if(Profesion == null || Profesion == 0){
				alert('Seleccion una Profesion');
				return false;
		}return true;
	}

/************************************************************Validacion Check de Empleo*/

	function valuecheck(){
		var check = document.getElementById('explab').checked;
		if(check) {
		var nombreempresa = document.getElementById('nombreempresa');
			limpiarError(nombreempresa);
		var cargo = document.getElementById('cargo');
				limpiarError(cargo);
		var fecha =document.getElementById('start');
				limpiarError(fecha);
				if (nombreempresa.value ==''){
					alert ('El campo del nombre de la Empresa es obligatorio');
					error(nombreempresa);
					return false;
				}
				else if(!isNaN(nombreempresa.value)){
					alert('Formato del Nombre de la Empresa debe ser Letras');
					error(nombreempresa);
					return false;	
				}
				else if (cargo.value ==''){
					alert ('El campo del nombre  Cargo es obligatorio');
					error(cargo);
					return false;
				}
				else if(!isNaN(cargo.value)){
					alert('Formato del Nombre Cargo debe ser Letras');
					error(cargo);
					return false;	
				}
				else if (fecha.value ==''){
					alert ('El campo de la fecha es obligatorio');
					error(fecha);
					return false;
				}
			return true	
		}
		else{
			return true;
		}

	}
/************************************************************Validacion Descripcion*/
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
		}return true
	}
	
	function valueEstado(){
		var check = document.getElementById('casado').checked;
		if(check) {
		var parejanombre = document.getElementById('parejanombre');
			limpiarError(parejanombre);
		var parejaapellido = document.getElementById('parejaapellido');
			limpiarError(parejaapellido);
		var telesp = document.getElementById('telesp');
			limpiarError(telesp);
				if (parejanombre.value ==''){
					alert ('El campo del nombre de su Esposa es obligatorio');
					error(parejanombre);
					return false;
				}
				else if(!isNaN(parejanombre.value)){
					alert('Formato del Nombre de su Esposa debe ser Letras');
					error(parejanombre);
					return false;	
				}
				else if (parejaapellido.value ==''){
					alert ('El campo del Apellido de su Esposa es obligatorio');
					error(parejaapellido);
					return false;
				}
				else if(!isNaN(parejaapellido.value)){
					alert('Formato del apellido de su Esposa debe ser Letras');
					error(parejaapellido);
					return false;	
				}
				
				else if (telesp.value ==''){
					alert('El campo del Celular no debe ir vacio');
					error(telesp);
					return false;
				}
				else if(isNaN(telesp.value)){
					alert('Formato del campo Celular  debe ser numerico');
					error(telesp);
					return false;	
				}
				else if(telesp.value.length<10){
					alert('Error: Solo se debe ingresar minimo 10 digitos');
					error(telesp);
					return false;
				}
				else if(telesp.value.length>10){
					alert('Error: solo se debe ingresar maximo 10 digitos');
					error(telesp);
					return false;
				}return true;
		}
			else{
				return true;
			}

		}

/************************************************************Funcion Validar*/
	function validar (e){
		if ( validanombre() && validaSnombre() && validapapellido() && validamapellido() && validaidentificacion()  && validaemail() && validanumero() && valuedirecion() && valueciudad() && valueprovincias() && validatitulo() && valueprofesion() && valuecheck() &&   valueEstado() && valuedescrip()  &&confirm('Pulsa aceptar si desea enviar sus cambios')){
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
		
	}// JavaScript Document