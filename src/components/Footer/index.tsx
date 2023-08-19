import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
	return (
		<footer className="bg-[url('/images/footer-bg.png')] bg-center bg-no-repeat py-16 font-noto md:pb-24 md:pt-20 pt-10">
			<div className="container flex flex-wrap justify-center gap-7 sm:justify-between">
				<div className="">
					<Link className="mb-2 flex items-center gap-5" to="/">
						<svg
							width="35"
							height="35"
							viewBox="0 0 25 23"
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
						<span className="bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-[2.6875rem] text-transparent">
							LegalDocAI
						</span>
					</Link>
					<Link
						className="mb-2 block text-center hover:underline"
						to="/"
					>
						Privacy Policy
					</Link>
					<p>&copy; 2023 LegalDocAI. All rights reserved</p>
				</div>
				<nav>
					<ul className="flex flex-col items-center md:gap-6 gap-3 text-[1.25rem] sm:items-start">
						<li className="relative w-fit before:absolute before:bottom-0 before:right-0 before:block before:h-[2px] before:w-0 before:bg-white before:transition-all hover:before:left-0 hover:before:right-auto hover:before:w-full">
							<HashLink smooth to="#about">
								ABOUT US
							</HashLink>
						</li>
						<li className="relative w-fit before:absolute before:bottom-0 before:right-0 before:block before:h-[2px] before:w-0 before:bg-white before:transition-all hover:before:left-0 hover:before:right-auto hover:before:w-full">
							<HashLink smooth to="#services">
								SERVICES
							</HashLink>
						</li>
						<li className="relative w-fit before:absolute before:bottom-0 before:right-0 before:block before:h-[2px] before:w-0 before:bg-white before:transition-all hover:before:left-0 hover:before:right-auto hover:before:w-full">
							<HashLink smooth to="#feedback">
								CONTACT US
							</HashLink>
						</li>
					</ul>
				</nav>
				<div className="flex flex-col items-center md:gap-6 gap-3 text-[1.25rem] sm:items-start">
					<a
						className="w-fit border-b border-transparent transition-colors hover:border-white"
						href="tel:+380960000000"
					>
						UK : +38 096 000 0000
					</a>
					<a
						className="w-fit border-b border-transparent transition-colors hover:border-white"
						href="mailto:legal.doc.al_@gmail.com"
					>
						LEGAL.DOC.AL_@GMAIL.COM
					</a>
					<a
						href="https://goo.gl/maps/XeNWWpYHXJuR32Q8A"
						target="_blank"
						rel="noopener noreferrer"
					>
						<address className="w-fit border-b border-transparent not-italic transition-colors hover:border-white">
							Ukraine.Kiev
						</address>
					</a>
				</div>
				<ul className="flex flex-col md:gap-5 gap-3">
					<li className="group">
						<a
							className="flex items-center gap-4 uppercase "
							href="http://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							title="Facebook"
						>
							<svg
								className="group-hover:fill-secondary"
								width="27"
								height="27"
								viewBox="0 0 27 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.6267 27.0001H11.1912V17.7719H10.0437C9.34309 17.7719 8.77539 17.1736 8.77539 16.4354V14.017C8.77539 13.2787 9.34309 12.6805 10.0437 12.6805H11.1912V9.49831C11.1912 6.8635 13.2204 4.7251 15.7208 4.7251H18.9821C19.6827 4.7251 20.2504 5.32333 20.2504 6.06159V9.11647C20.2504 9.85472 19.6827 10.453 18.9821 10.453H16.6267V12.6805H18.8975C19.2841 12.6805 19.6344 12.8587 19.8759 13.1641C20.1175 13.4696 20.2142 13.8769 20.1417 14.2715L19.6827 16.69C19.5619 17.3137 19.0425 17.7592 18.4385 17.7592H16.6267V27.0001ZM13.003 25.0908H14.8149V15.8626H18.0037L18.2453 14.5897H14.8269V9.88016C14.8269 9.1419 15.3947 8.54367 16.0952 8.54367H18.4506V6.63438H15.7208C14.223 6.63438 13.003 7.91997 13.003 9.49831V14.5897H10.5872V15.8626H13.003V25.0908Z"
									fill="white"
								/>
								<path
									d="M16.8358 27H9.48924C2.84065 27 0 24.0865 0 17.2674V9.73256C0 2.91349 2.84065 0 9.48924 0H16.8358C23.4844 0 26.325 2.91349 26.325 9.73256V17.2674C26.325 24.0865 23.4844 27 16.8358 27ZM9.48924 1.88372C3.84467 1.88372 1.83663 3.94326 1.83663 9.73256V17.2674C1.83663 23.0567 3.84467 25.1163 9.48924 25.1163H16.8358C22.4803 25.1163 24.4884 23.0567 24.4884 17.2674V9.73256C24.4884 3.94326 22.4803 1.88372 16.8358 1.88372H9.48924Z"
									fill="white"
								/>
							</svg>
							<span className="border-b border-transparent transition-colors group-hover:border-white">
								Facebook
							</span>
						</a>
					</li>
					<li className="group">
						<a
							className="flex items-center gap-4 uppercase"
							href="http://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							title="Instagram"
						>
							<svg
								width="28"
								height="27"
								viewBox="0 0 28 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.7412 25.85H18.2337C24.4775 25.85 26.975 23.42 26.975 17.345V10.055C26.975 3.98005 24.4775 1.55005 18.2337 1.55005H10.7412C4.4975 1.55005 2 3.98005 2 10.055V17.345C2 23.42 4.4975 25.85 10.7412 25.85Z"
									stroke="white"
									strokeWidth="2.025"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M14.4871 18.4249C16.9103 18.4249 18.8746 16.4606 18.8746 14.0374C18.8746 11.6142 16.9103 9.6499 14.4871 9.6499C12.064 9.6499 10.0996 11.6142 10.0996 14.0374C10.0996 16.4606 12.064 18.4249 14.4871 18.4249Z"
									stroke="white"
									strokeWidth="2.025"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M21.5752 7.62476H21.5899"
									stroke="white"
									strokeWidth="1.6875"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="border-b border-transparent transition-colors group-hover:border-white">
								Instagram
							</span>
						</a>
					</li>
					<li className="group">
						<a
							className="flex items-center gap-4 uppercase"
							href="http://x.com"
							target="_blank"
							rel="noopener noreferrer"
							title="X (Twitter)"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								width={27}
								height={27}
								fill="white"
							>
								<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
							</svg>
							<span className="border-b border-transparent transition-colors group-hover:border-white">
								X (Twitter)
							</span>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
