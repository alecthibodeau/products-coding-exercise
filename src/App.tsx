/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';

/* Constants */
import constants from './constants';

/* Components */
import Product from './components/Product';
import TabularFormat from './components/TabularFormat';

/* Interfaces */
import ProductProps from './interfaces/ProductProps';
import SourceProps from './interfaces/SourceProps';

/* Helpers */
import helpers from './helpers/helpers';

/* Styles */
import './App.css';

function App() {
  const [dataSourceName, setDataSourceName] = useState<string>('');
  const [isTabular, setIsTabular] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsFromAPI, setProductsFromAPI] = useState<ProductProps[]>([]);

  useEffect(getFromAPI, []);

  function getFromAPI() {
    fetch(constants.productsURL)
    .then(response => response.json())
    .then(data => {
      setProductsFromAPI(data.products);
    })
    .catch(error => console.error(error));
  }

  function renderProduct(product: ProductProps) {
    return (
      <Product
        key={`${product.id}${product.title}`}
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        discountPercentage={product.discountPercentage}
        rating={product.rating}
        stock={product.stock}
        brand={product.brand}
        category={product.category}
        thumbnail={product.thumbnail}
        images={product.images}
      />
    )
  };

  function renderSourceButton(source: SourceProps) {
    const buttonText = source.name === constants.apiSourceName
      ? source.name.toUpperCase()
      : helpers.capitalizeFirstLetter(source.name);
    return (
      <button
        key={`${source.name}SourceButton`}
        name={`get products from ${source.name}`}
        css={{borderColor: dataSourceName === source.name ? constants.darkGray : constants.transparent}}
        onClick={() => loadData(source.products, source.name)}
      >
        {buttonText}
      </button>
    )
  };

  function loadData(products: ProductProps[], sourceName: string) {
    if (sourceName === constants.apiSourceName) products = productsFromAPI;
    if (sourceName === constants.randomSourceName) products = helpers.generateRandomProducts(30);
    setProducts(products);
    setDataSourceName(sourceName);
  }

  return (
    <div className="App">
      <div className="products-source-control-container">
        <div>Get products from:</div>
        <div>
          {constants.sources.map(renderSourceButton)}
        </div>
      </div>
      {products.length
        ? <div>
            <button
              className="button-products-view"
              name="toggle products view"
              onClick={() => setIsTabular(!isTabular)}
            >
              {`View products ${isTabular ? 'with images' : 'in tabular format'}`}
            </button>
            {isTabular
              ? <TabularFormat productsTabular={products} />
              : <div className="products-container">{products.map(renderProduct)}</div>}
          </div>
        : null}
    </div>
  );
}

export default App;
