import React, { useState } from "react";

function Checkbox({ name }: { name: string }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="form-control">
      <label className="flex justify-between">
        <span className="label-text lg:text-lg font-bold">{name}</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="checkbox checkbox-secondary "
        />
      </label>
    </div>
  );
}

export default Checkbox;
