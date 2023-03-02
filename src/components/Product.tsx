import { useEffect, useState } from 'react';

/* Interfaces */
import ProductProps from '../interfaces/ProductProps';
import Stars from './Stars';

/* Helpers */
import truncateText from '../helpers/truncate-text';

function Product(props: ProductProps) {
  const [imageLink, setImageLink] = useState<string>('');
  const charactersMax = 28;

  useEffect(() => {
    if (props.isRandom) {
      const width = Math.floor(Math.random() * 100) + 300;
      const height = Math.floor(Math.random() * 100) + 300;
      setImageLink(`http://unsplash.it/${width}/${height}`);
    } else {
      setImageLink(props.thumbnail);
    }
  }, [props.isRandom]);

  return (
    <div className="product">
      <img
        className="product-image"
        src={imageLink}
      />
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
