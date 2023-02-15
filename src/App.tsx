/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';

/* Config */
import config from './config.json';

/* Components */
import Product from './components/Product';
import TabularFormat from './components/TabularFormat';

/* Interfaces */
import ProductProps from './interfaces/ProductProps';

/* Styles */
import './App.css';

function App() {
  const [dataSource, setDataSource] = useState<string>('');
  const [isTabular, setIsTabular] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsFromAPI, setProductsFromAPI] = useState<ProductProps[]>([]);

  const darkGray = '#808080';
  const productsFromLocal: ProductProps[] = config.products;
  const productsURL = 'https://dummyjson.com/products';
  const transparent = 'transparent';

  useEffect(() => {
    fetch(productsURL)
      .then(response => response.json())
      .then(data => {
        setProductsFromAPI(data.products);
      })
      .catch(error => console.error(error));
  }, []);

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

  function loadData(products: ProductProps[], source: string) {
    setProducts(products);
    setDataSource(source);
  }

  return (
    <div className="App">
      <div className="products-source-control-container">
        <div>Get products from:</div>
        <div>
          <button
            name="get products from local"
            css={{borderColor: dataSource === 'local' ? darkGray : transparent}}
            onClick={() => loadData(productsFromLocal, 'local')}
          >
            Local
          </button>
          <button
            name="get products from API"
            css={{borderColor: dataSource === 'api' ? darkGray : transparent}}
            onClick={() => loadData(productsFromAPI, 'api')}
          >
            API
          </button>
        </div>
      </div>
      {products.length
        ? <div>
            <button
              className="button-products-view"
              name="toggle products view"
              onClick={() => setIsTabular(!isTabular)}
            >
              {isTabular ? 'View products with images' : 'View products in tabular format'}
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
