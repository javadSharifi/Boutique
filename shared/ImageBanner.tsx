import Image, { StaticImageData } from 'next/image';
import React from 'react'

function ImageBanner({ alt, img }: { alt: string; img: StaticImageData }) {
  return (
    <Image
      alt={alt}
      src={img}
      fill
      placeholder="blur"
      className="rounded-2xl"
      sizes="(max-width: 768px) 100vw,(max-width: 1200px) 80vw, (max-width: 1550px) 70vw ,"
    />
  );
}

export default ImageBanner