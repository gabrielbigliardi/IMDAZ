
const li = document.getElementsByTagName('li')

function clicando(e) {
    // e.preventDefault()
    console.log(e.target);

    // setTimeout(() => {

    // })
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    console.log(document.querySelectorAll('.navLink'))
}

function scrollNClose(e) {

    e.preventDefault();

    const targetId = e.target.getAttribute('id');

    const targetElement = document.querySelector(`section#${targetId}`);

    closeNav()

    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
    })


}



document.querySelectorAll('.navLink').forEach(anchor => {
    console.log(anchor);

    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o ID da seção de destino
        const targetElement = document.querySelector(targetId); // Encontra o elemento alvo com base no ID

        window.scrollTo({
            top: targetElement.offsetTop, // Rolagem até a posição da seção
            behavior: 'smooth' // Animação suave na rolagem
        });

        closeNav();
    });
});


// console.log(document.querySelectorAll('a.navLink')[0])
// .forEach(anchor => {
// console.log(anchor)
// anchor.addEventListener('click', function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute('href');
//     const targetElement = document.querySelector(targetId);

//     window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: 'smooth'
//     });
// });
// });