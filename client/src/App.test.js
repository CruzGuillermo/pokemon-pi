import {
  filterByType,
  filterByCreation,
  orderByName,
  orderByStrenght,
} from "../src/Redux/actions/index";

describe("Reducer-Actions Tests:", () => {
  it("Debería devolver una acción con accesorios tipo FILTER_BY_TYPE & payload, el valor se envía como argumento:", () => {
    expect(filterByType("flying")).toEqual({
      type: "FILTER_BY_TYPE",
      payload: "flying",
    });
  });

  it('Debería devolver una acción con el tipo de accesorios "FILTER_BY_CREATION" y carga útil, el valor se envía como argumento:', () => {
    expect(filterByCreation("created")).toEqual({
      type: "FILTER_BY_CREATION",
      payload: "created",
    });
  });

  it('Debería devolver una acción con el tipo de accesorios "ORDER_BY_STRENGTH" y carga útil, el valor se envía como argumento:', () => {
    expect(orderByStrenght("asc")).toEqual({
      type: "ORDER_BY_STRENGTH",
      payload: "asc",
    });
  });

  it('Debería devolver una acción con el tipo de accesorios "ORDER_BY_NAME" y carga útil, el valor se envía como argumento:', () => {
    expect(orderByName("asc")).toEqual({
      type: "ORDER_BY_NAME",
      payload: "asc",
    });
  });
});
