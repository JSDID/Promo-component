import React from "react";
import "./Promo.css";

const Promo = ({
  title = "Промо-заголовок",
  description = "Описание промо-акции или продукта.",
  buttonLabel = "Подробнее",
  onButtonClick = () => {},
  image
}) => (
  <section className="promo">
    {image && (
      <div className="promo__image-wrapper">
        <img src={image} alt="Промо" className="promo__image" />
      </div>
    )}
    <div className="promo__content">
      <h2 className="promo__title">{title}</h2>
      <p className="promo__description">{description}</p>
      <button className="promo__button" onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  </section>
);

export default Promo;

