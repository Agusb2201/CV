document.getElementById('Vresultado').innerHTML =  getRandomIntInclusive();


function getRandomIntInclusive() {
    let a = aleatorio(1,10)
    let b = aleatorio(1,10)
    let resultado = a + ' + ' + b
    localStorage.setItem("1", a + b);  /** Guarda en la memoria */
    console.log(a+b)
    return resultado
  }

function aleatorio(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

document.getElementById('boton').addEventListener("click",function () {
    let resu1 = document.getElementById('Numero').value;
    let resu2 = localStorage.getItem("1"); /** recupera el valor de la memoria */
    if (resu1 == resu2){
        document.getElementById('enviar').disabled = false;   
        document.getElementById('Numero').style.display = "none";  
        document.getElementById('boton').style.display = "none";   
        document.getElementById('Resultado').textContent = 'Ya puede enviar el mensaje'
        document.getElementById('menError').style.display = "none";
    } else { 
        document.getElementById('menError').style.display = "block";
        document.getElementById('Vresultado').innerHTML =  getRandomIntInclusive();
        document.getElementById('Numero').value = ""

    }
})