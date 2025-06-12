import { useRef } from "react";
import classes from "./NewBookForm.module.css";
import { useNavigate } from "react-router-dom";

function BookFormV2() {
  const refTitle = useRef("");
  const refYear = useRef("");
  const refImage = useRef("");
  const refSummary = useRef("");
  const refEditor = useRef("");
  const refAuthor = useRef("");
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    console.log(e);
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
        <input type="text" ref={refEditor} />
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
