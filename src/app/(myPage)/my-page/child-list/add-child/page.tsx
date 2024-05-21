"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { usePostChildInfoService } from "@/services/myPage/usePostChildInfoService";
import ChildForm from "@/components/myPage/ChildForm";

const formSchema = z.object({
	chl_nck_nm: z.string(),
	chl_sex: z.string(),
	chl_age: z.string(),
});

export default function AddChild() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			chl_nck_nm: "",
			chl_sex: "",
			chl_age: "",
		},
	});
	const { mutate, onSuccess, onError } = usePostChildInfoService();

	const onSubmit = (value: z.infer<typeof formSchema>) => {
		mutate(value, { onSuccess, onError });
	};

	return <ChildForm form={form} onSubmit={onSubmit} />;
}
