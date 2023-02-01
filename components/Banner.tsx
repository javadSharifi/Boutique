
import Link from "next/link";
import React from "react";
import { banner } from "interface";
import ImageBanner from "shared/ImageBanner";

function Banner({ title, link, img }: banner) {
  return (
    <Link href={`/${link}`} title={title}>
      <div className="w-full flex justify-center object-cover h-44 sm:h-72 md:h-80 xl:h-96 my-6 relative ">
        <ImageBanner img={img} alt={title} />
      </div>
    </Link>
  );
}

export default Banner;
