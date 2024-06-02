import { usePostChildInfoMutation } from "@/api/user/user.query";
import { SuccessResInterface } from "@/types/resType";
import { toast } from "@/utils/toast";
import { usePathname, useRouter } from "next/navigation";

export const usePostChildInfoService = () => {
	const mutation = usePostChildInfoMutation();
	const pathname = usePathname();
	const router = useRouter();

	const onSuccess = (data: SuccessResInterface & { chl_id: number }) => {
		if (data?.result === "Success") {
			if (typeof window !== "undefined") {
				toast("Success", data?.message);
				router.push(pathname.includes("my-page") ? "/my-page/child-list" : `/test/process?childIdx=${data?.chl_id}`);
			}
		}
	};

	const onError = (error: any) => {
		toast("Error", error.response.data.message);
	};

	return { ...mutation, onSuccess, onError };
};
