/* Components */
import Stars from './Stars';

/* Interfaces */
import ProductProps from '../interfaces/ProductProps';
import TabularFormatProps from '../interfaces/TabularFormatProps';

function TabularFormat(props: TabularFormatProps) {

  function renderProductRow(product: ProductProps) {
    return (
      <div key={`${product.id}${product.title}`} className="product-row">
        <div>{product.id}</div>
        <div>{product.brand}</div>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <div>{product.discountPercentage}</div>
        <div>{product.stock}</div>
        <div>{product.category}</div>
        <Stars starsRating={product.rating}></Stars>
      </div>
    )
  };

  return (
    <div>
      {props.productsTabular.map(renderProductRow)}
    </div>
  );
}

export default TabularFormat;
