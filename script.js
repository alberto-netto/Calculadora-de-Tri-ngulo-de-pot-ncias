var potenciaCV, fatorDePotencia;

function Calcular(){
  
var potenciaKW = document.getElementById("resultadoKVA")
var potenciaAtiva = document.getElementById("resultadoKW")
var potenciaReativa = document.getElementById("resultado")
var elementoResultadoKVAr = document.getElementById("resultadoKVAr")
var elementoResultadoKVA = document.getElementById("resultadoKVA")
var elementoResultadoKW = document.getElementById("resultadoKW")

     potenciaCV = parseFloat(document.getElementById("valorCV").value);
    fatorDePotencia = parseFloat(document.getElementById("valorFP").value);
    potenciaKW = potenciaCV * 0.735499;
  
    elementoResultadoKVA.innerHTML = "A Potência Aparente é: " + potenciaKW.toFixed([3]) + " KVA";
    console.log("A Potência Aparente é: " + potenciaKW.toFixed([3]) + " KVA")
    potenciaAtiva = potenciaKW * fatorDePotencia;
  
    elementoResultadoKW.innerHTML = "A Potência Ativa é: " + potenciaAtiva.toFixed([3]) + " KW";
    console.log("A Potência Ativa é: " + potenciaAtiva.toFixed([3]) + " KW")
    Math.pow(potenciaAtiva);
    Math.pow(potenciaKW);
    potenciaReativa = Math.sqrt(potenciaKW-potenciaAtiva);  

      elementoResultadoKVAr.innerHTML = "A Potência Reativa é: " + potenciaReativa.toFixed([3]) + " KVAr";

   console.log("A Potência Reativa é: " + potenciaReativa.toFixed([3])+ " KVAr")
}