function abrirWindow() {
    document.getElementById('modal').style.top = "0";
}
function fecharWindow() {
    document.getElementById('modal').style.top = "-100%";
}

var btn = document.querySelector("#inicio");

    btn.addEventListener("click", function() {
        window.scrollTo(0,0);
    })  