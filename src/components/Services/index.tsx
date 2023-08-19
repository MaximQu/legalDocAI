import Button from "../../ui/Button";

const firstItem =
	"lg:[&>*:nth-child(1)]:max-w-[24.0625rem] [&>*:nth-child(1)]:max-w-[38.125rem] [&>*:nth-child(1)]:bottom-0 [&>*:nth-child(1)]:left-0";
const secondtItem =
	"lg:[&>*:nth-child(2)]:max-w-[24.0625rem] [&>*:nth-child(2)]:max-w-[38.125rem] [&>*:nth-child(2)]:top-44";
const thirdItem =
	"[&>*:nth-child(3)]:max-w-[38.125rem] [&>*:nth-child(3)]:inset-x-0 [&>*:nth-child(3)]:mx-auto";
const fourthItem =
	"lg:[&>*:nth-child(4)]:max-w-[24.0625rem] [&>*:nth-child(4)]:max-w-[38.125rem] [&>*:nth-child(4)]:top-44 [&>*:nth-child(4)]:right-0";
const fifthItem =
	"lg:[&>*:nth-child(5)]:max-w-[24.0625rem] [&>*:nth-child(5)]:max-w-[38.125rem] [&>*:nth-child(5)]:bottom-0 [&>*:nth-child(5)]:right-0";

const itemArr = [
	{
		id: 1,
		title: "LEGAL RESERCH SUPPORT",
		text: "Our AI-powered research assistance tool assists in finding relevant case law, statutes, and precedents, enabling you to build stronger legal arguments.",
	},
	{
		id: 2,
		title: "CONTACT REVIEW & ANALYSIS",
		text: "Let our AI take care of contract review. We extract crucial clauses, identify potential risks, and provide insightful recommendations, so you can make informed decisions with confidence.",
	},
	{
		id: 3,
		title: "E- DISCOVERY MADE EASY",
		text: "Navigating through extensive data sets is no longer a challenge. Our AI-driven E-Discovery service efficiently identifies relevant documents and evidence, empowering your legal team.",
	},
	{
		id: 4,
		title: "DOCUMENT SUMMARIZATION",
		text: "Get to the heart of legal documents swiftly. LegalDocAI generates concise summaries, highlighting key points and critical information in a fraction of the time.",
	},
	{
		id: 5,
		title: "AUTOMATED DOCUMENT GENERATION",
		text: "Create customized legal documents effortlessly. LegalDocAI automates the document generation process, providing templates tailored to your needs.",
	},
];

const Services = () => {
	return (
		<section
			className="relative min-h-screen overflow-hidden bg-[center_top_6rem] before:absolute before:top-0 before:left-0 before:right-0 before:mx-auto before:h-[700px] before:w-[700px] before:bg-[url('/images/services-bg.png')] before:bg-contain before:bg-no-repeat before:opacity-50 lg:bg-60 lg:before:h-[1000px] lg:before:w-[1000px] lg:before:opacity-100"
			id="services"
		>
			<div className="container">
				<h2 className="mb-12 text-center text-3xl uppercase md:text-[3.125rem]">
					OUR SERVICES
				</h2>
				<ul
					className={`${firstItem} ${secondtItem} ${thirdItem} ${fourthItem} ${fifthItem} relative mb-10 flex min-h-[37.5rem] flex-col items-center gap-5 lg:mb-32 lg:items-stretch`}
				>
					{itemArr.map((item) => (
						<li
							key={item.id}
							className="text-center font-noto lg:absolute"
						>
							<h3 className="mx-auto mb-4 max-w-[23.75rem] text-[1.375rem] uppercase text-[#C8C0F5]">
								{item.title}
							</h3>
							<p className="text-[1.125rem] text-[#D8D4D4]">
								{item.text}
							</p>
						</li>
					))}
				</ul>
				<Button>Learn more</Button>
			</div>
		</section>
	);
};

export default Services;
