import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";
const itemStyles =
	"relative w-fit before:absolute before:bottom-0 before:right-0 before:block before:h-[2px] before:w-0 before:bg-white before:transition-all hover:before:left-0 hover:before:right-auto hover:before:w-full";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeFunc = () => setIsOpen(false);
	const openFunc = () => setIsOpen(true);

	const isFocusible = isOpen ? 0 : -1;
	return (
		<header className="fixed inset-x-0 top-0 z-50 mx-auto bg-primary/80 font-noto text-lg backdrop-blur-md ">
			<div className="container flex gap-6 py-3  md:flex-row md:gap-10 md:py-7">
				<div className="flex w-full items-center justify-between gap-6 md:w-auto">
					<Link className=" flex items-center gap-5" to="/">
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.5016 1.31656C11.5514 0.703833 12.4486 0.703852 12.4984 1.31656L12.8596 5.76518C12.9659 7.07509 14.5858 7.62464 15.4672 6.64985L18.429 3.37449C18.8427 2.9169 19.5562 3.46797 19.218 3.98391L16.9865 7.38876C16.2465 8.51796 17.2583 9.9736 18.5746 9.67344L22.4486 8.79006C23.0531 8.65222 23.3184 9.52022 22.7401 9.74389L19.2312 11.101C17.9526 11.5955 17.9526 13.4045 19.2312 13.899L22.7401 15.2561C23.3184 15.4798 23.0531 16.3478 22.4486 16.2099L18.5746 15.3266C17.2583 15.0264 16.2465 16.482 16.9865 17.6112L19.218 21.0161C19.5562 21.532 18.8428 22.0831 18.429 21.6255L15.4672 18.3501C14.5858 17.3754 12.9659 17.9249 12.8596 19.2348L12.4984 23.6834C12.4486 24.2962 11.5514 24.2962 11.5016 23.6834L11.1404 19.2348C11.0341 17.9249 9.41423 17.3754 8.53278 18.3501L5.57103 21.6255C5.15726 22.0831 4.44382 21.532 4.78197 21.0161L7.01346 17.6112C7.75352 16.482 6.74172 15.0264 5.42541 15.3266L1.55143 16.2099C0.9469 16.3478 0.681593 15.4798 1.25991 15.2561L4.76883 13.899C6.04739 13.4045 6.04739 11.5955 4.76883 11.101L1.25991 9.74389C0.681556 9.52021 0.94694 8.65223 1.55142 8.79006L5.42541 9.67344C6.74172 9.9736 7.75352 8.51796 7.01346 7.38876L4.78197 3.98391C4.44384 3.46798 5.15724 2.91688 5.57103 3.37449L8.53278 6.64985C9.41423 7.62464 11.0341 7.07508 11.1404 5.76518L11.5016 1.31656Z"
								fill="url(#paint0_linear_34_102)"
								stroke="url(#paint1_linear_34_102)"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_34_102"
									x1="37.9089"
									y1="11.4496"
									x2="-13.0155"
									y2="11.5071"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#E40580" />
									<stop offset="1" stopColor="#009FE3" />
								</linearGradient>
								<linearGradient
									id="paint1_linear_34_102"
									x1="37.9089"
									y1="11.4496"
									x2="-13.0155"
									y2="11.5071"
									gradientUnits="userSpaceOnUse"
								>
									<stop stopColor="#E40580" />
									<stop offset="1" stopColor="#009FE3" />
								</linearGradient>
							</defs>
						</svg>
						<span className="bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-3xl text-transparent">
							LegalDocAI
						</span>
					</Link>
					<button
						className="relative h-6 w-6 md:hidden"
						onClick={openFunc}
					>
						<div className="absolute inset-0 top-3 m-auto h-0.5 w-[80%] bg-white"></div>
						<div className="absolute inset-0 m-auto h-0.5 w-[80%] bg-white"></div>
						<div className="absolute inset-0 bottom-3 m-auto h-0.5 w-[80%] bg-white"></div>
					</button>
				</div>
				<nav
					className={twMerge(
						"absolute right-[100vw] top-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-primary md:static md:right-0 md:h-auto md:w-full md:flex-row md:justify-between md:gap-4 md:bg-transparent",
						isOpen && "right-0",
					)}
				>
					<ul className="flex flex-col items-center gap-4 md:ml-10 md:flex-row md:justify-center lg:ml-44 xl:ml-64 xl:gap-12 ">
						<li className={itemStyles}>
							<HashLink smooth to="#about">
								ABOUT US
							</HashLink>
						</li>
						<li className={itemStyles}>
							<HashLink smooth to="#services">
								SERVICES
							</HashLink>
						</li>
						<li className={itemStyles}>
							<HashLink smooth to="#feedback">
								CONTACT US
							</HashLink>
						</li>
					</ul>
					<Link
						className="flex items-center gap-4 uppercase hover:underline"
						to="/logIn"
					>
						<svg
							width="23"
							height="23"
							viewBox="0 0 23 23"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.5 17.5001V16.5C6.5 13.7386 8.73858 11.5 11.5 11.5C14.2614 11.5 16.5 13.7386 16.5 16.5V17.5001"
								stroke="white"
								strokeLinecap="round"
							/>
							<path
								d="M11.5 11.5001C13.1569 11.5001 14.5 10.1569 14.5 8.50003C14.5 6.84316 13.1569 5.5 11.5 5.5C9.8431 5.5 8.5 6.84316 8.5 8.50003C8.5 10.1569 9.8431 11.5001 11.5 11.5001Z"
								stroke="white"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<rect
								x="1"
								y="1"
								width="21"
								height="21"
								rx="4.5"
								stroke="white"
							/>
						</svg>
						Log in
					</Link>
					<button
						className="relative h-6 w-6 md:hidden"
						onClick={closeFunc}
						tabIndex={isFocusible}
					>
						<div className="absolute inset-0 m-auto h-0.5 w-[80%] rotate-45 bg-white"></div>
						<div className="absolute inset-0 m-auto h-0.5 w-[80%] -rotate-45 bg-white"></div>
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
