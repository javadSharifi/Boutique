import { FunnelIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import Modal, { OpenModal } from "shared/Modal";
import Filters from "../filters";
import Ordering from "../Ordering";

function ProductsMobilePage({ name }: { name: string }) {
  return (
    <div className="w-full md:hidden flex px-3 justify-between">
      <Modal name="filter">
        <Filters />
      </Modal>
      <Modal name="orderings">
        <Ordering />
      </Modal>
      <div className="space-x-3">
        <OpenModal className="Btn-Mobile" name="filter">
          <>
            <FunnelIcon className="w-6" />
            <p>فیلتر کردن</p>
          </>
        </OpenModal>
        <OpenModal className="Btn-Mobile" name="orderings">
          <>
            <SquaresPlusIcon className="w-6" />
            <p>مرتب سازی</p>
          </>
        </OpenModal>
      </div>
      <h1 className="text-3xl  font-bold text-red-500 ">{name}</h1>
    </div>
  );
}

export default ProductsMobilePage;
