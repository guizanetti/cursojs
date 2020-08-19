function load() {
  var msg = window.document.querySelector("#msg");
  var img = window.document.querySelector("#image");
  var data = new Date();
  var hora = 19//data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#69B5F2'
    msg.innerHTML += '<p>Bom Dia!</p>'

  } else if (hora >= 12 && hora <= 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#E97C2C'
    msg.innerHTML += '<p>Boa Tarde!</p>'
  } else{
    img.src = 'fotonoite.png'
    document.body.style.background = '#414141'
    msg.innerHTML += '<p>Boa Noite!</p>'
  }
}
