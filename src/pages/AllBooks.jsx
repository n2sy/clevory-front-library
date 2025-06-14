import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

function AllBooks() {
  const [tabBooks, setTabBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/books/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false);

        setTabBooks(data["listeLivres"]);
      });
  }, []);

  function searchBooksByYear(y1, y2) {
    fetch(`http://localhost:3000/books/search?year1=${y1}&year2=${y2}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setTabBooks(data.listeLivres);
      });
  }

  if (isLoading) {
    return (
      <center>
        <h4>Data Loading...</h4>
      </center>
    );
  } else
    return (
      <>
        <SearchBar searchHandler={searchBooksByYear}></SearchBar>
        <BookList livres={tabBooks}></BookList>
      </>

      // <ol>
      //     <li>

      //     </li>

      // </ol>
    );
}

export default AllBooks;
