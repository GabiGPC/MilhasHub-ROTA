function showTab(tab){
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
    document.getElementById(tab).classList.add('active')
}

// SALDO
function calcularSaldo(){
    let programas = ['azul','latam','smiles','livelo','esfera','c6']
    let total = 0

    programas.forEach(p => {
        let val = parseFloat(document.getElementById(p).value) || 0
        total += val
    })

    let milheiros = total / 1000
    let valor = milheiros * 15

    resultadoSaldo.innerHTML =
        `Total: ${milheiros.toFixed(1)} milheiros (~R$ ${valor.toFixed(0)})`

    insightSaldo.innerHTML =
        valor > 3000 ? "🔥 Alto potencial de uso"
        : valor > 1000 ? "⚠️ Valor relevante parado"
        : "📈 Continue acumulando"

    recomendacaoSaldo.innerHTML =
        milheiros > 50
        ? "👉 Avalie emitir ou vender"
        : "👉 Foque em acumular + bônus"

    atualizarInsightGlobal(valor)
}

// CPM
function calcularCPM(){
    let valor = parseFloat(valorPago.value)
    let pontos = parseFloat(pontosInput = document.getElementById('pontos').value)
    let bonus = parseFloat(document.getElementById('bonus').value)

    let total = pontos * (1 + bonus/100)
    let cpm = valor / (total/1000)

    resultadoCPM.innerHTML = `CPM: R$ ${cpm.toFixed(2)}`

    vereditoCPM.innerHTML =
        cpm < 15 ? "🟢 Excelente"
        : cpm < 20 ? "🟡 Ok"
        : "🔴 Caro"
}

// EMISSÃO
function calcularEmissao(){
    let milheiros = parseFloat(document.getElementById('milheiros').value)
    let cpm = parseFloat(document.getElementById('cpmUso').value)
    let dinheiro = parseFloat(document.getElementById('precoDinheiro').value)

    let custo = milheiros * cpm

    resultadoEmissao.innerHTML = `Custo: R$ ${custo.toFixed(0)}`

    vereditoEmissao.innerHTML =
        custo < dinheiro ? "🟢 Emitir com milhas"
        : "🔴 Pagar em dinheiro"
}

// INSIGHT GLOBAL
function atualizarInsightGlobal(valor){
    globalInsight.innerHTML =
        valor > 5000 ? "🔥 Você está com alto valor acumulado"
        : valor > 1000 ? "⚠️ Você já tem dinheiro parado"
        : "📈 Comece a acumular pontos"
}
