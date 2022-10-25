import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import {
  filterByType,
  getAllPokemons,
  getAllTypes,
  orderByName,
  orderByStrenght,
  filterByCreation,
} from "../../Redux/actions/index";
import LogoPoke from "./LogoPoke.png";
import s from "./Home.module.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import NotFound from "../NotFound/NotFound";
import FilterBar from "../FilterBar/FilterBar";

export default function Home() {
  //estados globales
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.copyPokemons);
  const allTypes = useSelector((state) => state.types);
  const loading = useSelector((state) => state.loading);

  //estado local para ordenamiento alfabetico
  const [order, setOrder] = useState("");
  console.log(order);

  //estados locales para paginado

 // ----------> estado local para una pagina <-------------------
const [currentPage, setCurrentPage] = useState(1);

// ----------> estado local para una 12 pokemons <-------------------
const [pokemonsPerPage] = useState(12);

 
 
  const indexOfLastPost = currentPage * pokemonsPerPage; //1*12=12    3*12=36
  // currentPage = 1 pagina 
  // pokemonsPerPage = 12 pokemons
  // Desde el indice 0 toma hasta el indice 12
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage; //12-12=0    36-12=24

  
  const currentPokemons = allPokemons.slice(
    indexOfFirstPost,
    indexOfLastPost
  ); /*toma desde el indice
  0 to 12..... o cuando se modifique el setCurrentPage ej 3 desde 24 a 36*/

  function paginado(pageNumber) {
    setCurrentPage(pageNumber);
  }

  //dispatch para carga de pokemons y tipos
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch]);

  //funciones de ordenamiento y filtrado
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(
      `Ordenado ${e.target.value}`
    ); /*necesario para que el renderizado ocurra, estado local que
     inicia vacio y se completa al ejecutar la funcion*/
  }

  function handleOrderByStr(e) {
    e.preventDefault();
    dispatch(orderByStrenght(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleFilterType(e) {
    e.preventDefault();
    dispatch(filterByType(e.target.value));
  }

  function handleCreation(e) {
    e.preventDefault();
    dispatch(filterByCreation(e.target.value));
  }

  return (
    <div className={s.contenedorPadre}>
      <header className={s.header}>
        <div className={s.title}>
          <Link to={"/home"}>
            <img src={LogoPoke} alt="Pokemon logo" className={s.logo} />
          </Link>
          <div className={s.functional}>
            <div className={s.filters}>
              <FilterBar
                allTypes={allTypes}
                handleSort={handleSort}
                handleOrderByStr={handleOrderByStr}
                handleFilterType={handleFilterType}
                handleCreation={handleCreation}
              />
            </div>
          </div>
          <div>
            <Link to="/create" className={s.button}>
              Crear Pokemon
            </Link>
          </div>
        </div>

        <div className={s.search}>
          <SearchBar />
        </div>
      </header>
      <div className={s.paginado}>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons}
          paginado={paginado}
        />
      </div>
      <main className={s.main}>
        <div className={s.cards}>
          {loading ? (
            <LoadingPage />
          ) : currentPokemons.length > 0 ? (
            currentPokemons.map((poke) => (
              <Card
                name={poke.name}
                types={poke.types}
                img={poke.img}
                key={poke.id}
                id={poke.id}
                createdInDb={poke.createdInDb}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
        <div className={s.paginado}>
          <Paginado
            pokemonsPerPage={pokemonsPerPage}
            allPokemons={allPokemons}
            paginado={paginado}
          />
        </div>
      </main>
    </div>
  );
}
