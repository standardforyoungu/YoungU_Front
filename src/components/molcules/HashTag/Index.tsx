import React from "react";

interface HashTagPropsInterface {
	text: string;
}

export function HashTag({ text }: HashTagPropsInterface) {
	return (
		<div className="text-orange-100 head6 bg-White text-center px-[10px] py-[5px] rounded-[4px] m-[4px]">
			<span className="before:contents-['#']">{text}</span>
		</div>
	);
}

export default HashTag;
