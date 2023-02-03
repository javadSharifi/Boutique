import React from "react";
import icon1 from "@/img/category/1.png";
import icon2 from "@/img/category/2.png";
import icon3 from "@/img/category/3.png";
import icon4 from "@/img/category/4.png";
import icon5 from "@/img/category/5.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface listIconCategories {
  icon: StaticImageData;
  name: string;
}
function ListIconCategories() {
  const iconCategories: listIconCategories[] = [
    {
      icon: icon1,
      name: "تی شرت ",
    },
    {
      icon: icon2,
      name: "پیراهن ",
    },
    {
      icon: icon3,
      name: "کفش زنانه ",
    },
    {
      icon: icon4,
      name: "هودی",
    },
    {
      icon: icon5,
      name: "کفش مردانه",
    },
  ];
  return (
    <div
      data-aos="fade-up"
      className="w-full grid grid-cols-3 px-5 sm:flex  justify-center gap-4 sm:gap-10 md:gap-14 lg:gap-28  items-center  "
    >
      {iconCategories.map(({ icon, name }) => (
        <Link
          key={name}
          href={name}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col  group  h-20 md:h-28  w-[4.5rem] sm:w-20 sm:h-24 md:w-24 lg:h-[6.50rem] text-sm md:text-base text-center gap-2 font-bold ">
            <div className="relative w-full h-full ">
              <Image
                alt="icon"
                src={icon}
                fill
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 80vw, (max-width: 1550px) 70vw ,"
                className="rounded-2xl shadow-md transition-all group-hover:shadow-lg "
              />
            </div>
            <p>{name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ListIconCategories;
