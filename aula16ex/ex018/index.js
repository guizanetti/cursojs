let num = document.querySelector("#fnum");
let list = document.querySelector("#flista");
let res = document.querySelector("#res");
let valores = [];

function isNumber(n) {
  if (parseFloat(n) >= 1 && parseFloat(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(parseFloat(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(parseFloat(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    list.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor invalido ou ja encontrado na lista!.");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione um valor antes de fianlizar!");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / total
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todos temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores cadastrados é ${media} </p>`
  }
}
