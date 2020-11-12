import { BaseTitle } from "./styles";
import React, { useState, useEffect } from "react";

function Details() {
  const [review, setReview] = useState({
    name: "",
    description: "",
  });
  return (
    <>
      <BaseTitle>Super Oversized T-Shirt With Raw Sleeves In Brown</BaseTitle>
      <br />
      <br />
      <br />
      <form>
        {/* <BaseTitle>Add a review</BaseTitle> */}
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
      </form>
    </>
  );
}

export default Details;
