/* Interfaces */
import ProductProps from './interfaces/ProductProps';

/* Config */
import config from './config.json';

const randomWords = 'inverter,multitasking,vitamin,subscriber,proprietors,worthwhile,enrollment,crimson,radiologists,stair,puff,potato,travelers,apparent,flightplan,grantee,assessments,crucial,repeatable,glassware,anyplace,melee,remit,corporation,microbial,dictate,toy,botany,emerged,powder,interpretation,oaks,heavyweight,strikers,sectional,subsector,steep,tenant,conglomerate,retire,note,ballot,active,chalk,roll,sweep,decorative,extent,hour,formulate,hay,impact,circumstance,fruit,convert,delay,distortion,inside,border,avenue'
const productWords = randomWords.split(',');
const productsFromLocal: ProductProps[] = config.products;
const productsURL = 'https://dummyjson.com/products';

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
    products: []
  },
  {
    name: apiSourceName,
    products: []
  }
];

export default {
  productWords,
  productsURL,
  productsFromLocal,
  darkGray,
  apiSourceName,
  localSourceName,
  randomSourceName,
  sources,
  transparent
};
