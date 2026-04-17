const InputLabel = ({ label, error }) => {
  return (
    <div className="flex items-end justify-between">
      <label className="label">{label}</label>
      {error && (
        <p className="text-red-400 text-[.7rem] lg:text-[.8rem]">{error}</p>
      )}
    </div>
  );
};

export default InputLabel;
