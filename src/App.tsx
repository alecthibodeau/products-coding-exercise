/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';

/* Config */
import config from './config.json';

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

  const sources: SourceProps = {
    local: config.products,
    random: helpers.setRandomProducts(30),
    api: productsFromAPI
  };

  useEffect(getFromAPI, []);

  function getFromAPI(): void {
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

  function renderSourceButton(sourceName: string) {
    const buttonText = sourceName === 'api'
      ? sourceName.toUpperCase()
      : helpers.capitalizeFirstLetter(sourceName);
    return (
      <button
        key={`${sourceName}SourceButton`}
        name={`get products from ${sourceName}`}
        css={{borderColor: dataSourceName === sourceName
          ? constants.darkGray
          : constants.transparent
        }}
        onClick={() => loadData(sourceName)}
      >
        {buttonText}
      </button>
    )
  };

  function loadData(sourceName: string) {
    setProducts(sources[sourceName]);
    setDataSourceName(sourceName);
  }

  return (
    <div className="App">
      <div className="products-source-control-container">
        <div>Get products from:</div>
        <div>
          {Object.keys(sources).map(renderSourceButton)}
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
