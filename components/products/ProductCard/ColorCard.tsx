import React, { useEffect, useState } from "react";

function ColorCard({ colors }: { colors: Array<string> }) {
  const [color, setColor] = useState<any>();
  useEffect(() => {
    setColor(
      colors.map((color) => (
        <div
          style={{ backgroundColor: color }}
          key={color}
          className={`w-3 rounded-2xl h-3`}
        ></div>
      ))
    );
  }, []);

  return <div className="flex gap-1  text-center self-end mb-2">{color}</div>;
}

export default ColorCard;
