import { Header } from "components";
import React from "react";
import SearchBar from "material-ui-search-bar";
import BookCard from "components/BookCard";
import { Grid, Fade } from "@material-ui/core/";
import axios from "axios";
import { GoogleKey } from "constants/ApiKey";

const Home = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [result, setResult] = React.useState([]);

  function handleSubmit() {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchValue +
          "&key=" +
          GoogleKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <>
      <Header
        searchBar={
          <SearchBar
            style={{ width: "50%", display: "inline-flex", marginTop: "10px" }}
            placeholder="Pesquise seus livros favoritos!"
            value={searchValue}
            onChange={(newValue) => setSearchValue(newValue)}
            onRequestSearch={() => handleSubmit()}
          />
        }
      ></Header>
      <Grid p={2} container direction="row">
        {result.map((book) => (
          <BookCard></BookCard>
        ))}
      </Grid>
    </>
  );
};

export default Home;
