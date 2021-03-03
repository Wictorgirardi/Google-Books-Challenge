import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "material-ui-search-bar";

describe("header", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <SearchBar placeholder="Pesquise seus livros favoritos!" />
    );
    expect(baseElement).toBeTruthy();
  });
});
