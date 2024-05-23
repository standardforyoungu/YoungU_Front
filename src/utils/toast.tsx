import Image from "next/image";
import { toast as toastify } from "react-toastify";

export const toast = (type: "Success" | "Error", message: string) => {
	if (type === "Success") {
		return toastify.success(message, {
			icon: () => <Image className=" text-start" src="/icons/round_checkbox.svg" alt="icon" width={22} height={22} />,
		});
	} else {
		return toastify.error(message);
	}
};
