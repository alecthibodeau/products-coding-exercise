/* Components */
import Stars from './Stars';

/* Interfaces */
import ProductProps from '../interfaces/ProductProps';
import TabularFormatProps from '../interfaces/TabularFormatProps';

/* Helpers */
import helpers from '../helpers/helpers';

function TabularFormat(props: TabularFormatProps) {
  const charactersMax = 25;

  function renderProductRow(product: ProductProps) {
    return (
      <div key={`${product.id}${product.title}`} className="product-row">
        <span>{product.id}</span>
        <span>{product.brand}</span>
        <span>{product.title}</span>
        <span>{helpers.truncateText(product.description, charactersMax)}</span>
        <span>{`$${product.price}`}</span>
        <span>{`${product.discountPercentage}%`}</span>
        <span>{product.stock}</span>
        <span>{product.category}</span>
        <div className="tabular-stars">
          <Stars starsRating={product.rating} />
        </div>
      </div>
    )
  };

  return (
    <div className="tabular-format">
      <div className="product-row-header">
        <span>Id</span>
        <span>Brand</span>
        <span>Title</span>
        <span>Description</span>
        <span>Price</span>
        <span>Discount Percentage</span>
        <span>Stock</span>
        <span>Category</span>
        <span>Rating</span>
      </div>
      {props.productsTabular.map(renderProductRow)}
    </div>
  );
}

export default TabularFormat;
