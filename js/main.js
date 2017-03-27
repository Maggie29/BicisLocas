function validateForm(){
  var letras = ^[a-zA-Z_áéíóúñ\s]*$;
/* Escribe tú código aquí */
  function validateName(){
    var name = document.getElementById("name").value;
    if(name== null || name.length==0 || /^\s+$/.test(name) ){
      alert("Este campo es obligatorio");
      return false
    }else if(!letras.test(name)){
      alert("Este campo solo acepta letras");
      return true;
    }else if(name.chartAt(0) != name.chartAt(0).toUpperCase()){
      alert("El primer caracter con mayúscula")
    }
  }
  validateName();

  function validateLastName(){
    var lastname = document.getElementById("lastname").value;
    if(lastname== null || lastname.length==0 || /^\s+$/.test(lastname) ){
      alert("Este campo es obligatorio");
      return false
    }else if(!letras.test(lastname)){
      alert("Este campo solo acepta letras");
      return true;
    }else if(lastname.chartAt(0) != lastname.chartAt(0).toUpperCase()){
    alert("El primer caracter con mayúscula")
    }
  }
  validateLastName();

  function validateEmail(){
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var email = document.getElementById("input-email").value;
    if(email== null || email.length==0 ){
      alert("Este campo es obligatorio");
      return false
    }  else if(emailRegex.test(email)){
      return true;
    }else{
      alert("Este campo debe tener el siguiente formato: name@domain.com")
    }
  }
  validateEmail();

  function validatePassword(){
    var password = document.getElementById("input-password").value;
    if(password== null || password.length==0 ){
      alert("Este campo es obligatorio");
      return false
    }else if(password.length<6){
      alert("Este campo debe tener seis o más caracteres");
    }else if(password=="password" ||password= "123456" ||password= "098754"){
      alert("La contraseña ingresada no es válida");
    }
  }
  validatePassword()

  function functionBike() {
    var bike = document.getElementsByClassName("form-control").selectedIndex;
    if(bike == null || bike == 0 ){
      alert("Debe elegir una opción")
      return false;
    }
  }
  functionBike()
}
validateForm()

// el archivo js/main.js y completa la función validateForm, se deben hacer las siguientes validaciones en los campos:
// Todos los campos son obligatorios, excepto los dos últimos.
// Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
// Para los campos nombre y apellido la primera letra debe ser mayúscula
// Validar que el campo email tenga un formato válido. Ej: name@domain.com
// El campo password debe tener al menos 6 caracteres
// El campo password no puede ser igual a "password" ó "123456" ó "098754"
// El valor seleccionado de bicis, debe ser una de las opciones presentadas
// Si algún campo presenta error debe informarse al usuario por medio de un alert.
