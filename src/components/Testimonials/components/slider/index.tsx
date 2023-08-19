import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";

const sliderArr = [
	{
		imgUrl: "images/avatar-1.jpg",
		name: "John Turner",
		position: "Paralegal",
		text: "I was initially skeptical about AI's role in the legal industry, but after using this platform, I am now a true believer. It simplifies the document analysis process, making my job easier and more enjoyable. Thanks to this AI solution, our paralegal team can now deliver results faster and more efficiently.",
	},
	{
		imgUrl: "images/avatar-2.jpg",
		name: "Sarah Johnson",
		position: "Partner at Johnson & Associates",
		text: "LegalDocAI has transformed the way we handle legal documents. The contract review feature saves us hours of work and provides invaluable insights. Highly recommended!",
	},
	{
		imgUrl: "images/avatar-3.jpg",
		name: "Sasha Gray",
		position: "ProHub",
		text: "I was initially skeptical about AI's role in the legal industry, but after using this platform, I am now a true believer. It simplifies the document analysis process, making my job easier and more enjoyable. Thanks to this AI solution, our paralegal team can now deliver results faster and more efficiently.",
	},
	{
		imgUrl: "images/avatar-4.jpg",
		name: "Mark Stoltengerg",
		position: "SpaceY",
		text: "LegalDocAI has transformed the way we handle legal documents. The contract review feature saves us hours of work and provides invaluable insights. Highly recommended!",
	},
];

const Slider = ({
	navigationPrevRef,
	navigationNextRef,
}: {
	navigationPrevRef: React.RefObject<HTMLButtonElement>;
	navigationNextRef: React.RefObject<HTMLButtonElement>;
}) => {
	return (
		<Swiper
			className="max-w-screen overflow-hidden"
			modules={[Navigation]}
			spaceBetween={24}
			slidesPerView={2}
            autoHeight={true}
			navigation={{
				prevEl: navigationPrevRef.current,
				nextEl: navigationNextRef.current,
			}}
			onBeforeInit={(swiper) => {
				if(!swiper) return
                 // @ts-ignore
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                 // @ts-ignore
				swiper.params.navigation.nextEl = navigationNextRef.current;
			}}
			grabCursor={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			}}
		>
			{sliderArr.map((item, index) => (
				<SwiperSlide
					key={index}
					className="isolate z-10 flex min-h-[395px] flex-col items-center justify-center rounded-xl bg-[rgba(8,12,84,0.40)] p-5 text-center font-noto backdrop-blur-md md:px-12 md:py-7 "
				>
					<img
						className="mx-auto mb-4 h-[6.25rem] w-[6.25rem] rounded-full object-cover object-top"
						src={item.imgUrl}
						alt={item.name}
					/>
					<p className="mb-2 text-[1.125rem]">{item.name}</p>
					<span className="mb-6 block text-[1.125rem]">
						{item.position}
					</span>
					<q className="mx-auto max-w-[35.3125rem] text-[1.125rem]">
						{item.text}
					</q>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Slider;
