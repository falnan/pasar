interface IButton {
  children: string;
  roundedFull?: boolean;
  disabled?: boolean;
  color?: string;
  gap?: string;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  custom?: string;
}

export default function Button({
  children = "Button",
  roundedFull,
  disabled,
  color = "bg-blue-600",
  gap = "gap-2",
  startDecorator,
  endDecorator,
  custom,
}: IButton) {
  return (
    <button
      {...(disabled && { disabled })}
      className={`${
        disabled
          ? "bg-slate-300 text-slate-500 dark:bg-slate-600 dark:text-slate-400"
          : color + " text-white"
      } ${
        roundedFull ? "rounded-full" : "rounded-md"
      } ${gap} ${custom} w-full px-4 py-1.5 font-semibold flex items-center`}
    >
      {startDecorator && <span>{startDecorator}</span>}
      {children}
      {endDecorator && <span>{endDecorator}</span>}
    </button>
  );
}
