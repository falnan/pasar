import { ChangeEventHandler } from "react";

interface IInputText {
  id: string;
  type?: string;
  label?: string;
  labelColor?: string;
  value: string;
  placeholder?: string;
  placeholderColor?: string;
  bgColor?: string;
  border?: boolean;
  borderColor?: string;
  onFocusColor?: string;
  error?: string;
  onChange?: ChangeEventHandler;
  endDecoration?: React.ReactNode;
  custom?: string;
}

export default function InputText({
  id,
  type,
  label,
  labelColor = "text-slate-800",
  value,
  placeholder,
  placeholderColor = "placeholder:text-slate-400",
  bgColor = "bg-white",
  border,
  borderColor = "border-slate-300",
  onFocusColor = "ring-blue-400",
  error,
  onChange,
  endDecoration,
  custom,
}: IInputText) {
  return (
    <div className="relative w-full flex flex-col gap-1">
      {endDecoration && (
        <div className="absolute top-2 right-3">{endDecoration}</div>
      )}
      {label && (
        <label id={id} className={`${labelColor} font-medium`}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${
          error ? "border border-red-300" : border + " " + borderColor
        } ${custom} ${onFocusColor} ${bgColor} ${placeholderColor} w-full px-2 py-1.5 rounded-lg outline-none focus:ring-1 border text-slate-800`}
      />
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}
