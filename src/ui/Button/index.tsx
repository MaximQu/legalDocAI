import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
	children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
	type = "button",
	className,
	children,
	...buttonProps
}) => {
	return (
		<button
			type={type}
			className={twMerge(
				"mx-auto block w-full md:max-w-[16.6875rem]  rounded-full bg-secondary md:p-5 p-3 uppercase text-white backdrop-blur-sm transition-colors hover:bg-secondary/75",
				className,
			)}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

export default Button;
