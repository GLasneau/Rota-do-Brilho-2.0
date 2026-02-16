const WHATSAPP_NUMBER = "5524981374226"; 

const products = [
    { 
        id: 1, 
        name: "Vonixx V-Floc 1.5L", 
        price: 59.90, 
        category: "lavagem", 
        brand: "vonixx", 
        image: "static/Imagens/v_floc.jpeg", 
        desc: "Shampoo neutro super concentrado.",
        details: "O V-Floc é um lava autos de alta performance e pH neutro. Sua fórmula contém agentes condicionadores e tensoativos especiais.",
        tip: "Diluição 1:400. Use o método de dois baldes."
    },
    { 
        id: 2, 
        name: "Vonixx Izer 500ml", 
        price: 49.90, 
        category: "lavagem", 
        brand: "vonixx",
        image: "static/Imagens/vonixx_izer.jpeg", 
        desc: "Descontaminante ferroso. Remove pó de freio.",
        details: "O Izer remove fuligem de freio oxidado em rodas. Transforma o pó de ferro em líquido roxo.",
        tip: "Aplique na roda fria e espere agir por 2 minutos."
    },
    { 
        id: 4, 
        name: "Vonixx V-Mol 1.5L", 
        price: 45.90, 
        category: "lavagem", 
        brand: "vonixx",
        image: "static/Imagens/vonixx_v_mol.jpeg", 
        desc: "Shampoo desincrustante para barro.",
        details: "Lava autos desincrustante ideal para remoção de barro e óleo.",
        tip: "Ideal para pré-lavagem de carros de roça."
    },
    { 
        id: 5, 
        name: "Vonixx Blend Spray", 
        price: 79.90, 
        category: "protecao", 
        brand: "vonixx",
        image: "static/Imagens/vonixx_blend.jpeg", 
        desc: "Cera de Carnaúba + Sílica (SiO2).",
        details: "Une o brilho quente da carnaúba com a resistência cerâmica do SiO2.",
        tip: "Agite bem antes de usar."
    },
    { 
        id: 7, 
        name: "Vonixx Restaurax", 
        price: 42.90, 
        category: "protecao", 
        brand: "vonixx",
        image: "static/Imagens/vonixx_restaurax.jpeg", 
        desc: "Restaura plásticos externos.",
        details: "Renova e restaura superfícies plásticas como para-choques e painéis.",
        tip: "Não aplique em painel interno (fica oleoso)."
    },
    { 
        id: 8, 
        name: "Vonixx Sintra Fast", 
        price: 39.90, 
        category: "interna", 
        brand: "vonixx",
        image: "static/Imagens/vonixx_sintra.jpeg", 
        desc: "Bactericida para painéis e bancos.",
        details: "Flotador universal bactericida, limpa e elimina germes.",
        tip: "Deixa cheiro de carro novo."
    },
    { 
        id: 9, 
        name: "Vonixx Hidracouro", 
        price: 34.90, 
        category: "interna", 
        brand: "vonixx",
        image: "static/Imagens/vonixx_hidracouro.jpeg", 
        desc: "Hidratante de couro.",
        details: "Hidrata e protege bancos de couro evitando rachaduras.",
        tip: "Limpe o couro antes com Sintra."
    },

    { 
        id: 3, 
        name: "Protelim Multi 200 (1L)", 
        price: 39.90, 
        category: "lavagem", 
        brand: "protelim",
        image: "static/Imagens/protelim_multi_200.jpeg", 
        desc: "APC Multiuso Concentrado.",
        details: "Limpador multiuso para limpeza pesada de rodas, motores e chassis.",
        tip: "Dilua 1:10 para rodas, 1:40 para interiores."
    },

    { 
        id: 6, 
        name: "Cadillac Hard Wax", 
        price: 99.90, 
        category: "protecao", 
        brand: "cadillac",
        image: "static/Imagens/cadilac_hard_wax.jpeg", 
        desc: "Cera em pasta nobre.",
        details: "Cera híbrida de Carnaúba + Cera de abelha. Brilho profundo.",
        tip: "Aplique camada fina e remova após 5 minutos."
    },

    { 
        id: 10, 
        name: "Luva Microfibra L3D", 
        price: 29.90, 
        category: "acessorios", 
        brand: "l3d",
        image: "static/Imagens/luva_de_microfibra.jpeg", 
        desc: "Luva de alta densidade.",
        details: "Luva com tentáculos que retêm a sujeira e evitam riscos.",
        tip: "Lave apenas com sabão neutro."
    },
    { 
        id: 11, 
        name: "Toalha de Secagem Vonixx", 
        price: 59.90, 
        category: "acessorios", 
        brand: "vonixx",
        image: "static/Imagens/toalha_secagem.jpeg", 
        desc: "Toalha mágica de alta absorção.",
        details: "Seca um veículo médio inteiro sem precisar torcer.",
        tip: "Apenas arraste sobre a lataria."
    },
    { 
        id: 12, 
        name: "Kit Pincéis Vonixx", 
        price: 45.90, 
        category: "acessorios", 
        brand: "vonixx",
        image: "static/Imagens/kit_pinceis.jpeg", 
        desc: "Kit com 5 tamanhos.",
        details: "Cerdas macias sintéticas para detalhamento.",
        tip: "Use tamanhos diferentes para grade e painel."
    },

    { 
        id: 13, 
        name: "Kit Lavagem Básica", 
        price: 85.00, 
        category: "kits", 
        brand: "rota", 
        image: "static/Imagens/kit_lavagem_basica.jpeg", 
        desc: "1 V-Floc + 1 Luva Microfibra.",
        details: "Combo essencial para iniciar na estética automotiva.",
        tip: "Ótimo presente."
    },
];

