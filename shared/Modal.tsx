import React from "react";

export function OpenModal({
  name,
  className,
  children,
}: {
  name: string;
  className?: string;
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
  className,
  children,
}: {
  name: string;
  className?: string;
  children: JSX.Element;
}) {
  return (
    <>
      <input type="checkbox" id={name} className="modal-toggle" />
      <label htmlFor={name} className="modal cursor-pointer">
        <label className="modal-box space-y-5 relative pb-14" htmlFor="">
          <label htmlFor={name} className=" text-2xl btn-circle  ">
            ✕
          </label>
          {children}
        </label>
      </label>
    </>
  );
}

export default Modal;
