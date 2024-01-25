function mostrarResultado(resultado) {
    document.getElementById("textoResultado").value = resultado;
}


function suma(num1, num2) {
    num1 = +document.getElementById("primerNumero").value;
    num2 = +document.getElementById("segundoNumero").value;
    mostrarResultado(resultado = num1 + num2);
    
}

function resta(rest1, rest2) {
    rest1 = +document.getElementById("primerNumero").value;
    rest2 = +document.getElementById("segundoNumero").value;
    mostrarResultado(resultado = rest1 - rest2);
    
}

function multi(mult1, mult2) {
    mult1 = +document.getElementById("primerNumero").value;
    mult2 = +document.getElementById("segundoNumero").value;
    mostrarResultado(resultado = mult1 * mult2);
    
}

function div(div1, div2) {
    div1 = +document.getElementById("primerNumero").value;
    div2 = +document.getElementById("segundoNumero").value;
    mostrarResultado(resultado = div1 / div2);
    
}

function pot(pot1, pot2) {
    pot1 = +document.getElementById("primerNumero").value;
    pot2 = +document.getElementById("segundoNumero").value;
    mostrarResultado(resultado = Math.pow(pot1, pot2));
    
}

function sqr(sqr1) {
    sqr1 = +document.getElementById("segundoNumero").value;
    mostrarResultado(resultado = Math.sqrt(sqr1));
    
}

function absol(absol1) {
    absol1 = +document.getElementById("segundoNumero").value;
    mostrarResultado(resultado = Math.abs(absol1));
    
}

function rand(minimo,maximo) {
    minimo = +document.getElementById("primerNumero").value;
    maximo = +document.getElementById("segundoNumero").value;
    maximo = maximo + 1;
    
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
    

}

function redo(resultdoRedo) {
    resultado = +document.getElementById("textoResultado").value;
    mostrarResultado(Math.round(resultado));
}

function piso() {
    resultado = +document.getElementById("textoResultado").value;
    mostrarResultado(Math.floor(resultado));
}

function techo() {
    resultado = +document.getElementById("textoResultado").value;
    mostrarResultado(Math.ceil(resultado));
}
