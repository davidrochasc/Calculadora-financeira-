function calcTotal() {
  const vi = parseFloat(document.getElementById('inicial1').value);
  const vf = parseFloat(document.getElementById('final1').value);
  if (isNaN(vi) || isNaN(vf) || vi <= 0) {
    document.getElementById('res-total').textContent = 'Valores inválidos';
    return;
  }
  const taxa = ((vf - vi) / vi) * 100;
  document.getElementById('res-total').textContent = `Rentabilidade Total: ${taxa.toFixed(2)}%`;
}

function calcAnual() {
  const vi = parseFloat(document.getElementById('inicial2').value);
  const vf = parseFloat(document.getElementById('final2').value);
  const anos = parseFloat(document.getElementById('anos2').value);
  if (isNaN(vi) || isNaN(vf) || isNaN(anos) || vi <= 0 || anos <= 0) {
    document.getElementById('res-anual').textContent = 'Valores inválidos';
    return;
  }
  const cagr = (Math.pow(vf / vi, 1 / anos) - 1) * 100;
  document.getElementById('res-anual').textContent = `CAGR: ${cagr.toFixed(2)}%`;
}

function calcJurosSimples() {
  const c = parseFloat(document.getElementById('capital_simples').value);
  const i = parseFloat(document.getElementById('taxa_simples').value);
  const t = parseFloat(document.getElementById('anos_simples').value);
  if (isNaN(c) || isNaN(i) || isNaN(t) || c <= 0 || i < 0 || t <= 0) {
    document.getElementById('res-simples').textContent = 'Valores inválidos';
    return;
  }
  const j = c * (i / 100) * t;
  const m = c + j;
  document.getElementById('res-simples').textContent = `Juros: €${j.toFixed(2)} | Montante Final: €${m.toFixed(2)}`;
}

function calcJurosCompostos() {
  const c = parseFloat(document.getElementById('capital_compostos').value);
  const i = parseFloat(document.getElementById('taxa_compostos').value);
  const t = parseFloat(document.getElementById('anos_compostos').value);
  if (isNaN(c) || isNaN(i) || isNaN(t) || c <= 0 || i < 0 || t <= 0) {
    document.getElementById('res-compostos').textContent = 'Valores inválidos';
    return;
  }
  const m = c * Math.pow(1 + (i / 100), t);
  const j = m - c;
  document.getElementById('res-compostos').textContent = `Juros: €${j.toFixed(2)} | Montante Final: €${m.toFixed(2)}`;
}
