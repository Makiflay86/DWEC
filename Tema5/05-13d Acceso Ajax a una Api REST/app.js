document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("personajes");

    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(personaje => {
                const li = document.createElement("li");
                li.textContent = personaje.name;
                lista.appendChild(li);

                const img = document.createElement("img");
                img.setAttribute("src", personaje.image);
                img.setAttribute("alt", personaje.name);
                img.setAttribute("width", "100");
                lista.appendChild(img);
                
                const br1 = document.createElement("br");
                lista.appendChild(br1);

                const br2 = document.createElement("br");
                lista.appendChild(br2);
            });
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
});
