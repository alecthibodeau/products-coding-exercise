/* Constants */
import constants from '../constants';

/* Interfaces */
import ProductProps from '../interfaces/ProductProps';

function truncateText(text: string, characters: number) {
  const ellipsis = '\u2026';
  return text.length <= characters ? text : `${text.slice(0, characters)}${ellipsis}`;
}

function getRandomWord() {
  return constants.productWords[Math.floor(Math.random() * constants.productWords.length)];
}

function getRandomNumber(minimum: number, range: number) {
  return Math.floor(Math.random() * range) + minimum;
}

function getRandomNumberWithDecimalPlaces(minimum: number, maximum: number, places: number) {
  return +(Math.random() * (maximum - minimum) + minimum).toFixed(places);
}

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateRandomProducts(length: number) {
  const products = [];
  for (let i = 0; i < length; i++) {
    const width = getRandomNumber(300, 100);
    const height = getRandomNumber(300, 100);
    const product: ProductProps = {
      id: i + 1,
      title: capitalizeFirstLetter(getRandomWord()),
      description: capitalizeFirstLetter(getRandomWord()),
      price: getRandomNumber(10, 991),
      discountPercentage: getRandomNumberWithDecimalPlaces(5, 25, 2),
      rating: getRandomNumberWithDecimalPlaces(3, 5, 2),
      stock: getRandomNumber(1, 100),
      brand: capitalizeFirstLetter(getRandomWord()),
      category: capitalizeFirstLetter(getRandomWord()),
      thumbnail: `http://unsplash.it/${width}/${height}`,
      images: []
    }
    products.push(product);
  }
  return products;
}

export default {
  truncateText,
  capitalizeFirstLetter,
  generateRandomProducts
};
