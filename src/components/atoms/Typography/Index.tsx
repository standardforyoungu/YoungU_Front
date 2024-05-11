"use client";

import { TypoEnum } from "@/types/commons";
import React from "react";

interface TypographyInterface {
	variant: TypoEnum;
	children: React.ReactNode;
	color?: string;
	weight?: string;
}

function Typography({ variant, children, color, weight }: TypographyInterface) {
	const fontSize = `text-${variant}`;
	return <p className="text-Display1">{children}</p>;
}

export default Typography;
