export default function StepOne({ type, label, name, placeholder, onChange }) {
  return (
    <>
      <div className="text-xs text-gray-600 mb-2">{label}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="box-border rounded border border-gray-400 w-full h-3/5 text-xs px-2"
        onChange={onChange}
        required
      />
    </>
  );
}
