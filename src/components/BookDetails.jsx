import { useState } from "react";
import classes from "./BookDetails.module.css";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  let [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={classes.card}>
            <img
              src={selectedBook.image}
              className="card-img-top"
              alt="Couverture du livre"
            ></img>
            <div className={classes.cardbody}>
              <h5 className={classes.cardtitle}>{selectedBook.title}</h5>
              <p className={classes.cardtext}>
                <strong>Auteur :</strong> {selectedBook.author}
              </p>
              <p className={classes.cardtext}>
                <strong>Année de parution :</strong> {selectedBook.year}{" "}
              </p>
              <p className={classes.cardtext}>
                <strong>Éditeur :</strong> {selectedBook.editor}{" "}
              </p>
              <p className={classes.cardtext}>
                <strong>Description :</strong> {selectedBook.summary}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
