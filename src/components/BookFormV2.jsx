import { useRef } from "react";
import classes from "./NewBookForm.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BookFormV2() {
  const refTitle = useRef("");
  const refYear = useRef("");
  const refImage = useRef("");
  const refGenre = useRef("");
  const refAuthor = useRef("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("avatar", e.target[4].files[0]);
    axios
      .post("http://localhost:3000/images/upload", formData)
      .then((res) => {
        let newBook = {
          title: refTitle.current.value,
          genre: refGenre.current.value,
          year: refYear.current.value,
          avatar: res.data.filename,
          author: refAuthor.current.value,
        };

        fetch("http://localhost:3000/books/add", {
          method: "POST",
          body: JSON.stringify(newBook),
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("access_token")}`,
          },
        })
          .then((res) => {
            navigate("/books");
          })
          .catch((err) => {
            alert("Erreur lors de l'ajout d'un livre...");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // console.log("Author ID", uBook.author.id);

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="">Title</label>
        <input type="text" ref={refTitle} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Author</label>
        <input type="text" ref={refAuthor} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Genre</label>
        <input type="text" ref={refGenre} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Year</label>
        <input type="number" ref={refYear} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Image</label>
        <input type="file" ref={refImage} />
      </div>

      <div className={classes.actions}>
        <button type="submit">Ajouter Livre</button>
      </div>
    </form>
  );
}

export default BookFormV2;
