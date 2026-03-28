function showTab(e, tab){
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'))

    document.getElementById(tab).classList.add('active')
    e.target.classList.add('active')
}

// SALDO
function calcularSaldo(){
    let ids = ['azul','latam','smiles','livelo','esfera','c6']
    let total = 0

    ids.forEach(id=>{
        total += parseFloat(document.getElementById(id).value) || 0
    })

    let milheiros = total/1000
    let valor = milheiros * 15

    resumoPrincipal.innerHTML =
        `${milheiros.toFixed(0)} milheiros • ~R$ ${valor.toFixed(0)}`

    insightSaldo.innerHTML =
        valor > 3000 ? "🔥 Alto potencial"
        : valor > 1000 ? "⚠️ Valor relevante parado"
        : "📈 Continue acumulando"

    recomendacaoSaldo.innerHTML =
        milheiros > 50
        ? "👉 Avalie emitir ou vender"
        : "👉 Busque bônus de transferência"
}

// CPM
function calcularCPM(){
    let valor = parseFloat(valorPago.value)
    let pontos = parseFloat(pontos.value)
    let bonus = parseFloat(bonus.value)

    let total = pontos * (1 + bonus/100)
    let cpm = valor / (total/1000)

    resultadoCPM.innerHTML = `CPM: R$ ${cpm.toFixed(2)}`

    vereditoCPM.innerHTML =
        cpm < 15 ? "🟢 Excelente compra"
        : cpm < 20 ? "🟡 Aceitável"
        : "🔴 Evite"
}

// EMISSÃO
function calcularEmissao(){
    let milheiros = parseFloat(milheiros.value)
    let cpm = parseFloat(cpmUso.value)
    let dinheiro = parseFloat(precoDinheiro.value)

    let custo = milheiros * cpm

    resultadoEmissao.innerHTML = `Custo: R$ ${custo.toFixed(0)}`

    vereditoEmissao.innerHTML =
        custo < dinheiro ? "🟢 Emitir com milhas"
        : "🔴 Melhor pagar em dinheiro"
}
