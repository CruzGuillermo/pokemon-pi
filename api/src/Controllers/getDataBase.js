const { Pokemon, Type } = require("../db");

const getDataBase = async () => {
  try {
    return await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: [],
      },
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = getDataBase;