import { Header } from "components";
import React from "react";
import SearchBar from "material-ui-search-bar";
import BookCard from "components/BookCard";
import { Grid } from "@material-ui/core/";
import axios from "axios";
import { GoogleKey } from "constants/ApiKey";
import Pagination from "@material-ui/lab/Pagination";

const Home = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [currentPage, setcurrentPage] = React.useState(1);

  const handleChange = (event, value) => {
    setcurrentPage(value);
  };

  React.useEffect(() => {
    handleSubmit(currentPage);
  }, [currentPage]);

  function handleSubmit(page) {
    if (page !== 1) {
      page = page * 10;
    }
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchValue +
          "&key=" +
          GoogleKey +
          "&startIndex=" +
          page +
          "&maxResults=12"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }

  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <Header
        searchBar={
          <SearchBar
            style={{ width: "50%", display: "inline-flex", marginTop: "10px" }}
            placeholder="Pesquise seus livros favoritos!"
            value={searchValue}
            onChange={(newValue) => setSearchValue(newValue)}
            onRequestSearch={() => handleSubmit(currentPage)}
          />
        }
      ></Header>
      <Grid container direction="row" alignItems="center" justify="center">
        {result.map((book) => (
          <BookCard
            title={book.volumeInfo.title}
            image={
              book.volumeInfo.imageLinks !== undefined
                ? book.volumeInfo.imageLinks.thumbnail
                : ""
            }
          ></BookCard>
        ))}
      </Grid>
      {result.length !== 0 ? (
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ padding: "20px" }}
        >
          <Pagination
            color="primary"
            count={10}
            page={currentPage}
            onChange={handleChange}
          />
        </Grid>
      ) : null}
    </div>
  );
};

export default Home;
