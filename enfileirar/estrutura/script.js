const fila = (_locasaida) =>{
    let locasaida = locasaida;
    let dados = [];
    const tamanho = () => dados.length
    const estaVazia = () => dados.length < 1;
    const  enfileirar = valor => {
        dados.push(valor);
        imprimir();
    }
    const desenfileirar = () => {
        dados.splice(0,1);
        imprimir();
    }
    const imprimir = () => {
        console.log(dados);
        dado_saida ="";
        for(let i= 0; i < tamanho(); i++){
            dado_saida += dados[i].id +"("+dados[i].itens+")";
        }
        document.getElementByid(localSaida).innerHTML = dado_saida;
    }
    return{
        enfileirar, desenfileirar
    }
}
const f1 = fila("saidafilageral");

const  Cliente = (_id,_itens) =>{
    return {
        id:_id,
        itens:_itens
    }
}
const gerarIntens = () => Math.floor(Math.random()* (15-3)+ 2);
const tamanhoinicialfila = 15; 
(function(){
     for(let i = 1; i < tamanhoinicialfila; i++) {
     f1.enfileirar(Cliente("p"+i, gerarIntens()))
    
    }

})();