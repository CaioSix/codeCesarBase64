var formSubmit = document.getElementById("submit")

formSubmit.addEventListener("submit", function(event) {
    event.preventDefault();
    var user = document.getElementById("CesarUs")
    document.getElementById("output").innerHTML = user.value;
})





console.log(cesar)

function calcular() {

}



//         <script>
//             var values = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
//             var key = +document.getElementById("key").innerHTML;

//             function prev() {
//                 if(key > 1) {
//                     key--;
//                     document.getElementById("key").innerHTML = key;
//                 }
//             }

//             function next() {
//                 if(key < 25) {
//                     key++;
//                     document.getElementById("key").innerHTML = key;
//                 }
//             }

//             function calculate() {
//                 var input = document.getElementById("input").value.toUpperCase();
//                 var result = "";

//                 for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

//                     var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
//                     var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
//                     letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
//                     result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
//                 }

//                 document.getElementById("output").innerHTML = result;
//             }
//         </script>