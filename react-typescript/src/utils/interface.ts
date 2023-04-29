export interface Product {
  name: string;
  brand: string;
  color: string;
}

// export interface Product {
//   speed?: string;
// }

export interface ProductNewPeature {
  speed?: "100k/h";
}

export interface ICard {
  title: string;
  description?: string;
  image: string;
  link: string;
}

// assertions - &
export type FinalProduct = Product & ProductNewPeature;
