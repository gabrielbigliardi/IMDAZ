/* ------------------------------------------------------- */
/* --------------------- MENU SCROLL --------------------- */
/* ------------------------------------------------------- */
const li = document.getElementsByTagName('li')

function clicando(e) {
    console.log(e.target);
}






/* -------------------------------------------------- */
/* --------------------- SLIDER --------------------- */
/* -------------------------------------------------- */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


/* ------------------------------------------------------------ */
/* --------------------- REDIRECT ESCOLAS --------------------- */
/* ------------------------------------------------------------ */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const targetPage = this.getAttribute('data-target');
        window.location.href = targetPage; // Agora vai para as rotas sem .html
    });
});





/* ---------------------------------------------------------------- */
/* --------------------- MONTAR COLABORADORES --------------------- */
/* ---------------------------------------------------------------- */
fetch('./data/equipe.json')
    .then(res => res.json())
    .then(data => {

        const equipeDiv = document.querySelector('section#equipe');

        const h2Colaboradores = document.createElement('h2');
        h2Colaboradores.innerText = 'Colaboradores';

        const pNossaEquipe = document.createElement('p');
        pNossaEquipe.innerText = 'Conheça nossa equipe'

        const divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'container');

        const divColaboradores = document.createElement('div');
        divColaboradores.setAttribute('class', 'container colaboradores');

        const buttonMaisColaboradores = document.createElement('button');
        buttonMaisColaboradores.innerText = "Ver todos"


        equipeDiv.appendChild(divContainer).appendChild(h2Colaboradores).insertAdjacentElement('afterend', pNossaEquipe).insertAdjacentElement('afterend', divColaboradores).insertAdjacentElement('afterend', buttonMaisColaboradores)

        for (let i = 0; i < 3; i++) {

            const divCard = document.createElement('div');
            divCard.setAttribute('class', 'card');

            const img = document.createElement('img')
            img.setAttribute('src', `${data[i].urlFoto}`);

            const divInfo = document.createElement('div');
            divInfo.setAttribute('class', 'info');

            const h3Nome = document.createElement('h3');
            h3Nome.innerText = `${data[i].nome}`;

            const pCargo = document.createElement('p');
            pCargo.innerHTML = `${data[i].cargo}`;


            divColaboradores.appendChild(divCard).appendChild(img).insertAdjacentElement('afterend', divInfo).appendChild(h3Nome).insertAdjacentElement('afterend', pCargo)

        }

        buttonMaisColaboradores.addEventListener('click', () => {
            window.location.href = "/colaboradores"
        })

    })
    .catch(error => console.log("error nos colaboradores:", error)
    )





/* ------------------------------------------------------ */
/* --------------------- FORMULARIO --------------------- */
/* ------------------------------------------------------ */
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // console.log(nome, email, mensagem)

    const emailData = {
        nome, email, mensagem
    }

    fetch('/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
    }).then(res => {
        if (res.ok) {
            console.log('email enviado com sucesso')
        } else {
            console.log('erro ao enviar o email')
        }

        const button = document.getElementById('button-submit')
        button.innerText = 'Enviado com sucesso ✓'
        button.disabled = true

    }).catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o email.');
    });

})