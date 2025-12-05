import type { ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset";
interface CommonButtonProps {
	className?: string;
	type?: ButtonType;
	ariaLabel?: string;
	children: ReactNode;
	onClick?: () => void;
  disabled?: boolean;
}

export const CommonButton = ({
	className,
	type = "button",
	children,
	ariaLabel,
	onClick,
  disabled = false,
}: CommonButtonProps) => {
	return (
		<button
			className={`${className} hover:cursor-pointer bg-blue-600 text-white rounded`}
			type={type}
			aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
		>
			{children}
		</button>
	);
};
