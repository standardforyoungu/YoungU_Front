import { KdgnList } from "@/api/list.schema";
import { ResType } from "@/types/Restype";

export const usePostTestService = () => {
	// const { mutation } = usePostTestMutation();

	const onSuccess = (res: ResType<KdgnList[]>) => {
		switch (res.code) {
			case 100:
		}
	};

	return {
		// ...mutation,
		onSuccess,
	};
};
