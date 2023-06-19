import React from "react";

export function OpenModal({
  name,
  className,
  children,
}: {
  name: string;
  className?: string | undefined;
  children: JSX.Element;
}) {
  return (
    <label htmlFor={name} className={className}>
      {children}
    </label>
  );
}
function Modal({
  name,
  title,
  className,
  children,
}: {
  name: string;
  title?: string;
  className?: string;
  children: JSX.Element;
}) {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle  " />
      <label htmlFor={name} className="modal cursor-pointer ">
        <label
          className={`modal-box relative space-y-5  pt-4 ${className} `}
          htmlFor=""
        >
          <label
            htmlFor={name}
            className=" static top-0 flex w-full justify-between  border-b-2  pb-2 "
          >
            <p className="text-2xl">✕</p>
            <p className="self-center text-lg">{title}</p>
          </label>
          {children}
        </label>
      </label>
    </>
  );
}

export default Modal;
