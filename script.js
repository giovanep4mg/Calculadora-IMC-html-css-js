//variáveis
const resultadoIMC = document.querySelector("#resultadoIMC")
const resultadoGRAU = document.querySelector("#resultadoGRAU")
const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")



const calcIMC = () => {

    if (altura.value != "" && peso.value != "") {
        //cria uma variável que vai receber a conta para saber qual é o IMC
        const imc = (peso.value / (altura.value * altura.value).toFixed());
        //variável
        let classification = "";

        if (imc < 18.5) {
            classification = "Abaixo do peso"
        } else if (imc < 25) {
            classification = "Peso normal"
        } else if (imc < 30) {
            classification = "Acima do peso"
        } else if (imc < 35) {
            classification = "Obesidade grau 1"
        } else if (imc < 41) {
            classification = "Obesidade grau 2"
        } else {
            classification = "Obesidade grau 3"
        }


        resultadoIMC.innerHTML = "O seu IMC é: " + imc;
        resultadoGRAU.innerHTML = classification
    } else {
        resultado.innerHTML = "preencha os campos"
    }
};