const Input = ({
  placeholder,
  optionalPlaceholder,
  readOnly,
  title,
  isOptional,
  onChange,
  value,
  type,
}) => {
  return (
    <div className="w-full text-sm text-base md:text-lg">
      <label htmlFor={title} className="block font-medium text-gray-700 mb-3">
        {title}{" "}
        {isOptional && <span className="text-gray-400">{"(optional)"}</span>}
      </label>
      <div
        className={`${
          readOnly ? "border" : "border-0"
        } flex rounded-md border-slate-200`}
      >
        {readOnly && (
          <input
            type={type}
            disabled={readOnly}
            className="inline-flex items-center rounded-l-md border-0 border-r border-slate-200 bg-gray-50 font-medium py-2.5 px-3.5 w-7/20"
            placeholder={optionalPlaceholder}
          />
        )}
        <input
          required
          type={type}
          name={title}
          id={title}
          className={`${
            readOnly
              ? "w-13/20 rounded-l-none border-0 focus:leading-5.5"
              : "w-full border"
          } py-2.5 px-3.5 rounded-md border-slate-200 focus:ring-active focus:border focus:border-active`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
