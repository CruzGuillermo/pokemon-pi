const { Pokemon, Type, conn } = require("../../src/db");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("No se puede conectar a la base de datos:", err);
    })
  );

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("debería arrojar un error si el nombre es null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("Requiere un nombre válido")))
          .catch(() => done());
      });
      it("debería funcionar cuando es un nombre válido", () => {
        Pokemon.create({ name: "pikachu" });
      });
    });
  });
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("altura", () => {
      it("debería arrojar un error si la altura es null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("Requiere una altura válida")))
          .catch(() => done());
      });
      it("debería funcionar cuando es una altura válida", () => {
        Pokemon.create({ height: 3 });
      });
    });
  });

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("peso", () => {
      it("debería arrojar un error si el peso es null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("Requiere un peso válido")))
          .catch(() => done());
      });
      it("debería funcionar cuando es un peso válido", () => {
        Pokemon.create({ weight: 10 });
      });
    });
  });

  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("Imagen", () => {
      it("debería arrojar un error si la imagen es null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("Requiere una imagen de enlace válida")))
          .catch(() => done());
      });
      it("debería funcionar cuando es una imagen de enlace válida", () => {
        Pokemon.create({
          image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        });
      });
    });
  });
});


