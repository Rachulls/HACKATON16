import { useState } from "react";
import "./Footer.css";
import estrellas from "../img/estrellas.png";

let arrId = 0;
export const Footer = () => {
  const [reviews, setReviews] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const valueName = event.target[0].value;
    const valueReview = event.target[1].value;
    
    const newObject = { id: arrId, name: valueName, review: valueReview }
    arrId++;
    setReviews([...reviews, newObject])
  };
  
  const deleteItem = (id) => {
    const newItems = [...reviews];
    newItems.splice(id, 1);
    setReviews(newItems);
  }

  return (
    <section className="Footer-Contain">
      <h2>Custommer Reviews</h2>
      <div className="footerReview">
        <div>
          <form onSubmit={handleSubmit} className="Form-Send">
            <input
              id="name"
              className="Input"
              type="text"
              placeholder="Your name..."
              autoComplete="off"
            />
            <input
              id="review"
              className="Input"
              type="text"
              placeholder="Reviews..."
              autoComplete="off"
            />
            <button className="Send" type="submit">
              SEND
            </button>
          </form>
        </div>
        <section className="reviewCards">
          {reviews.map((review, index) => (
            <div key={review.id} className="cardReview">
              <div className="headerReview">
                <img className="stars" src={estrellas} />
                <span className="delete" onClick={()=>deleteItem(index)}>
                  X
                </span>
              </div>
              <div className="infoReview">
                <span className="review">{review.review}</span>
                <span className="name">{review.name}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};
