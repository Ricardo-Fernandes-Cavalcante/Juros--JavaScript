import entradaDados from 'readline-sync';

let titulo = "-----   Aplicação de Juros   -----";
console.log(titulo.toUpperCase());

let valor_devido = entradaDados.question("Digite o valor original: ");
let dias_atraso = entradaDados.question("Digite quantos dias em atraso: ");
let juros10 = 10;
let juros5 = 5;
let valor_juros;


if((dias_atraso > 0) && (dias_atraso <= 15)){
    valor_juros = (valor_devido * juros5) / 100;
    let valor_total = parseInt(valor_devido) + parseInt(valor_juros);

    console.log("Valor Original da dívida: R$"+valor_devido);
    console.log("Dias atrasados: "+dias_atraso);
    console.log("Taxa de juros: "+juros5+"%");
    console.log("Valor total com juros: R$"+valor_total+",00");


}else if(dias_atraso > 15){
    valor_juros = (valor_devido * juros10) / 100;
    let valor_total = parseInt(valor_devido) + parseInt(valor_juros);
    console.log("Valor Original da dívida: R$"+valor_devido);
    console.log("Dias atrasados: "+dias_atraso);
    console.log("Taxa de juros: "+juros10+"%");
    console.log("Valor total com juros: R$"+valor_total+",00");

}else{
    console.log("Boletos em dia");
}