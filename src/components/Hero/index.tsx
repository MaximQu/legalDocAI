import Button from "../../ui/Button";

const Hero = () => {
	return (
		<section className="relative isolate overflow-hidden bg-[url('/images/hero-bg.png')] bg-contain bg-[center_top_4rem] bg-no-repeat before:absolute before:inset-x-0 before:-z-10 before:mx-auto before:hidden before:h-[35.75rem] before:w-[65.75rem] before:rounded-full before:bg-primary/90 before:blur-3xl md:before:block">
			<div className="container-big flex flex-col items-start justify-center pt-20 md:pb-20 md:pt-44 lg:pb-72 ">
				<h1 className="mx-auto mb-6 max-w-[70rem] text-center text-3xl font-bold uppercase lg:text-[3.125rem] lg:leading-tight">
					EFFICIENT LEGAL DOCUMENT PROCESSING: <br />
					<span className="bg-gradient-to-r from-blue-500 to-pink-600 bg-270 bg-clip-text text-transparent">
						AL SOLUTIONS
					</span>{" "}
					AT YOUR FINGERTIPS
				</h1>
				<p className="mx-auto mb-10 max-w-[53rem] text-center text-[1.375rem] leading-8 opacity-80 ">
					Streamline your legal workflow like never before with our
					cutting-edge AI technology. Say goodbye to tedious manual
					document handling and embrace a new era of efficiency and
					accuracy.
				</p>
				<Button>GET STARTED</Button>
			</div>
		</section>
	);
};

export default Hero;
