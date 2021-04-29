

function limpar(){
    
}

function enviar(){

var input1 = document.getElementById("n1")
var input2 = document.getElementById("n2")
if(input1.value.length == 0 || input2.value.length == 0){
    alert("Adicione os numeros A e B!")
} 
else {

var getInput1 = parseFloat(input1.value)
var getInput2 = parseFloat(input2.value)


//soma
var inputSoma = document.getElementById("Soma")
somando = getInput2 + getInput1
inputSoma.value = `${somando}`
console.log(somando)


//subtração
var inputSubtração = document.getElementById("Sub")
subtraindo = getInput1 - getInput2
inputSubtração.value = `${subtraindo}`

//Subtração Invertida
var inputSubtraçãoInvert = document.getElementById("SubInvertida")
subtraçãoInvertida = getInput2 - getInput1
inputSubtraçãoInvert.value = `${subtraçãoInvertida}`


//multiplicação
var multiplicação = document.getElementById("Multi")
multiplicando = getInput1 * getInput2
multiplicação.value = `${multiplicando}`



//divisão
var divisão = document.getElementById("Divi")
if(getInput2 === 0){
    divisão.value = "Divisão por 0!"
} else {
dividindo = getInput1 / getInput2
divisão.value = `${dividindo}`
}

//divisão invertida
var divisãoInvert = document.getElementById("DiviInvertida")
if(getInput1 === 0){
    divisãoInvert.value = "Divisão por 0!"
} else {
dividindoInvertido = getInput2 / getInput1
divisãoInvert.value = `${dividindoInvertido}`
}


//potencia N1
var potencia = document.getElementById("Pot1")
potenciando = getInput1**2
potencia.value = `${potenciando}`

//Potencia N2
var potencia2 = document.getElementById("Pot2")
potenciando2 = getInput2**2
potencia2.value = `${potenciando2}`


//Divisores inteiros N1
var divisor1 = document.getElementById("Divisor1")
var valores = []
divisor1.value = ""
if(getInput1 >= 0){
for(i = 0; i <= getInput1; i++){
    if(getInput1 % i === 0){
        valores.push(i)
    }
}
divisor1.value += `${valores},`
divisor1.value += `Total(${valores.length})`
} else {
    divisor1.value = "Divisores negativos!"
}



//Divisores inteiros N2
var divisor2 = document.getElementById("Divisor2")
var valores2 = []
divisor2.value = ""
if(getInput2 >= 0){
for(i2 = 0; i2 <= getInput2; i2++){
    if(getInput2 % i2 === 0){
        valores2.push(i2)
    }
}
divisor2.value += `${valores2},`
divisor2.value += `Total(${valores2.length})` 
} else {
    divisor2.value = "Divisores negativos!"
}



//fatorial N1
var fatorial1 = document.getElementById("Fatorial1")
fatIni = 1
fatorial1.value = ""
if(getInput1 <= 21 && getInput1 >= 0){
for(f = 1; f <= getInput1; f++){
    fatIni *= f
}
fatorial1.value = `${fatIni}`
} else if(getInput1 > 21 || getInput1 < 0){
    fatorial1.value = "Apenas numeros até 21 e positivos!"
}



//fatorial N2
var fatorial2 = document.getElementById("Fatorial2")
fatIni2 = 1
fatorial2.value = ""
if(getInput2 <= 21 && getInput2 >= 0){
for(f2 = 1; f2 <= getInput2; f2++){
    fatIni2 *= f2
}
fatorial2.value = `${fatIni2}`
} else if(getInput2 > 21 || getInput2 < 0){
    fatorial2.value = "Apenas numeros até 21 e positivos!"
}




} //else
} //enviar

