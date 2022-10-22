const getApi = require("./getApi");
const getDataBase = require("./getDataBase");

const InformacionPoke = async () => {
  try {
    const apiInfo = await getApi();
    const dbInfo = await getDataBase();

    const allInfo = apiInfo.concat(dbInfo);

    return allInfo;
  } catch (e) {
    console.log(e);
  }
};

module.exports = InformacionPoke;