let amigo = {nome: 'jose',
sexo:'M',
peso:'85,4',
engordar(p=20) {
    console.log('engordar');
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`);