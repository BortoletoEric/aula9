

let listaFrutas = [
    { avatar: "🍎", nome: "Maçã", cor: "Vermelha" },
    { avatar: "🍌", nome: "Banana", cor: "Amarela" },
    { avatar: "🍇", nome: "Uva", cor: "Roxa" }
]

for(let i = 0; i < listaFrutas.length; i++) {
    let fruta = listaFrutas[i]
    insereLinha(fruta.avatar, fruta.nome, fruta.cor)
}

    function acaoAdicionar() {
        let avatar = document.getElementById("caixaAvatar").value
        let nome = document.getElementById("caixaNome").value
        let cor = document.getElementById("caixaCor").value

        // Validate inputs
        if (!avatar || !nome || !cor) {
            alert("Por favor, preencha todos os campos antes de inserir.");
            return;
        }

        insereLinha(avatar, nome, cor)
        console.log("Avatar: ", avatar, " Nome: ", nome, " Cor: ", cor)
    }

    function insereLinha(avatar, nome, cor) {
        let elem = document.getElementById("lista")
        let htmlString = `
            <tr>
                <td>`+avatar+`</td>
                <td>`+nome+`</td>
                <td>`+cor+`</td>
            </tr>
        `

        elem.insertAdjacentHTML("beforeend", htmlString)
    }

    function calcular() {

        let elem = document.getElementById("caixaSalario")
        // console.log("Elem: ",elem);
        let salario = parseFloat(elem.value)

        // if(salario < 2000) {
        //     salario = salario * 1.5
        // }
        // if(salario >= 2000 && salario < 5000) {
        //     salario = salario * 1.2
        // }
        // if(salario >= 5000) {
        //     salario = salario * 1.1
        // }

        if(salario < 2000) {
            salario = salario * 1.5
        } else {
            if(salario < 5000) {
                salario = salario * 1.2
            } else {
                salario = salario * 1.1
            }
        }

        console.log("Seu novo Salário é ",salario)
        let elem2 = document.getElementById("resposta") 
        elem2.innerText = salario

    }