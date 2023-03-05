/* Constants */
import constants from '../constants';

/* Interfaces */
import ProductProps from '../interfaces/ProductProps';

function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function setRandomItem(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function setRandomNumber(minimum: number, range: number) {
  return Math.floor(Math.random() * range) + minimum;
}

function setRandomNumberWithDecimalPlaces(minimum: number, maximum: number, places: number) {
  return +(Math.random() * (maximum - minimum) + minimum).toFixed(places);
}

function setRandomDescription(wordCount: number) {
  let description = '';
  for (let i = 0; i < wordCount; i++) {
    const randomWord = setRandomItem(constants.productWords);
    description += i ? ` ${randomWord}` : capitalizeFirstLetter(randomWord);
  }
  return description;
}

function setRandomProducts(length: number) {
  const products = [];
  for (let i = 0; i < length; i++) {
    const width = setRandomNumber(300, 100);
    const height = setRandomNumber(300, 100);
    const product: ProductProps = {
      id: i + 1,
      title: capitalizeFirstLetter(setRandomItem(constants.productWords)),
      description: setRandomDescription(50),
      price: setRandomNumber(10, 991),
      discountPercentage: setRandomNumberWithDecimalPlaces(5, 25, 2),
      rating: setRandomNumberWithDecimalPlaces(3, 5, 2),
      stock: setRandomNumber(1, 100),
      brand: capitalizeFirstLetter(setRandomItem(constants.productWords)),
      category: capitalizeFirstLetter(setRandomItem(constants.productWords)),
      thumbnail: `http://unsplash.it/${width}/${height}`,
      images: []
    }
    products.push(product);
  }
  return products;
}

function truncateText(text: string, maxLength: number) {
  return text.length <= maxLength
    ? text
    : `${text.slice(0, maxLength)}${constants.unicodeEllipsis}`;
}

export default {
  capitalizeFirstLetter,
  setRandomProducts,
  truncateText
};
