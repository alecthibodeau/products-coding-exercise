interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number | string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default ProductProps;
