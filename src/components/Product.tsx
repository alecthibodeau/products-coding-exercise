/* Interfaces */
import ProductProps from '../interfaces/ProductProps';
import Stars from './Stars';

/* Helpers */
import helpers from '../helpers/helpers';

function Product(props: ProductProps) {
  const charactersMax = 28;

  return (
    <div className="product">
      <img
        className="product-image"
        src={props.thumbnail}
        alt={props.title}
      />
      <div className="product-info">
        <div className="product-brand">
          {props.brand}
        </div>
        <div className="product-title">
          {helpers.truncateText(props.title, charactersMax)}
        </div>
        <div className="product-description">
          {helpers.truncateText(props.description, charactersMax)}
        </div>
        <Stars starsRating={props.rating} />
        <div className="product-price">
          {`$${props.price}`}
        </div>
      </div>
    </div>
  );
}

export default Product;
