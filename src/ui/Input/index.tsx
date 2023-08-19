import { twMerge } from "tailwind-merge";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
	type = "text",
	className = "",
	...inputProps
}) => {
	return (
		<input
			type={type}
			className={twMerge(
				"w-full rounded-full border bg-primary border-[#2F327C]     px-5 py-3 text-lg text-white outline-none duration-200 placeholder:text-lg focus:border-[#3C3FEC] md:px-10 md:py-5",
				className,
			)}
			{...inputProps}
		/>
	);
};
export default Input;
