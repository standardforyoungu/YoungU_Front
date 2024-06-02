import Image from "next/image";
import React from "react";

interface IBadge {
	iconHref?: string;
	title: string;
	highlight: string;
}

export default function IconBadge(props: IBadge) {
	const { iconHref, title, highlight } = props;
	return (
		<div className="w-auto inline-flex gap-[2px] px-[1rem] py-[0.5rem] rounded-[4px] bg-gray-99">
			{iconHref ? (
				<div className="w-4 h-4 relative">
					<Image src={`${iconHref}`} alt="icon" width={16} height={16} />
				</div>
			) : null}
			<p className="body3 text-gray-60">
				{title}: <span className="text-orange-100">{highlight}</span>
			</p>
		</div>
	);
}
