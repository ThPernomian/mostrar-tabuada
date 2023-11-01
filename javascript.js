let inTabuada = document.getElementById("inTabuada")
let outTabuada = document.getElementById("outTabuada")
let btn = document.getElementById("btn")

function tabuada(){
    let numero = Number(inTabuada.value)

    //valida o número passado
    if(numero == 0 || isNaN(numero)){
        alert("Informe um número válido!")
        inTabuada.focus()
        return 
    }
    // cria uma variável do tipo String, que irá concatenar a resposta
    let resposta = ""

    for(let i = 1; i <= 10; i++){
        // a variável resposta vai acumulando os novos conteúdos
        resposta = resposta + numero + " x " + i + " = " + numero * i + "\n"
}
    outTabuada.innerText = resposta
}

btn.addEventListener("click", tabuada)
