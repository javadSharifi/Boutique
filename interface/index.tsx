import { StaticImageData } from "next/image";

export interface cartProduct {
  name: string;
  price: string;
  img: any;
  colors: string[];
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
  className?: string;
  name: string;
}

export type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;

export interface IProfileBtn {
  Icon: any;
  name: string;
  link: string;
}

export interface IProfileCart {
  Icon: any;
  placeholder: string;
  name: string;
  type: "name" | "email" | "number" | "tel";
}
export type TProfileLink = {
  link: string;
  name: string;
  Icon: any;
};
