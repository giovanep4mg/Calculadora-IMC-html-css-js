//variáveis
const resultadoIMC = document.querySelector("#resultadoIMC")
const resultadoGRAU = document.querySelector("#resultadoGRAU")
const altura = document.querySelector("#altura")
const peso = document.querySelector("#peso")


//função
const calcIMC = () => {
    // faz uma verificação, se os campos estão vazios ou não 
    if (altura.value != "" && peso.value != "") {

        //cria uma variável "imc" que vai receber a conta para saber qual é o IMC
        const imc = (peso.value / (altura.value * altura.value).toFixed());

        //variável para guarda o resultado do "if"
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

        // mostra o "imc" do usuário
        resultadoIMC.innerHTML = "O seu IMC é: " + imc;
        resultadoGRAU.innerHTML = classification
    } else {
        resultado.innerHTML = "preencha os campos"
    }
};