const axios = require("axios");

const getApi = async () => {
let PokemonsApi = [];
await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
.then(async (response) => {
    let ResultApi = response.data.results;
    let arrayPromises = [];
    ResultApi.map((p) => arrayPromises.push(axios.get(p.url)));   
    await Promise.all(arrayPromises)
    .then((pokemons) => {
        PokemonsApi = pokemons.map((poke) => {
            return {
                id: poke.data.id,
                name: poke.data.name,
                img: poke.data.sprites["other"]["dream_world"].front_default,
                hp: poke.data.stats[0].base_stat,
                attack: poke.data.stats[1].base_stat,
                defense: poke.data.stats[2].base_stat,
                speed: poke.data.stats[3].base_stat,
                weight: poke.data.height,
                height: poke.data.weight,
                types: poke.data.types.map((tipo) => {
                    return tipo.type.name
                })
            };   
        }); 
    }) 
    .catch((error) => {
        return error;
    });

})
.catch((error) => {
    return error;
});
return PokemonsApi;
};

module.exports = getApi;