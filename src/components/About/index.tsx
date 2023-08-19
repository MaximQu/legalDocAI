import Button from "../../ui/Button";

const itemArr = [
	{
		id: 1,
		imgUrl: "/images/about-1.png",
		title: "Unmatched Efficiency",
		text: "Our AI algorithms can process vast amounts of legal documents in seconds, saving you valuable time and resources.",
	},
	{
		id: 2,
		imgUrl: "/images/about-2.png",
		title: "Enhanced Accuracy",
		text: "Say goodbye to human errors. LegalDocAI ensures precision and consistency in document analysis and review.",
	},
	{
		id: 3,
		imgUrl: "/images/about-3.png",
		title: "Document Analysis",
		text: "From contract review to case research, our AI system covers an extensive range of legal document types.",
	},
	{
		id: 4,
		imgUrl: "/images/about-4.png",
		title: "Data Security",
		text: "Your data is our priority. LegalDocAI implements robust security measures to safeguard sensitive information.",
	},
];

const About = () => {
	return (
		<section
			className="bg-[url('/images/about-bg.png')] bg-bottom bg-no-repeat lg:bg-80"
			id="about"
		>
			<div className="container">
				<h2 className="mb-4 text-[2.5rem]">WHO WE ARE </h2>
				<div className="mb-8 flex flex-col gap-8 font-noto md:mb-16 md:flex-row md:gap-16">
					<p className="max-w-[41rem] text-[1.375rem] leading-7">
						At LegalDocAI, we are a team of AI experts and legal
						professionals who understand the challenges faced by law
						firms, corporate legal departments, and individual
						practitioners.
					</p>
					<p className="max-w-[41rem] text-[1.375rem] leading-7">
						Our mission is to revolutionize the legal industry by
						providing innovative AI solutions that enhance
						productivity, accuracy, and efficiency.
					</p>
				</div>
				<h3 className="mb-8 text-center font-noto text-[2rem] font-medium md:text-left">
					WHY CHOOSE LegalDocAI ?
				</h3>
				<ul className="mb-10 flex flex-wrap justify-center gap-4 md:mb-24">
					{itemArr.map((item) => (
						<li
							key={item.id}
							className="isolate max-w-[19rem] rounded-3xl bg-[rgba(8,12,84,0.40)] px-3 py-5 text-center backdrop-blur-md before:absolute before:inset-0 before:-z-10 before:h-full before:w-full before:bg-gradient-radial before:from-[#30327A] before:to-transparent before:to-100%"
						>
							<img
								className="mx-auto mb-6 h-[7.5rem] w-[7.5rem]"
								src={item.imgUrl}
								alt="Unmatched Efficiency"
							/>
							<h4 className="mb-3 text-2xl">{item.title}</h4>
							<p className="leading-6">{item.text}</p>
						</li>
					))}
				</ul>
				<Button>Learn more</Button>
			</div>
		</section>
	);
};

export default About;
