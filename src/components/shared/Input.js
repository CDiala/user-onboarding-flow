const Input = ({
  inputPlaceholder,
  readOnlyPlaceholder,
  readOnly,
  title,
  isOptional,
}) => {
  return (
    <div className="col-span-3 sm:col-span-2 text-sm md:text-base lg:text-lg">
      <label htmlFor={title} className="block font-medium text-gray-700">
        {title}{" "}
        {isOptional && <span className="text-gray-400">{"(optional)"}</span>}
      </label>
      <div className="mt-2 m-auto flex rounded-md border border-slate-200">
        {readOnly && (
          <input
            readOnly={readOnly}
            className="inline-flex items-center rounded-l-md border-0 border-r border-slate-200 bg-gray-50 text-gray-500 p-4 w-7/20"
            placeholder={readOnlyPlaceholder}
          />
        )}
        <input
          type="text"
          name={title}
          id={title}
          className={`focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-${
            readOnly ? "13/20" : "full"
          } rounded-none rounded-r-md rounded-${
            readOnly ? "" : "l-md"
          } border-slate-200 p-4`}
          placeholder={inputPlaceholder}
        />
      </div>
    </div>
  );
};

export default Input;
