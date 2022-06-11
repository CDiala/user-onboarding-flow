const Input = ({
  placeholder,
  optionalPlaceholder,
  readOnly,
  title,
  isOptional,
  onChange,
  value,
}) => {
  return (
    <div className="w-100 col-span-3 sm:col-span-2 text-sm md:text-base text-lg mb-[22px]">
      <label htmlFor={title} className="block font-medium text-gray-700 mb-3">
        {title}{" "}
        {isOptional && <span className="text-gray-400">{"(optional)"}</span>}
      </label>
      <div
        className={`${
          readOnly ? "border" : "border-0"
        }  m-auto flex rounded-md border-slate-200 focus:ring-indigo-500 focus:border-indigo-500`}
      >
        {readOnly && (
          <input
            type="text"
            disabled={readOnly}
            className="inline-flex items-center rounded-l-md border-0 border-r border-slate-200 bg-gray-50 text-gray-500 py-2.5 px-3.5 w-7/20 focus:outline-none focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600"
            placeholder={optionalPlaceholder}
          />
        )}
        <input
          required
          type="text"
          name={title}
          id={title}
          className={`${
            readOnly ? "w-13/20 border-0" : "w-full border"
          } py-2.5 px-3.5 
          rounded-md border-slate-200 focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
