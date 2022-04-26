const PALAVRA_CORRETA = "PAUSA";

let linha = 1;
let palavraUsuario = [];

var body = document.getElementsByTagName("body")[0];

body.addEventListener("keyup", function (event) {
  let ehLetra = false;
  if (event.key == "Backspace" && palavraUsuario.length > 0) {
    var el = document.getElementById(
      "l" + linha + "c" + (palavraUsuario.length - 1)
    );
    el.innerHTML = "";
    palavraUsuario.pop();
  } else if (event.key == "Enter" && palavraUsuario.length == 5) {
    let palavraCorreta =
      palavraUsuario.join("").toLowerCase() == PALAVRA_CORRETA.toLowerCase();
    console.log("VALIDACAO:", palavraCorreta);

    // Coloca a cor correta
    // * C == C entao é VERDE
    // * R == O
    // * e
    // * R nao tem em COISA entao é CINZA    letra.indexOf("R")
    // * R tem em COISA entao é AMARELO
    for (let i in palavraUsuario) {
      console.log("===>", i);
      //if (palavraUsuario[i] ==  PALAVRA_CORRETA[i])
      var el2 = document.getElementById("l" + linha + "c" + i);
      if (PALAVRA_CORRETA.indexOf(palavraUsuario[i]) == -1) {
        el2.classList.remove("br__cell--right");
        el2.classList.remove("br__cell--position");
        el2.classList.add("br__cell--wrong");
      } else if (PALAVRA_CORRETA.indexOf(palavraUsuario[i]) != -1) {
        if (palavraUsuario[i] == PALAVRA_CORRETA[i]) {
          el2.classList.remove("br__cell--position");
          el2.classList.remove("br__cell--wrong");
          el2.classList.add("br__cell--right");
        } else {
          el2.classList.remove("br__cell--right");
          el2.classList.remove("br__cell--wrong");
          el2.classList.add("br__cell--position");
        }
      }
    }
    linha += 1;
    palavraUsuario = [];
  } else if (palavraUsuario.length < 5) {
    palavraUsuario.push(event.key.toUpperCase());
    ehLetra = true;
  }

  if (ehLetra) {
    var el = document.getElementById(
      "l" + linha + "c" + (palavraUsuario.length - 1)
    );
    el.innerHTML = event.key.toUpperCase();
  }
});

function click_errado() {
  var el = document.getElementById("r3-d4");
  el.classList.remove("br__cell--right");
  el.classList.remove("br__cell--position");
  el.classList.add("br__cell--wrong");
}
function click_posicao() {
  var el = document.getElementById("r3-d4");
  el.classList.remove("br__cell--right");
  el.classList.remove("br__cell--wrong");
  el.classList.add("br__cell--position");
}
function click_correto() {
  var el = document.getElementById("r3-d4");
  el.classList.remove("br__cell--wrong");
  el.classList.remove("br__cell--position");
  el.classList.add("br__cell--right");
}
