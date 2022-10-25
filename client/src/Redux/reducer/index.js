const initialState = {
  pokemons: [],
  copyPokemons: [],
  types: [],
  detail: [],
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TYPE":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        copyPokemons: action.payload,
        loading: false,
      };
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "GET_ALL_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        detail: action.payload,
        loading: false,
      };
    case "GET_POKEMON_BY_NAME":
      return {
        ...state,
        copyPokemons: action.payload,
        loading: false,
      };

    case "ORDER_BY_NAME":
      let sortedArray =
        action.payload === "asc_alf"
          ? state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        copyPokemons: sortedArray,
      };
    case "ORDER_BY_STRENGTH":
      let orderedArray =
        action.payload === "asc_str"
          ? state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              } else {
                return 0;
              }
            })
          : state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        copyPokemons: orderedArray,
      };

    case "FILTER_BY_CREATION":
      const pokemonCopyArray = state.pokemons;
      const filteredCreation =
        action.payload === "database"
          ? pokemonCopyArray.filter((pokemon) => pokemon.database)
          : pokemonCopyArray.filter((pokemon) => !pokemon.database);
      return {
        ...state,
        copyPokemons:
          action.payload === "all" ? state.pokemons : filteredCreation,
      };




    case "FILTER_BY_TYPE":
      const allPokemons = state.pokemons;
      const filteredArray =
        action.payload === "all"
          ? allPokemons
          : allPokemons.filter((pokemon) => {
              if (!pokemon.database) {
                return pokemon.types.find((type) => type === action.payload);
              } else {
                return pokemon.types.find((type) => type.name === action.payload);
              }
            });
      return {
        ...state,
        copyPokemons: filteredArray,
      };




    case "POST_POKEMON":
      return {
        ...state,
      };

    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
