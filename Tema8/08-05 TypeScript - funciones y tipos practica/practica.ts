type Ranking = [number, string];

let hallOfFame: Array<Ranking> = [];

const btn = document.getElementById("btnAdd") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLDivElement;

btn.addEventListener("click", () => {
    const inputName = document.getElementById("playerName") as HTMLInputElement;
    const inputScore = document.getElementById("score") as HTMLInputElement;

    if (inputName.value && inputScore.value) 
    {    
        const nuevaEntrada: Ranking = [parseInt(inputScore.value), inputName.value];

        hallOfFame.push(nuevaEntrada);
        hallOfFame.sort((a, b) => b[0] - a[0]);

        inputName.value = "";
        inputScore.value = "";

        renderizarLista();
    }
});

function renderizarLista(): void {
    output.innerHTML = "";
    let contenido = "<ul>";
    
    for (let registro of hallOfFame) 
    {
        contenido += `<li><strong>${registro[0]} pts</strong> - ${registro[1]}</li>`;
    }
    
    contenido += "</ul>";
    output.innerHTML = contenido;
}
