import { StaticImageData } from "next/image";

export interface cartProduct {
  img: StaticImageData;
  name: string;
  price: string;
  data_aos?:string;
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
  className? : string;
  name: string;
}

