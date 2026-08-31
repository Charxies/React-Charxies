
async function obtenerPokes() {
    let misPokes = ["304", "306", "92", "386", "644", "302"]
    const pokesOut = [];
    for (let i = 0; i <6; i++){
        console.log("pokemon id = ", misPokes[i])
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${misPokes[i]}`);
        const data = await response.json();

        pokesOut.push({
            id: misPokes[i],
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            types: data.types.map(t => t.type.name).join(", "),
            weight: data.weight,
        });
    }
    console.log('pokes fetcheados:', pokesOut);
    return pokesOut;
}

console.log(obtenerPokes());

function pintarPokes(pokesOut) {
    console.log("Pintando pokemones:", pokesOut);
    let tarjetasHTML = "";
    console.log("Tarjetas HTML:", tarjetasHTML);
    pokesOut.forEach(poke => {
        tarjetasHTML += `
        <div class="card">
        
            <img src="${poke.image}" alt="${poke.name}">
            <h3>${poke.name}</h3>
            <h4>Id: ${poke.id}</h4>
            <p class="types">Tipo: ${poke.types}</p>
            <p class="weight">Peso?: ${poke.weight}</p>
        </div>
        `;
    });
    document.getElementById("main-container").innerHTML = tarjetasHTML;
}

obtenerPokes().then(pintarPokes);