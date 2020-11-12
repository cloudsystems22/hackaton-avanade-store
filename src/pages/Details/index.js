import { BaseTitle, Container, Row, Column } from "./styles";
import React, { useState, useEffect } from "react";

function Details() {
  const [review, setReview] = useState({
    name: "",
    description: "",
  });
  return (
    <>
      <div>
        <div>Imagem</div>
        <BaseTitle>Super Oversized T-Shirt With Raw Sleeves In Brown</BaseTitle>
        13.99
        <label>Color</label>
        <label>Size</label>
        <label>Quantity</label>
        <button>Add to cart</button>
      </div>

      <div>
        <h1>Product reviews</h1>
        <div></div>
        <div>
          Got this through the post the other day and right from opening the
          packet I knew this was quality, put it on and I was right!! Well done
        </div>
      </div>

      {/* <form>
        <BaseTitle>Add a review</BaseTitle>
        <input
          type="text"
          value={review.name}
          onChange={(event) =>
            setReview({ ...review, name: event.target.value })
          }
        />
        <textarea
          value={review.description}
          onChange={(event) =>
            setReview({ ...review, description: event.target.value })
          }
        ></textarea>
        <input type="submit" value="Enviar" />
      </form> */}
    </>
  );
}

export default Details;
