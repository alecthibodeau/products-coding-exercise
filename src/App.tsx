/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';

/* Config */
import config from './config.json';

/* Constants */
// import randomWords from './constants';

/* Components */
import Product from './components/Product';
import TabularFormat from './components/TabularFormat';

/* Interfaces */
import ProductProps from './interfaces/ProductProps';
import SourceProps from './interfaces/SourceProps';

/* Styles */
import './App.css';

function App() {
  const [dataSourceName, setDataSourceName] = useState<string>('');
  const [isTabular, setIsTabular] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [productsFromAPI, setProductsFromAPI] = useState<ProductProps[]>([]);

  const productsFromLocal: ProductProps[] = config.products;
  const productsURL = 'https://dummyjson.com/products';
  // const productWords = randomWords.split(',');

  const darkGray = '#808080';
  const apiSourceName = 'api';
  const localSourceName = 'local';
  const randomSourceName= 'random';
  const transparent = 'transparent';
  const sources = [
    {
      name: localSourceName,
      products: productsFromLocal
    },
    {
      name: randomSourceName,
      products: productsFromLocal
    },
    {
      name: apiSourceName,
      products: productsFromAPI
    }
  ];

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
        isRandom={dataSourceName === randomSourceName}
      />
    )
  };

  function renderSourceButton(source: SourceProps) {
    const buttonText = source.name === apiSourceName
      ? source.name.toUpperCase()
      : source.name.charAt(0).toUpperCase() + source.name.slice(1);
    return (
      <button
        key={`${source.name} source button`}
        name={`get products from ${source.name}`}
        css={{borderColor: dataSourceName === source.name ? darkGray : transparent}}
        onClick={() => loadData(source.products, source.name)}
      >
        {buttonText}
      </button>
    )
  };

  function loadData(products: ProductProps[], sourceName: string) {
    setProducts(products);
    setDataSourceName(sourceName);
  }

  return (
    <div className="App">
      <div className="products-source-control-container">
        <div>Get products from:</div>
        <div>
          {sources.map(renderSourceButton)}
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
