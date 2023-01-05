import { useEffect, useState } from 'react';
import './App.css';

/* Components */
import Product from './components/Product';

/* Interfaces */
import ProductProps from './interfaces/ProductProps';

function App() {
  const [products, setProducts] = useState([]);

  const productsURL = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(productsURL)
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
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

  return (
    <div className="App">
      <div className="products-container">
        {products.map(renderProduct)}
      </div>
    </div>
  );
}

export default App;
