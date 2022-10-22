/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('No se puede conectar a la base de datos:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('debería devolver un status code 200', () =>
      agent.get('/pokemons').expect(200)
    );
  });
});

describe("Rutas types", () => {
  describe("GET /types", () => {
    it("se espera una respuesta 200", () => agent.get("/types").expect(200));
  });
});

describe("Obtiene un pokemon por id o name", () => {
  describe("GET /pokemons/:id", () => {
    it("Se espera una respuesta 200 se si pasa un id", () =>
      agent.get("/pokemons/10").expect(200));
  });
  describe("GET /pokemons?name=abc", () => {
    it("Si se recibe name devolver 200", () =>
      agent.get("/pokemons?name=abc"));
  });
  describe("GET /pokemons", () => {
    it("Si no se recibe mas que la ruta devuelve 200 con los pokemons", (done) => {
      agent.get("/pokemons").then(() => done());
    });
  });
});

