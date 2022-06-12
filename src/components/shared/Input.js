import {
  activeInput,
  inactiveInput,
  inputGroup,
  labelStyle,
  optLabelStyle,
  controlGroupClass,
} from "./inputStyles";

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
    <div className={controlGroupClass()}>
      <label htmlFor={title} className={labelStyle()}>
        {title}{" "}
        {isOptional && <span className={optLabelStyle()}>{"(optional)"}</span>}
      </label>
      <div className={`${inputGroup(readOnly)}`}>
        {readOnly && (
          <input
            type={type}
            disabled={readOnly}
            className={`${inactiveInput()}`}
            placeholder={optionalPlaceholder}
          />
        )}
        <input
          required
          type={type}
          name={title}
          id={title}
          className={`${activeInput(readOnly)}`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
