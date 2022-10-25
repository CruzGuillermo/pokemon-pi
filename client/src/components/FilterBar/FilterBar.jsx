import React from "react";
import s from "./FilterBar.module.css";

export default function FilterBar({
  allTypes,
  handleSort,
  handleOrderByStr,
  handleFilterType,
  handleCreation,
}) {
  return (
    <div className={s.filter}>
      <div className={s.filtrado}>
        <select onChange={(e) => handleSort(e)}>
          <option disabled>Alfabetico</option>
          <option value="asc_alf">A a Z</option>
          <option value="des_alf">Z a A</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleOrderByStr(e)}>
          <option disabled>Fuerza</option>
          <option value="asc_str">Alta a Baja</option>
          <option value="des_str">Baja a Alta</option>
        </select>
      </div>
      <div>
        <select onChange={(e) => handleFilterType(e)}>
          <option disabled>Tipos</option>
          <option value="all">Todos los Tipos</option>
          {allTypes &&
            allTypes.map((t) => (
              <option value={t.name} key={t.name}>
                {t.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <select onChange={(e) => handleCreation(e)}>
          <option disabled>Creation</option>
          <option value="all">Todos Pokemons</option>
          <option value="database">Base de Datos</option>
          <option value="api">Aplicacion</option>
        </select>
      </div>
    </div>
  );
}