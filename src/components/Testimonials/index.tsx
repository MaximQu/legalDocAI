import Slider from "./components/slider";
import { useRef } from "react";

const Testimonials = () => {
	const navigationPrevRef = useRef<HTMLButtonElement>(null);
	const navigationNextRef = useRef<HTMLButtonElement>(null);

	return (
		<section className="bg-[url('/images/testimonials-bg.png')] bg-center bg-no-repeat lg:bg-70">
			<div className="container relative">
				<h2 className="mb-10 text-center text-xl uppercase md:text-3xl lg:text-[2.5rem]">
					CLIENT TESTIMONIALS
				</h2>
				<div className="flex justify-between absolute md:-top-3 top-28 z-10 md:px-8 px-14 left-0 w-full cursor-pointer ">
					<button
						className="rounded-full border md:border-white p-4 border-transparent"
						ref={navigationPrevRef}
					>
						<svg
							width="27"
							height="23"
							viewBox="0 0 27 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.936817 10.1893C0.35103 10.7751 0.35103 11.7249 0.936817 12.3107L10.4828 21.8566C11.0685 22.4424 12.0183 22.4424 12.6041 21.8566C13.1899 21.2708 13.1899 20.3211 12.6041 19.7353L4.1188 11.25L12.6041 2.76472C13.1899 2.17893 13.1899 1.22919 12.6041 0.643398C12.0183 0.0576115 11.0685 0.0576115 10.4828 0.643398L0.936817 10.1893ZM26.0684 9.75L1.99748 9.75V12.75L26.0684 12.75V9.75Z"
								fill="white"
							/>
						</svg>
					</button>
					<button
						className="rotate-180 rounded-full border md:border-white p-4 border-transparent"
						ref={navigationNextRef}
					>
						<svg
							width="27"
							height="23"
							viewBox="0 0 27 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.936817 10.1893C0.35103 10.7751 0.35103 11.7249 0.936817 12.3107L10.4828 21.8566C11.0685 22.4424 12.0183 22.4424 12.6041 21.8566C13.1899 21.2708 13.1899 20.3211 12.6041 19.7353L4.1188 11.25L12.6041 2.76472C13.1899 2.17893 13.1899 1.22919 12.6041 0.643398C12.0183 0.0576115 11.0685 0.0576115 10.4828 0.643398L0.936817 10.1893ZM26.0684 9.75L1.99748 9.75V12.75L26.0684 12.75V9.75Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
				<Slider
					navigationPrevRef={navigationPrevRef}
					navigationNextRef={navigationNextRef}
				/>
			</div>
		</section>
	);
};

export default Testimonials;
