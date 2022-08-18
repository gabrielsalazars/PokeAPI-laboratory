let canvas;
let SPRITE_PATH_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
let pokemon = [];
let pokemonContainer = [];
let pokemonActual = null;


function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');

    for (let x = 0; x < 9; x++) {
        encontrarPokemon(x + 1)
    }
}

function draw() {
    background(50, 200, 200);
    newCursor();
    // showData()
    if (pokemonContainer.length === 9) {
        pokemonContainer.forEach((element, index) => {
            fill(1, 100, 100);
            image(pokemonContainer[index], 100, 100 * index, 120, 120);
            textSize(25)

        })

    }
    if (pokemonActual != null) {
        textFont('Roboto');
        textStyle(BOLD)
        text("Nombre:" + " " +pokemonActual.name, 300, 50);
        text("Altura:" + " " + pokemonActual.height, 300, 90);
        text("Habilidad 1:" + " " + pokemonActual.abilities[0].ability.name, 300, 130);
        text("Habilidad 2:" + " " +pokemonActual.abilities[1].ability.name, 300, 170);
        text("Movimientos:" + " " +pokemonActual.moves[0].move.name, 300, 210);
        text("Movimientos:" + " " +pokemonActual.moves[1].move.name, 300, 250);
        text("Movimientos:" + " " +pokemonActual.moves[2].move.name, 300, 290)

    }


    }
//-------------------------------------------------


function mouseClicked() {
    for (let i = 0; i < 9; i++) {
        if (mouseX > 120 && mouseX < 190 && mouseY > (95 * i) + 60 && mouseY < (95 * i) + 130) {
            pokemonActual = pokemon[i];
            console.log(pokemonActual)
        }

    }

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}




async function encontrarPokemon(id) {
    let data = null;
    const POKEAPI_LIST_URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const query = await fetch(POKEAPI_LIST_URL);
    data = await query.json();
    pokemon.push(data);
    loadImage(data.sprites.front_shiny, image => {
        pokemonContainer.push(image);
    })
    pokemonActual = data;
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}
let x;
let y;

function newButton(x, y) {
    button = createButton('click me');
    button.position(x, y);

}