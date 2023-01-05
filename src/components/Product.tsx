/* Interfaces */
import ProductProps from '../interfaces/ProductProps';
import Stars from './Stars';

function Product(props: ProductProps) {

  function truncateText(text: string) {
    const characters = 28;
    return text.length <= characters ? text : `${text.slice(0, characters)}...`;
  }

  return (
    <div className="product">
      <img className="product-image" src={props.thumbnail} />
      <div className="product-info">
        <div className="product-brand">
          {props.brand}
        </div>
        <div className="product-title">
          {truncateText(props.title)}
        </div>
        <div className="product-description">
          {truncateText(props.description)}
        </div>
        <Stars starsRating={props.rating}></Stars>
        <div className="product-price">
          {`$${props.price}`}
        </div>
      </div>
    </div>
  );
}

export default Product;
