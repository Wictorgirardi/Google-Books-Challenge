import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";
import BookCard from "./bookCard";
import userEvent from "@testing-library/user-event";

const apiDataMock = [
  {
    title: "Titulo teste",
    publisher: "Editora teste",
    pageCount: "10",
    language: "pt",
    description: "Descrição teste",
    previewLink: "www.google.com.br",
    image: "https://www.w3schools.com/images/w3schools_green.jpg",
  },
];

describe("bookCard", () => {
  it("should render successfully", () => {
    console.log(apiDataMock[0], "mock data");
    const { baseElement } = render(
      <BookCard
        title={apiDataMock[0].title}
        publisher={apiDataMock[0].publisher}
        pageCount={apiDataMock[0].pageCount}
        language={apiDataMock[0].language}
        description={apiDataMock[0].description}
        previewLink={apiDataMock[0].previewLink}
        image={apiDataMock[0].image}
      ></BookCard>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should have a title", () => {
    console.log(apiDataMock[0], "mock data");
    const { baseElement } = render(
      <BookCard
        title={apiDataMock[0].title}
        publisher={apiDataMock[0].publisher}
        pageCount={apiDataMock[0].pageCount}
        language={apiDataMock[0].language}
        description={apiDataMock[0].description}
        previewLink={apiDataMock[0].previewLink}
        image={apiDataMock[0].image}
      ></BookCard>
    );
    const cardTitle = screen.queryByText(apiDataMock[0].title);
    expect(cardTitle).toBeInTheDocument();
  });

  it("should have an image", () => {
    console.log(apiDataMock[0], "mock data");
    const { baseElement } = render(
      <BookCard
        title={apiDataMock[0].title}
        publisher={apiDataMock[0].publisher}
        pageCount={apiDataMock[0].pageCount}
        language={apiDataMock[0].language}
        description={apiDataMock[0].description}
        previewLink={apiDataMock[0].previewLink}
        image={apiDataMock[0].image}
      ></BookCard>
    );
    const cardImage = screen.getByTitle("image cover");
    expect(cardImage).toBeInTheDocument();
  });
});
