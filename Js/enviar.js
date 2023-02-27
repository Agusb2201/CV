
document.getElementById('formContacto').addEventListener ('submit',function () {
   
   document.getElementById('ap_y_n').value = "";
   document.getElementById('asunto').value = "";
   document.getElementById('email').value = "";
   document.getElementById('mensaje').value = "";
   document.getElementById('Numero').value = "";
   document.getElementById('enviar').disabled = true;
   document.getElementById('Resultado').textContent = 'Su mensaje ha sido enviaro, muchas gracias por comunicarse';
   
}) 

   
