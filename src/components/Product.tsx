/* Interfaces */
import ProductProps from '../interfaces/ProductProps';
import Stars from './Stars';

/* Helpers */
import truncateText from '../helpers/truncate-text';

function Product(props: ProductProps) {
  const charactersMax = 28;

  return (
    <div className="product">
      <img className="product-image" src={props.thumbnail} />
      <div className="product-info">
        <div className="product-brand">
          {props.brand}
        </div>
        <div className="product-title">
          {truncateText(props.title, charactersMax)}
        </div>
        <div className="product-description">
          {truncateText(props.description, charactersMax)}
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