let cart = [];


function renderProducts(filter = 'todos') {
    const container = document.getElementById('products-grid');
    container.innerHTML = ''; 

    const filteredProducts = filter === 'todos' 
        ? products 
        : products.filter(p => p.category === filter || p.brand === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const imgDisplay = `<img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.parentNode.innerHTML='<span style=\'color:#555\'>Sem Imagem</span>';">`;

        card.innerHTML = `
            <div class="card-img-container" onclick="openModal(${product.id})">
                <span class="category-tag">${product.brand.toUpperCase()}</span>
                ${imgDisplay}
            </div>
            <div class="card-info">
                <div class="card-title">${product.name}</div>
                <div class="card-desc">${product.desc}</div>
                
                <button class="details-btn" onclick="openModal(${product.id})">
                    <i class="fas fa-info-circle"></i> Saiba Mais
                </button>

                <div class="price-row" style="margin-top: 15px;">
                    <div class="card-price">R$ ${product.price.toFixed(2)}</div>
                    <button class="add-btn" onclick="addToCart(${product.id}, this)">
                        <i class="fas fa-cart-plus"></i> Add
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    document.querySelectorAll('.filter-btn, .brand-btn').forEach(btn => {
        btn.classList.remove('active');
        const btnText = btn.getAttribute('onclick'); 
        
        if(btnText.includes(`'${filter}'`)) {
            btn.classList.add('active');
        }
    });
}

function finalizeOrder() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let message = "*Olá, gostaria de fazer um pedido na Rota do Brilho:*\n\n";
    let total = 0;
    const summary = {};
    cart.forEach(p => {
        if (!summary[p.name]) summary[p.name] = { qtd: 0, price: p.price };
        summary[p.name].qtd += 1;
        total += p.price;
    });

    for (const [name, item] of Object.entries(summary)) {
        message += `- ${item.qtd}x ${name} \n`;
    }

    message += `\n*Valor Total: R$ ${total.toFixed(2)}*`;
    message += `\n\n_Aguardo confirmação._`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function openModal(id) {
    const product = products.find(p => p.id === id);
    if(!product) return;

    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-category').innerText = product.brand.toUpperCase(); 
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-price').innerText = `R$ ${product.price.toFixed(2)}`;
    document.getElementById('modal-desc').innerText = product.details || product.desc;
    document.getElementById('modal-tip').innerText = product.tip || "Consulte o rótulo.";

    const modalBtn = document.getElementById('modal-add-btn');
    modalBtn.onclick = function() { addToCart(product.id, modalBtn); };

    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('product-modal')) {
        closeModal();
    }
}

function filterProducts(filter) {
    renderProducts(filter);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

});
