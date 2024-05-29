import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  ",
	{
		variants: {
			variant: {
				// orange-100 버튼 btn_large
				default:
					"bg-orange-100 !h-[56px] text-White !head4 disabled:bg-gray-90 disabled:text-White hover:bg-orange-200",
				// default와 동일
				primary:
					"bg-orange-100 !h-[56px] text-White !head4 disabled:bg-gray-90 disabled:text-White hover:bg-orange-200",
				// orange-10 버튼 btn_list
				secondary:
					"bg-orange-10 !h-[36px] text-orange-100 !head6 disabled:bg-gray-99 disabled:text-gray-80 hover:bg-orange-15",
				outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				blank: "bg-White hover:border-orange-100 hover:text-orange-100 border-gray-95 border-[1px]",
				disable: "bg-gray-99 text-gray-80",
			},
			size: {
				default: "h-[40px] px-4 py-2",
				lg: "w-full h-[56px] text-[1rem]",
				md: "h-[40px] max-w-[180px] w-full",
				sm: "h-[41px] max-w-[150px] w-full",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
