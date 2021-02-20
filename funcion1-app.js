//Diferencia entre función y metodos
//la forma en que son nombrados, tiene que ver con el contexto en que son utilizadas

const n1 = 20;
const n2 = '20';

console.log( parseInt(n2)); //Función

console.log(n1.toString()); //Método

function sumar(/*parameters*/a, b){
    //Function Body
    console.log(a+b);
};
   
sumar(2,4);