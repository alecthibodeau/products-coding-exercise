/* Interfaces */
import ProductProps from './interfaces/ProductProps';

/* Config */
import config from './config.json';

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

const productWords = [
  'active',
  'amount',
  'anyplace',
  'apparent',
  'assessments',
  'avenue',
  'ballot',
  'blend',
  'border',
  'botany',
  'chalk',
  'circumstance',
  'cold',
  'confident',
  'conglomerate',
  'convert',
  'corporation',
  'crimson',
  'crucial',
  'decorative',
  'delight',
  'dictation',
  'distillation',
  'emerged',
  'enrollment',
  'extent',
  'felt',
  'flash',
  'flightplan',
  'formulate',
  'fruit',
  'gain',
  'glassware',
  'grantee',
  'happy',
  'hay',
  'heavyweight',
  'hour',
  'impact',
  'inside',
  'inspirational',
  'interpretation',
  'inverter',
  'lattice',
  'microbial',
  'mill',
  'multiple',
  'note',
  'oaks',
  'photography',
  'pick',
  'pies',
  'pigeon',
  'potato',
  'powder',
  'proprietors',
  'puff',
  'radiologist',
  'remit',
  'repeatable',
  'retinue',
  'roll',
  'savannah',
  'sectional',
  'slice',
  'sound',
  'stair',
  'steep',
  'street',
  'stripes',
  'subscriber',
  'subsector',
  'sunlight',
  'sweep',
  'tenant',
  'time',
  'toy',
  'travelers',
  'vitamin',
  'work',
  'worthwhile'
]

export default {
  productsFromLocal,
  productsURL,
  darkGray,
  apiSourceName,
  localSourceName,
  randomSourceName,
  transparent,
  sources,
  productWords
};
