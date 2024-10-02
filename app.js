document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        console.log(card);

        const targetPage = this.getAttribute('data-target');
        window.location.href = targetPage; // Agora vai para as rotas sem .html
    });
});