import Button from "../../ui/Button";
import Input from "../../ui/Input";

const FeedBack = () => {
	return (
		<section
			className="container-big relative isolate bg-inherit bg-[top_-3rem_right] before:absolute before:right-0 before:top-0 before:-z-10 before:h-[700px] before:w-[600px] before:bg-[url('/images/feedback-bg.png')] before:bg-contain before:bg-no-repeat before:opacity-30 md:h-screen lg:before:h-[1042px] lg:before:w-[900px] 2xl:before:opacity-100"
			id="feedback"
		>
			<div className="container">
				<div className="pt-0 md:pt-20 lg:pt-40">
					<h2 className="mb-4 md:text-[2.5rem] text-3xl uppercase">
						GET IN TOUCH
					</h2>
					<p className="mb-10 max-w-[36.875rem] font-noto text-lg">
						Ready to experience the future of legal document processing? Contact us today for a personalized demo and see LegalDocAI in action.
					</p>
					<form
						className="flex max-w-[39.375rem] flex-col justify-end gap-8"
						autoComplete="true"
					>
						<Input
							type="email"
							name="email"
							placeholder="Email"
							required
						/>
						<Input
							name="fullName"
							placeholder="Full name"
							required
						/>
						<Input
							type="number"
							name="phone"
							placeholder="Number"
							maxLength={12}
							required
						/>
						<Button type="submit" className="mr-0">
							Schedule demo
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default FeedBack;
