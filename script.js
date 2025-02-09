// Menu Mobile
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Filtro de Motas
const filtroBtns = document.querySelectorAll('.filtro-btn');
const motasGrid = document.querySelector('.motas-grid');

filtroBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filtroBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const categoria = btn.getAttribute('data-categoria');
        filtrarMotas(categoria);
    });
});

function filtrarMotas(categoria) {
    const motas = [
        { img: 'image/publicacao/suzukiltr450amarela.jpg', nome: 'Suzuki Ltr 450', categoria: 'moto4', preco: 12950 },
        { img: 'image/publicacao/bmwgs1250.jpg', nome: 'BMW R 1250 GS', categoria: 'Semi-novas', preco: 17950 },
        { img: 'image/publicacao/yamaharaptor350verde.jpg', nome: 'Yamaha Raptor 350', categoria: 'moto4', preco: 7750 },
        { img: 'image/publicacao/hondaMonkey125.jpg', nome: 'Honda Monkey 125', categoria: 'Semi-novas', preco: 4250 },
        { img: 'image/publicacao/yamahaYzf250.jpg', nome: 'Yamaha yz 250f',categoria: 'Semi-novas', preco: 7250 },
        { img: 'image/publicacao/yamaharaptor350vermelha.jpg', nome: 'Yamaha Raptor 350', categoria: 'moto4', preco: 7950 },
        { img: 'image/publicacao/suzukiltr450branca.jpg', nome: 'Suzuki Ltr 450', categoria: 'moto4', preco: 12950 },
        { img: 'image/publicacao/suzukiLtz400.jpg', nome: 'Suzuki Ltz 400', categoria: 'moto4', preco: 7950 },
        { img: 'image/publicacao/yamahayfz450.PNG', nome: 'Yamaha YFZ 450',categoria: 'moto4', preco: 9950 },
        { img: 'image/publicacao/kawasakiKfx400.jpg', nome: 'Kawasaki Kfx 400', categoria: 'moto4', preco: 7950 },

        

           ];

    motasGrid.innerHTML = ''; // Limpar a grid antes de adicionar os novos elementos       ano: 2020, km: 9000,  <p>Ano: ${mota.ano} | Km: ${mota.km}</p>
    motas.filter(mota => categoria === 'todas' || mota.categoria === categoria).forEach(mota => {
        const motaElement = document.createElement('div');
        motaElement.classList.add('mota');
        motaElement.setAttribute('data-aos', 'fade-up');
        motaElement.innerHTML = `
            <img src="${mota.img}" alt="${mota.nome}">
            <h3>${mota.nome}</h3>
            
            <p class="price">${mota.preco} €</p>
        `;
        motasGrid.appendChild(motaElement);
    });
    
    
    // Re-inicializa AOS para aplicar as animações aos novos elementos
    AOS.refresh();
    
    
}

// JavaScript para o botão "Voltar ao Topo"
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    // Mostrar ou esconder o botão ao rolar a página
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Rolar de volta ao topo quando o botão for clicado
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Adicionar rolagem suave em âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Carregar motas ao iniciar
document.addEventListener('DOMContentLoaded', () => filtrarMotas('todas'));


