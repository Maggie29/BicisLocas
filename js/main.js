function validateForm(){
	/* Escribe tú código aquí */
  function validateName(){
    var name = document.getElementById("name"); {

    if(name=="" || name.length==0 || /^\s+$/.test(valor) ){
    alert("Ingresa los datos");
    return false
  }
  }

  function validateLastName(){

  }
  function validateEmail(){

  }
  function validatePassword(){

  }
  function functionBike() {

  }
}

// el archivo js/main.js y completa la función validateForm, se deben hacer las siguientes validaciones en los campos:
// Todos los campos son obligatorios, excepto los dos últimos.
// Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
// Para los campos nombre y apellido la primera letra debe ser mayúscula
// Validar que el campo email tenga un formato válido. Ej: name@domain.com
// El campo password debe tener al menos 6 caracteres
// El campo password no puede ser igual a "password" ó "123456" ó "098754"
// El valor seleccionado de bicis, debe ser una de las opciones presentadas
// Si algún campo presenta error debe informarse al usuario por medio de un alert.
