function ColorCard({ colors }: { colors: Array<string> }) {
  return (
    <div className="flex gap-1 flex-wrap  text-center self-end mb-2">
      {colors.map((color) => (
        <div
          style={{ backgroundColor: color }}
          key={color}
          className={`w-3 rounded-2xl h-3`}
        ></div>
      ))}
    </div>
  );
}

export default ColorCard;
