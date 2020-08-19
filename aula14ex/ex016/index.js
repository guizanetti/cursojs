function contar() {
  var passo1 = document.querySelector("#text1");
  var passo2 = document.querySelector("#text2");
  var passo3 = document.querySelector("#text3");
  var res = document.querySelector("#res");

  if (passo1.value.length == 0 || passo2.value.length == 0 || passo3.value.length == 0) {
    res.innerHTML = "Impossivel contar! Preencha todos os campos";
  } else {
    res.innerHTML = "Conatando: <br>";
    var inicio = parseFloat(passo1.value);
    var fim = parseFloat(passo2.value);
    var passo = parseFloat(passo3.value);
    if (passo <= 0) {
      alert("Passo invalido! Considerando PASSO 1");
      passo = 1;
    }
    if (inicio < fim) {
      for (var c = inicio; c <= fim; c += passo) {
        res.innerHTML += ` ${c} \u{1f449}`;
      }
    } else {
      for (var c = inicio; c >= fim; c -= passo) {
        res.innerHTML += ` ${c} \u{1f449}`;
      }
    }
    res.innerHTML += `\u{1F6D1}`;
  }
}
