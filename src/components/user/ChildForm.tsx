import Image from "next/image";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { PostChildInfoReqInterface } from "@/api/user/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const formSchema = z.object({
	chl_nck_nm: z.string().min(1),
	chl_sex: z.string().min(1),
	chl_age: z.string().min(1),
});

interface Props {
	info: string;
	buttonText: string;
	defaultValue: z.infer<typeof formSchema>;
	onSubmit: (value: PostChildInfoReqInterface) => void;
}

export default function ChildForm({ info, buttonText, defaultValue, onSubmit }: Props) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValue,
		mode: "onBlur",
	});

	return (
		<div className="px-[20px] py-[12px]">
			<p className="h-[72px] flex items-center justify-center bg-mint-10 text-mint-200 rounded-[8px] body1">{info}</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="chl_nck_nm"
						render={({ field }) => (
							<FormItem className="flex flex-col items-center gap-2 text-gray-10 head3 py-5 border-b border-gray-97">
								<Image src={"/icons/bubble_1.svg"} alt="bubble" width={28} height={26} />
								<FormLabel className="!head3">우리 아이 별명은</FormLabel>
								<div className="flex gap-[8px] items-center w-full">
									<FormControl>
										<Input
											placeholder="별명을 입력해주세요."
											{...field}
											className={`w-full !py-[11px] rounded-[6px] border !head5 border-gray-95 focus:border-orange-200 text-orange-200 placeholder:text-gray-60 ${
												field.value && "border-orange-200"
											}`}
										/>
									</FormControl>
									<span className="shrink-0">에요.</span>
								</div>
								<FormDescription className="body3 text-gray-80">
									*별명은 최대 10자로 한글, 영어, 숫자만 사용 가능해요
								</FormDescription>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="chl_sex"
						render={({ field }) => (
							<FormItem className="flex flex-col items-center gap-2 text-gray-10 head3 py-5 border-b border-gray-97">
								<Image src={"/icons/bubble_2.svg"} alt="bubble" width={28} height={26} />
								<FormLabel className="!head3">우리 아이 성별은</FormLabel>
								<div className="w-full flex gap-[8px] items-center">
									<FormControl>
										<div className="flex gap-[8px] w-full">
											<Button
												type="button"
												variant={"outline"}
												className={`!head5 w-full border-gray-95 text-gray-60 flex justify-center !items-center gap-1 ${
													field.value === "M" && "border-orange-200 text-orange-200 hover:text-orange-200"
												}`}
												onClick={() => field.onChange("M")}>
												<Image
													src={`/icons/male${field.value === "M" ? "_active" : ""}.svg`}
													alt="male"
													width={16}
													height={16}
												/>
												<span>남자</span>
											</Button>
											<Button
												type="button"
												variant={"outline"}
												className={`!head5 flex gap-1 !items-center justify-center border-gray-95 w-full text-gray-60 ${
													field.value === "F" && "border-orange-200 text-orange-200 hover:text-orange-200"
												}`}
												onClick={() => field.onChange("F")}>
												<Image
													src={`/icons/female${field.value === "F" ? "_active" : ""}.svg`}
													alt="female"
													width={16}
													height={16}
												/>
												<span>여자</span>
											</Button>
										</div>
									</FormControl>
									<span className="shrink-0">에요.</span>
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="chl_age"
						render={({ field }) => (
							<FormItem className="flex flex-col items-center gap-2 text-gray-10 head3 py-5">
								<Image src={"/icons/bubble_3.svg"} alt="bubble" width={28} height={26} />
								<FormLabel className="!head3">우리 아이는</FormLabel>
								<div className="flex gap-[8px] items-center w-full">
									<FormControl>
										<Select value={field.value} onValueChange={field.onChange}>
											<SelectTrigger
												className={`w-full !py-[11px] !head5 text-gray-60 border-gray-95 focus:border-orange-200 rounded-[6px] ${
													field.value && "border-orange-200 text-orange-200"
												}`}>
												<SelectValue
													placeholder="반을 선택해주세요."
													className="placeholder:text-gray-95 text-orange-200">
													{field.value ? `${field.value}세 반` : ""}
												</SelectValue>
											</SelectTrigger>
											<SelectContent className="bg-White shadow-lg rounded-[6px] border-none">
												{["4", "5", "6", "7"].map((el) => (
													<SelectItem value={el} key={el} className={`${field.value === el && "text-orange-200"}`}>
														{el}세 반
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<span className="shrink-0">에 갈거예요.</span>
								</div>
							</FormItem>
						)}
					/>
					<Button type="submit" variant={"big"} className="w-full mt-[12px]" disabled={!form.formState.isValid}>
						{buttonText}
					</Button>
				</form>
			</Form>
		</div>
	);
}
