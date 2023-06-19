import React from "react";
import Modal, { OpenModal } from "shared/Modal";

function ProfileNav({
  title,
  btnName,
  Icon,
  nameModal,
}: {
  title: string;
  btnName: string;
  Icon?: any;
  nameModal?: string;
}) {
  return (
    <div className="flex content-center justify-between pb-4 md:border-b-2">
      <OpenModal
        name={`${nameModal}`}
        className="btn-outline btn-error btn gap-3 "
      >
        <>
          <h3> {btnName}</h3>
          {Icon ? <Icon className="w-5 self-center" /> : null}
        </>
      </OpenModal>

      <h2 className="self-center text-center font-medium">{title}</h2>
    </div>
  );
}

export default ProfileNav;
