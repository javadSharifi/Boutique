import React, { useState } from "react";

function Checkbox({ name }: { name: string }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="form-control">
      <label className="flex justify-between">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="checkbox checkbox-secondary "
        />
        <span className="label-text">{name}</span>
      </label>
    </div>
  );
}

export default Checkbox;
