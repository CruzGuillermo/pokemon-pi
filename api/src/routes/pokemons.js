const express = require("express");
const app = express.Router();
const InformacionPoke = require("../Controllers/InformacionPoke");
const { Pokemon, Type } = require("../db");

app.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const pokemons = await InformacionPoke();
    if (name) {
      const PokemonsRes = pokemons.filter(
        (pokename) => pokename.name.toLowerCase() === name.toLowerCase()
      );
      if (PokemonsRes.length > 0) {
        return res.send(PokemonsRes);
      } else {
        return res.send([]);
      }
    }

    let pokemones = pokemons.map((poke) => {
      return {
        id: poke.id,
        name: poke.name,
        img: poke.img,
        attack: poke.attack,
        defense: poke.defense,
        speed: poke.speed,
        weight: poke.weight,
        height: poke.height,
        types: poke.types,
        database: poke.database || false,
      };
    });
    return res.send(pokemones);
  } catch (e) {
    console.log(e);
  }
});

app.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;
  try {
    const pokemons = await InformacionPoke();
    const PokeXid = pokemons.filter(
      (poke) => poke.id.toString() === idPokemon.toString()
    );
    if (PokeXid.length > 0) {
      res.send(PokeXid);
    } else {
      res.send([]);
    }
  } catch (e) {
    console.log(e);
  }
});

let id = 41;
app.post("/", async (req, res) => {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    weight,
    height,
    img,
    types,
    database,
  } = req.body;
  try {
    if (name) {
      let newPokemon = await Pokemon.create({
        id: id++,
        name,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,
        img,
        database,
      });

      //los tipos solo pueden coincidir con los guardadas en db, por lo que le pido a mi modelo Type
      //que encuentre todos aquellos donde el name sea igual a lo pasado por body
      let newType = await Type.findAll({
        where: {
          name: types,
        },
      });

      //hago la relacion entre ambas tablas
      newPokemon.addType(newType);
      return res.send(newPokemon);
    } else {
      return res.status(404).send("Pokemon nombre requerido");
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = app;
