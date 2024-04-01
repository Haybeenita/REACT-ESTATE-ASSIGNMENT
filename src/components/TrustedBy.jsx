import { Gradient200 } from "../assets/icons";

export function TrustedBy() {
	let companyImages;

	companyImages = ["/img1.svg", "/img2.svg", "/img3.svg", "/img4.svg", "/img5.svg", "/img6.svg"];

	return (
		<section className="flex justify-center item-center">
			<div className="w-full max-w-[90rem] mt-28 mb-[2.563rem] flex-col items-center gap-[3.75rem] flex py-12 relative">
				<figure className="absolute -top-2 left-44">
					<Gradient200 />
				</figure>

				<p className="text-base font-medium text-[#64748B]">
					Trusted by 100+ Companies across the globe!
				</p>

				<ul className="flex items-center justify-center gap-[5rem] ">
					{companyImages.map((image, index) => {
						return (
							<li
								key={index}
								className="flex items-center justify-center w-[7.5rem] h-11 "
							>
								<img src={image} 
								className="grayscale"
								
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
