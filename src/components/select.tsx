import { faCheck, faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEventHandler } from "react";

interface ISelect {
  id: string;
  label?: string;
  labelColor?: string;
  //   value: string;
  //   placeholder?: string;
  //   placeholderColor?: string;
  bgColor?: string;
  border?: boolean;
  borderColor?: string;
  onFocusColor?: string;
  error?: string;
  onChange?: ChangeEventHandler;
  endDecoration?: React.ReactNode;
  custom?: string;
  data: { value: string; name: string }[];
}

export default function Select({
  id,
  // type,
  label,
  labelColor,
  // value,
  // placeholder,
  // placeholderColor = "placeholder:text-slate-400",
  bgColor = "bg-white",
  border,
  borderColor = "border-slate-300",
  onFocusColor = "ring-blue-400",
  error,
  onChange,
  endDecoration,
  custom,
  data,
}: ISelect) {
  return (
    <div className="relative w-full flex flex-col gap-2">
      {endDecoration && (
        <div className="absolute top-2 right-3">{endDecoration}</div>
      )}
      {label && (
        <label id={id} className={`${labelColor} font-medium dark:text-white`}>
          {label}
        </label>
      )}
      <select
        className={`${
          error ? "border border-red-300" : border + " " + borderColor
        } ${custom} ${onFocusColor} ${bgColor} $placeholderColor w-full px-2 py-1.5 rounded-lg outline-none focus:ring-1 border text-slate-800`}
      >
        {data.map((i) => (
          <option key={i.value} value={i.value}>
            {i.name}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
}
