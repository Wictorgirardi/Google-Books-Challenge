import { Header } from "components";
import React from "react";
import SearchBar from "material-ui-search-bar";
import BookCard from "components/BookCard";
import { Grid } from "@material-ui/core/";
import axios from "axios";
import { GoogleKey } from "constants/ApiKey";
import Pagination from "@material-ui/lab/Pagination";
import { HomeStyles } from "./styles";

const Home = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [result, setResult] = React.useState([]);
  const [currentPage, setcurrentPage] = React.useState(1);
  const classes = HomeStyles();

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
        setResult(data.data.items);
      });
  }

  return (
    <div className={classes.background}>
      <Header
        searchBar={
          <SearchBar
            className={classes.searchBar}
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
            publisher={book.volumeInfo.publisher}
            pageCount={book.volumeInfo.pageCount}
            language={book.volumeInfo.language}
            description={book.volumeInfo.description}
            previewLink={book.volumeInfo.previewLink}
            image={
              book.volumeInfo.imageLinks !== undefined
                ? book.volumeInfo.imageLinks.thumbnail
                : ""
            }
          ></BookCard>
        ))}
      </Grid>
      {result.length !== 0 ? (
        <Grid container alignItems="center" justify="center">
          <Pagination
            className={classes.pagination}
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
