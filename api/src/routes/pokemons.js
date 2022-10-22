const express = require("express");
const app = express.Router();
const InformacionPoke = require("../Controllers/InformacionPoke");
const { Pokemon, Type } = require("../db");

app.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const pokemons = await InformacionPoke();
    if (name) {
      const foundPokemon = pokemons.filter( (pokename) => pokename.name.toLowerCase() === name.toLowerCase()
      );
      if (foundPokemon.length > 0) {
        return res.send(foundPokemon);
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
        createdInDb: poke.createdInDb || false,
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
    const BucarPokeXid = pokemons.filter((poke) => poke.id.toString() === idPokemon.toString()
    );
    if (BucarPokeXid.length > 0) {
      res.send(BucarPokeXid);
    } else {
      res.send([]);
    }
  } catch (e) {
    console.log(e);
  }
});

let id = 41
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
    createdInDb,
  } = req.body;
  try {
    if (name) {
      let newPokemon = await Pokemon.create({
       id : id++,
        name,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,
        img,
        createdInDb,
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