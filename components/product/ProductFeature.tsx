import React from "react";

function ProductFeature() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl mb-3 font-bold"> ویژگی ها</h2>
      <div className="pr-3 ">
        <ul className=" flex  list-inside  gap-2 text-lg ">
          <li className="list-disc text-gray-500 "> جنس : </li>
          <li> پارچه </li>
        </ul>
        <ul className=" flex  list-inside gap-2 text-lg ">
          <li className="list-disc text-gray-500"> طرح : </li>
          <li> ساده </li>
        </ul>
        <ul className=" flex list-inside  gap-2 text-lg ">
          <li className="list-disc text-gray-500"> قد لباس : </li>
          <li> تا مچ پا</li>
        </ul>
        <ul className=" flex list-inside  gap-2 text-lg ">
          <li className="list-disc text-gray-500">نوع فاق :</li>
          <li> متوسط </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductFeature;
