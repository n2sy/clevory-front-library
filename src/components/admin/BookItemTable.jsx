import axios from "axios";
import { Pencil, Scissors } from "lucide-react";
import React from "react";

function BookItemTable({ selectedBook, setListBooks }) {
  function deleteHandler() {
    if (confirm("Are you sure to delete this book ?")) {
      axios
        .delete(`http://localhost:3000/books/delete/${selectedBook._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then((res) => {
          alert(res.data.message);
          axios.get("http://localhost:3000/books/all").then((res) => {
            setListBooks(res.data.listeLivres);
          });
        });
    }
  }
  return (
    <tr>
      <td>{selectedBook._id} </td>
      <td> {selectedBook.title} </td>
      <td> {selectedBook.author}</td>
      <td>{selectedBook.year}</td>
      <td>{selectedBook.genre}</td>
      <td>
        <button onClick={deleteHandler} className="btn">
          <Scissors></Scissors>
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            updateShow(true);
            setRefreshBook(selectedBook);
          }}
          className="btn"
        >
          <Pencil></Pencil>
        </button>
      </td>
    </tr>
  );
}

export default BookItemTable;
