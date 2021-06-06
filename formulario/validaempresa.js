window.onload = enviaempresa; 

function enviaempresa(){// Asociar la funcion validar al evento click de el boton Enviar
document.getElementById('enviaempresa').addEventListener('click',validar,false);    
	}
/************************************************************Validacion Nombre de empresa*/
	function validanombreEmpresa(){
		var nombreem = document.getElementById('nombreempresa');
		limpiarError(nombreem);
		if (nombreem.value ==''){
			alert ('Completa el campo nombre');
			error(nombreem);
			return false;
		}
		else if(!isNaN(nombreem.value)){
			alert('Formato del nombre debe ser letras');
			error(nombreem);
			return false;	
		}return true
	}
   
/************************************************************Validacion ruc de la empresa */
function validaruc(){
		var ruc = document.getElementById('ruc');
		limpiarError(ruc);
		if(ruc.value ==''){
			alert ('Completa el campo de ruc o rise');
			error(ruc);
			return false;
		}
		else if(isNaN(ruc.value)){
			alert('Formato del RUC o RISE debe ser numeros');
			error(ruc);
			return false;	
		}
		else if(ruc.value.length<13){
			alert('Error: Solo se debe ingresar minimo 13 digitos');
			error(ruc);
			return false;
		}
		else if(ruc.value.length>13){
			alert('Error: solo se debe ingresar maximo 13 digitos');
			error(ruc);
			return false;
		}return true;
	}
/************************************************************Validacion Email*/
	function validaemailempresa(){
		var emailemp = document.getElementById('emailempresa');
		limpiarError(emailemp);
		if (emailemp.value ==''){
			alert('El campo del correo es obligatorio');
			error(emailemp);
			return false;
		}
		var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(emailemp.value.match(expresion)){
			return true;
		}
		else{
			alert("EL formato del correo en invalido");
			error(emailemp);
			return false;
		}
	}
/************************************************************Validacion Celular Empresa*/
	function validaCelularEmpresa(){
			var cellempresa = document.getElementById('phone');
			limpiarError(cellempresa);
			if (cellempresa.value ==''){
				alert('El campo del celular no debe ir vacio');
				error(cellempresa);
				return false;
			}
		else if(isNaN(cellempresa.value)){
			alert('Formato del campo celular  debe ser numerico');
			error(cellempresa);
			return false;	
		}
		else if(cellempresa.value.length<10){
			alert('Error: Solo se debe ingresar minimo 10 digitos');
			error(cellempresa);
			return false;
		}
		else if(cellempresa.value.length>10){
			alert('Error: solo se debe ingresar maximo 10 digitos');
			error(cellempresa);
			return false;
		}return true;
	}       
/************************************************************Validacion Direccion*/
	function validadirecion(){
		var dirempresa = document.getElementById('dirempresa');
		limpiarError(dirempresa);
		if (dirempresa.value==''){
			alert('El campo Direcion domiciliaria no debe ir vacio');
			error(dirempresa);
			return false;
		}return true;
	} 
/************************************************************Validacion Ciudad*/
	function validaCiudadEmpresa(){
		var ciudadempre = document.getElementById('ciudadempresa');
		limpiarError(ciudadempre);
		if (ciudadempre.value ==''){
			alert ('Completa el campo ciudad');
			error(ciudadempre);
			return false;
		}
		else if(!isNaN(ciudadempre.value)){
			alert('Formato del nombre debe ser letras');
			error(ciudadempre);
			return false;	
		}return true
	}   
/************************************************************Validacion Provincias*/
	function validaProvEmpresa(){
		var  prov = document.getElementById('provempresa').selectedIndex;
		if(prov == null || prov == 0){
				alert('Seleccion una Provincia');
				return false;
		}return true;
	} 
/************************************************************Validacion Añios*/
	function validaAnio(){
		var anio = document.getElementById('aniosempresa');
		limpiarError(anio);
		if (anio.value ==''){
			alert ('Completa este campo');
			error(anio);
			return false;
		}
		else if(anio.value < 1 ){
			alert('La empresa debe tener minimo 1 año de experiencia');
			error(anio);
			return false;	
		}return true
	}           
        
/************************************************************Validacion Sector Trabajo*/
	function validaSectorEmpresa(){
		var  sectrab = document.getElementById('sectorEmpresa').selectedIndex;
		if(sectrab == null || sectrab == 0){
				alert('Seleccion una Provincia');
				return false;
		}return true;
	} 
/************************************************************Validacion Mensaje de Empresa*/
	function validaMenEmpresa(){
		var menEmpresa = document.getElementById('menEmpresa');
		limpiarError(menEmpresa);
		if (menEmpresa.value ==''){
			alert ('El campo mensaje es obligatorio');
			error(menEmpresa);
			return false;
		}
		else if(!isNaN(menEmpresa.value)){
			alert('Formato mensaje debe ser Letras');
			error(menEmpresa);
			return false;	
		}return true
	}        
/************************************************************Funcion Validar*/
	function validar (e){
		if ( validanombreEmpresa() && validaruc() && validaemailempresa() && validaCelularEmpresa() && validadirecion() && validaCiudadEmpresa() &&validaProvEmpresa() && validaAnio() && validaSectorEmpresa() && validaMenEmpresa() && confirm('Pulsa aceptar si desea enviar sus cambios')){
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