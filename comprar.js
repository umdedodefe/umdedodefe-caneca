// Estoques
const estoque = {
    marrom: 56,
    creme: 75
};

// Preço da caneca
const preco = 69.90;

// Cupom válido
const cupomValido = "DEVOCIONAL10";
let descontoAtivo = 0;

// Seletores
const corSelect = document.getElementById("cor-select");
const quantidadeInput = document.getElementById("quantidade");
const avisoEstoque = document.getElementById("aviso-estoque");
const subtotalEl = document.getElementById("subtotal");
const totalFinalEl = document.getElementById("total-final");
const cupomInput = document.getElementById("cupom");
const cupomMsg = document.getElementById("cupom-msg");
const aplicarBtn = document.getElementById("aplicar-cupom");
const finalizarBtn = document.getElementById("finalizar");

// Atualizar subtotal e total
function atualizarValores() {
    let quantidade = Number(quantidadeInput.value);
    let cor = corSelect.value;

    if (quantidade > estoque[cor]) {
        avisoEstoque.style.display = "block";
        finalizarBtn.disabled = true;
    } else {
        avisoEstoque.style.display = "none";
        finalizarBtn.disabled = false;
    }

    let subtotal = preco * quantidade;
    let total = subtotal - (subtotal * descontoAtivo);

    subtotalEl.textContent = `Subtotal: R$${subtotal.toFixed(2)}`;
    totalFinalEl.textContent = `R$${total.toFixed(2)}`;
}

quantidadeInput.addEventListener("input", atualizarValores);
corSelect.addEventListener("change", atualizarValores);

// Aplicar cupom
aplicarBtn.addEventListener("click", () => {
    const cupomDigitado = cupomInput.value.trim().toUpperCase();

    if (cupomDigitado === cupomValido) {
        descontoAtivo = 0.10;
        cupomMsg.textContent = "Cupom aplicado! 10% de desconto.";
        cupomMsg.className = "success-message";
    } else {
        descontoAtivo = 0;
        cupomMsg.textContent = "Cupom inválido.";
        cupomMsg.className = "error-message";
    }

    atualizarValores();
});

// Finalizar pedido
finalizarBtn.addEventListener("click", () => {
    alert("Pedido finalizado! Em breve entraremos em contato.");
});

atualizarValores();
