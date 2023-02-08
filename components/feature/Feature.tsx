import React from "react";
import BoxFeature from "./BoxFeature";
import img1 from "@/feature/1.png";
import img2 from "@/feature/2.png";
import img3 from "@/feature/3.png";
import img4 from "@/feature/4.png";
import { IBoxFeature } from "interface";

function Feature({className}:{className:string}) {
  const data: IBoxFeature[] = [
    {
      img: img1,
      name: "خدمات پس از خرید",
    },
    {
      img: img2,
      name: " ضمانت بازگشت کالا ",
    },
    {
      img: img3,
      name: "ضمانت اصالت",
    },
    {
      img: img4,
      name: "ارسال سریع و رایگان",
    },
  ];
  return (
    <div

      className="flex flex-col text-center  mb-4   gap-9 "
    >
      <div className="flex relative   justify-center md:gap-16 w-full">
        <>
          {data.map(({ img, name }) => (
            <BoxFeature key={name} img={img} name={name} className={className} />
          ))}
        </>
      </div>
    </div>
  );
}

export default Feature;
