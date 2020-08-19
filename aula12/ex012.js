var time = new Date()
var hora = time.getHours()

// var hora = 18
console.log(`Agora sao exatamente ${hora} horas.`);
if(hora < 12){
    console.log('bom dia');
}else if(hora <= 18) {
    console.log('Boa tarde');
}else {
    console.log('Boa noite');
}