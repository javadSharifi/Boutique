import React, { useState } from "react";

function Checkbox({ name }: { name: string }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="form-control " >
      <label className="flex justify-between">
        <span className="label-text text-xl font-bold md:text-base lg:text-lg">
          {name}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
         
          className="checkbox-error    checkbox "
        />
      </label>
    </div>
  );
}

export default Checkbox;
