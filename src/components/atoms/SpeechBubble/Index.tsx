"use client";
import React from "react";

interface SpeechBubbleProps {
	text: string;
}

export function SpeechBubble({ text }: SpeechBubbleProps) {
	return (
		<div
			className="relative w-[28px] h-[22px] bg-orange-10 flex justify-center items-center text-orange-100 rounded body3
                       after:absolute after:content-[url('/icons/triangle.svg')] after:bg-[length:6px_4px] after:-bottom-[8px]">
			{text}
		</div>
	);
}
