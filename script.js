
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
}