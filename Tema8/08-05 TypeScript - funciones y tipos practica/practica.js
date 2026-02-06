var hallOfFame = [];
var btn = document.getElementById("btnAdd");
var output = document.getElementById("output");
btn.addEventListener("click", function () {
    var inputName = document.getElementById("playerName");
    var inputScore = document.getElementById("score");
    if (inputName.value && inputScore.value) {
        var nuevaEntrada = [parseInt(inputScore.value), inputName.value];
        hallOfFame.push(nuevaEntrada);
        hallOfFame.sort(function (a, b) { return b[0] - a[0]; });
        inputName.value = "";
        inputScore.value = "";
        renderizarLista();
    }
});
function renderizarLista() {
    output.innerHTML = "";
    var contenido = "<ul>";
    for (var _i = 0, hallOfFame_1 = hallOfFame; _i < hallOfFame_1.length; _i++) {
        var registro = hallOfFame_1[_i];
        contenido += "<li><strong>".concat(registro[0], " pts</strong> - ").concat(registro[1], "</li>");
    }
    contenido += "</ul>";
    output.innerHTML = contenido;
}
