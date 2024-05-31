import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-[8px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground text-white hover:bg-primary/90",
				destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				outlinePrimary: "text-primary border border-primary bg-background hover:bg-accent/60",
				secondary: "bg-accent text-primary hover:bg-slate-100",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				disable: "bg-slate-100 text-slate-400 cursor-default",
				"list-big":
					"bg-orange-10 text-orange-100 !head6 !h-[36px] hover:bg-orange-15 disabled:bg-gray-99 disabled:text-gray-80",
				big: "bg-orange-100 text-White !head4 !h-[56px] hover:bg-orange-200 disabled:bg-gray-90",
				medium: "bg-orange-100 text-White !head5 !h-[40px] hover:bg-orange-200 disabled:bg-gray-95 disabled:bg-gray-60",
				popup: "bg-orange-100 text-White !head5 !h-[40px]",
				"popup-secondary": "bg-gray-95 text-gray-60 !head5 !h-[40px]",
				choice: "border-gray-95 border hover:border-orange-100 hover:text-orange-100 text-gray-60 !body2",
			},
			size: {
				default: "h-12 px-5 py-2",
				sm: "h-9 rounded-md px-4",
				lg: "h-14 rounded-md px-10",
				icon: "h-10 w-10",
				iconSm: "h-[25px] w-[25px]",
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
