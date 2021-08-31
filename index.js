function mudandoCod() {
    if (document.getElementById("EscolhaCode").value == "cesar") {
        document.getElementById("cesar").style.display = "flex";
        document.getElementById("base64").style.display = "none";

    } else if (document.getElementById("EscolhaCode").value == "base64") {
        document.getElementById("base64").style.display = "flex";
        document.getElementById("cesar").style.display = "none";
    }




}


var formCesar = document.getElementById("cesarEnvio")
formCesar.addEventListener("submit", function(event) {
    event.preventDefault();
    return cifraCesar();

})


// if (document.getElementById('codificar').checked) {
function cifraCesar() {
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letra = document.getElementById('input').value.toUpperCase();
    var key = document.getElementById('deslocamento').value
    var keyN = Number(key)
    if (document.getElementById('decodificar').checked) {
        keyN = keyN * (-1)

    }
    var resultado = ""
    for (i = 0; i < letra.length; i++) {
        var posicaoDaLetraNoAlfabeto = letra.charCodeAt(i) - 64; //Identifica qual letra é do alfabeto
        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + keyN) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
        console.log(keyN)
        resultado += alfabeto[letraComDeslocamento - 1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.                    
        document.getElementById("output").innerHTML = resultado;
    }
}

var formBase = document.getElementById("baseEnvio")
formBase.addEventListener("submit", function(event) {
    event.preventDefault();
    return funfandoBase64();

})

function funfandoBase64() {
    var dadoBase = document.getElementById("inputBase64").value

    if (document.getElementById('codificarBase').checked) {
        outputBase.innerHTML = atob(dadoBase);
    } else if (document.getElementById("decodificarBase").checked) {
        outputBase.innerHTML = btoa(dadoBase);
    }
}