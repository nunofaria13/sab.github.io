document.addEventListener('DOMContentLoaded', function() {
    const youtubeBtn = document.getElementById('youtubeBtn');
    const instagramBtn = document.getElementById('instagramBtn');
    const facebookBtn = document.getElementById('facebookBtn');

    // Função para adicionar efeito de hover no ícone
    function addHoverEffect(btn) {
        const icon = btn.querySelector('i');
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.1)';
        });

        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
        });
    }

    // Aplicar o efeito de hover para cada botão
    addHoverEffect(youtubeBtn);
    addHoverEffect(instagramBtn);
    addHoverEffect(facebookBtn);
});


    // Efeito de hover na imagem do perfil
    profileImg.addEventListener('mouseover', function() {
        profileImg.style.transform = 'rotate(5deg)';
    });

    profileImg.addEventListener('mouseout', function() {
        profileImg.style.transform = 'rotate(0deg)';
    });

    // Função para fazer a imagem flutuar
    let position = 0;
    let direction = 1;
    const floatSpeed = 0.1; // Velocidade da flutuação
    const floatRange = 10; // Distância da flutuação

    function floatImage() {
        position += direction * floatSpeed;
        floatingImg.style.transform = `translateY(${position}px)`;

        if (position >= floatRange || position <= -floatRange) {
            direction *= -1;
        }

        requestAnimationFrame(floatImage);
    }

    floatImage(); // Inicia a animação




//imagens index

const images = [
    "assets/jogo7.jpg",
    "assets/jogo1.jpg",
    "assets/jogo2.jpg",
    "assets/jogo3.jpg",
    "assets/jogo4.jpg",
    "assets/jogo5.jpg",
    "assets/jogo6.jpg",
    "assets/jogo8.jpg",
    "assets/jogador1.jpg",
    "assets/jogador2.jpg",
    "assets/jogador3.jpg",
    "assets/jogador4.jpg",
    "assets/jogador5.jpg",
    "assets/jogador6.jpg",
    "assets/jogador7.jpg",
    "assets/jogador8.jpg",
    "assets/jogador9.jpg",
    "assets/jogador10.jpg",
    "assets/jogador11.jpg",
    "assets/jogador12.jpg",
    "assets/jogador13.jpg",
    "assets/jogador14.jpg",
    
];

let currentIndex = 0;

function showImage(index) {
    const galleryContainer = document.querySelector('.gallery-container');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    // Limpar o container antes de adicionar a nova imagem
    galleryContainer.innerHTML = '';

    images.forEach((src, i) => {
        const imgElement = document.createElement('div');
        imgElement.classList.add('gallery-item');
        if (i === currentIndex) {
            imgElement.innerHTML = `<img src="${src}" alt="Foto ${i + 1}">`;
        } else {
            imgElement.innerHTML = `<img src="${src}" alt="Foto ${i + 1}" style="opacity: 0;">`;
        }
        galleryContainer.appendChild(imgElement);
    });

    galleryContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Inicializar a galeria com a primeira imagem
document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);
});


      
 


// Variáveis para controle de carregamento de comentários
let comentarios = [];
let comentariosCarregados = 0;
const comentariosPorPagina = 2;

// Função para carregar comentários de um arquivo JSON
function carregarComentarios() {
    fetch('comentario.json')
        .then(response => response.json())
        .then(data => {
            comentarios = data.sort((a, b) => new Date(b.data) - new Date(a.data));
            exibirComentarios();
        })
        .catch(error => console.error('Erro ao carregar comentários:', error));
}

// Função para exibir os comentários
function exibirComentarios() {
    const container = document.getElementById('comentarios');
    const comentariosParaExibir = comentarios.slice(comentariosCarregados, comentariosCarregados + comentariosPorPagina);

    comentariosParaExibir.forEach(comentario => {
        const divComentario = document.createElement('div');
        divComentario.innerHTML = `<strong>${comentario.nome}</strong>: ${comentario.comentario} <em>(${new Date(comentario.data).toLocaleString()})</em>`;
        container.appendChild(divComentario);
    });

    comentariosCarregados += comentariosParaExibir.length;

    if (comentariosCarregados >= comentarios.length) {
        document.getElementById('loadMoreButton').style.display = 'none';
    }
}

// Função para adicionar novo comentário
function adicionarComentario(nome, comentarioTexto) {
    const novoComentario = {
        nome: nome,
        comentario: comentarioTexto,
        data: new Date().toISOString()
    };
    comentarios.unshift(novoComentario);
    exibirNovoComentario(novoComentario);
}

// Função para exibir novo comentário
function exibirNovoComentario(comentario) {
    const container = document.getElementById('comentarios');
    const divComentario = document.createElement('div');
    divComentario.innerHTML = `<strong>${comentario.nome}</strong>: ${comentario.comentario} <em>(${new Date(comentario.data).toLocaleString()})</em>`;
    container.insertBefore(divComentario, container.firstChild);
}

// Evento para carregar mais comentários
document.getElementById('loadMoreButton').addEventListener('click', exibirComentarios);

// Evento para enviar novo comentário
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('name').value;
    const comentarioTexto = document.getElementById('comment').value;

    if (nome && comentarioTexto) {
        adicionarComentario(nome, comentarioTexto);
        document.getElementById('commentForm').reset();
    }
});

// Carrega os comentários quando a página é carregada
carregarComentarios();



  
