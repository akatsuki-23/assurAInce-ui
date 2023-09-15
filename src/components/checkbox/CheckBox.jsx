const CheckBox = ({ checked, handleChange }) => {
  return (
    <div>
      <input
        className="border border-black"
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
    </div>
  );
};

export default CheckBox;
