interface PillProps {
  label: string;
  color: string;
  isSelected?: boolean;
}

const Pill = ({ label, color, isSelected = false }: PillProps) => {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white transition-all ${
        isSelected ? 'ring-2 ring-offset-2 ring-gray-800 scale-105' : 'hover:scale-105'
      }`}
      style={{
        backgroundColor: color,
      }}
      title={label}
    >
      {label}
    </span>
  );
};

export default Pill;
