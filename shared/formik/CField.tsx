import { ErrorMessage, Field } from "formik";
import React from "react";
type IField = {
  name: string;
  type: string;
  className?: string;
  title: string;
};

export default function CField({ name, type, className, title }: IField) {
  return (
    <div className={`${className} flex w-full flex-col space-y-2`}>
      <label htmlFor="" className=" w-full  ">
        {title}
      </label>
      <Field
        name={name}
        type={type}
        className={` input-bordered input rounded-md border-2 border-gray-200  !outline-none`}
      />
      <ErrorMessage name={name} className="text-red-400" />
    </div>
  );
}
