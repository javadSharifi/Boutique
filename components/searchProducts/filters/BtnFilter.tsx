import React, { useState } from "react";

function BtnFilter({ name }: { name: string }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <button
      className={`font-bold flex-initial w-14 rounded-lg h-10 ${
        checked
          ? "text-white bg-red-400"
          : "text-black bg-transparent border border-gray-500"
      }`}
      onClick={handleChange}
    >
      {name}
    </button>
  );
}

export default BtnFilter;
