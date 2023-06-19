import React from "react";

function ActivitiesCart({
  number,
  name,
  description,
  className,
}: {
  number: number;
  name: string;
  description: string;
  className: string;
}) {
  return (
    <div className=" flex flex-col content-center items-center justify-center gap-3 rounded-2xl border-2 p-3">
      <div
        className={`flex  flex-col items-center justify-center rounded-full text-base font-medium md:h-28  md:w-28 md:border-4  ${className}`}
      >
        <p>{number}</p>
        <p>{name}</p>
      </div>
      <h3 className="hidden md:inline-block">{description}</h3>
    </div>
  );
}

export default ActivitiesCart;
