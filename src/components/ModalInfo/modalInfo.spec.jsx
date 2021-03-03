import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ModalInfo from "./ModalInfo";
import { screen } from "@testing-library/dom";

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

describe("Modal of Details", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ModalInfo
        title={apiDataMock[0].title}
        publisher={apiDataMock[0].publisher}
        pageCount={apiDataMock[0].pageCount}
        language={apiDataMock[0].language}
        description={apiDataMock[0].description}
        previewLink={apiDataMock[0].previewLink}
        image={apiDataMock[0].image}
      ></ModalInfo>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should the detail modal be closed", () => {
    const { getAllByRole, getByText } = render(
      <ModalInfo
        title={apiDataMock[0].title}
        publisher={apiDataMock[0].publisher}
        pageCount={apiDataMock[0].pageCount}
        language={apiDataMock[0].language}
        description={apiDataMock[0].description}
        previewLink={apiDataMock[0].previewLink}
        image={apiDataMock[0].image}
      ></ModalInfo>
    );

    const modalDescription = screen.queryByText(apiDataMock[0].description);
    expect(modalDescription).not.toBeInTheDocument();
  });

  it("the detail modal should open when ver mais button is clicked", async () => {
    const { getAllByRole, getByText } = render(
      <ModalInfo
        title={apiDataMock[0].title}
        publisher={apiDataMock[0].publisher}
        pageCount={apiDataMock[0].pageCount}
        language={apiDataMock[0].language}
        description={apiDataMock[0].description}
        previewLink={apiDataMock[0].previewLink}
        image={apiDataMock[0].image}
      ></ModalInfo>
    );
    const detailModal = screen.getByText("Ver Mais");
    userEvent.click(detailModal);

    const modalDescription = screen.getByText(apiDataMock[0].description);
    const modalLanguage = screen.getByText(apiDataMock[0].language);
    const modalpublisher = screen.getByText(apiDataMock[0].publisher);

    expect(modalDescription).toBeInTheDocument();
    expect(modalLanguage).toBeInTheDocument();
    expect(modalpublisher).toBeInTheDocument();
  });
  it("the detail modal should close when sair button is clicked", async () => {
    const { getAllByRole, getByText } = render(
      <ModalInfo
        title={apiDataMock[0].title}
        publisher={apiDataMock[0].publisher}
        pageCount={apiDataMock[0].pageCount}
        language={apiDataMock[0].language}
        description={apiDataMock[0].description}
        previewLink={apiDataMock[0].previewLink}
        image={apiDataMock[0].image}
      ></ModalInfo>
    );
    const detailModal = screen.getByText("Ver Mais");
    userEvent.click(detailModal);

    const detailCloseModal = screen.getByText("Sair");
    userEvent.click(detailCloseModal);

    const modalDescription = screen.queryByText(apiDataMock[0].description);
    expect(modalDescription).not.toBeInTheDocument();
  });
});
