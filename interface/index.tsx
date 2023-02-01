import { StaticImageData } from "next/image";

export interface cartProduct {
  img: StaticImageData;
  name: string;
  price: string;
  colors: Array<string>;
}
export interface sliderProducts {
  link: string;
  products: cartProduct[];
  children: JSX.Element;
}
export interface banner {
  title: string;
  link: string;
  img: StaticImageData;
}
export interface IBrandList {
  img: StaticImageData;
  title: string;
}

export interface IBoxFeature {
  img: StaticImageData;
  name: string;
}

