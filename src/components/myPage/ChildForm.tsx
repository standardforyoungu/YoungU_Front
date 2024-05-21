import Image from "next/image";
import React from "react";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { PostChildInfoReqInterface } from "@/api/myPage/myPage.schema";

interface Props {
	form: UseFormReturn<PostChildInfoReqInterface>;
	onSubmit: (value: PostChildInfoReqInterface) => void;
}

export default function ChildForm({ form, onSubmit }: Props) {
	const isValid = !!(form.getValues("chl_age") && form.getValues("chl_sex") && form.getValues("chl_nck_nm"));

	return (
		<div className="px-[20px] py-[12px]">
			<p className="h-[72px] flex items-center justify-center bg-mint-10 text-mint-200 rounded-[8px] body1">
				아이 정보를 수정할 수 있어요
			</p>
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
											className={`w-full h-[40px] rounded-[6px] border border-gray-95 focus:border-orange-200 text-orange-200 head5 placeholder:text-gray-95 ${
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
												variant={"blank"}
												className={`head5 w-full ${field.value === "남아" && "border-orange-200 text-orange-200"}`}
												onClick={() => field.onChange("남아")}>
												♂ 남자
											</Button>
											<Button
												type="button"
												variant={"blank"}
												className={`head5 flex gap-1 w-full ${
													field.value === "여아" && "border-orange-200 text-orange-200"
												}`}
												onClick={() => field.onChange("여아")}>
												<span className="rotate-45">♀</span> 여자
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
										<Select onValueChange={field.onChange}>
											<SelectTrigger
												className={`w-full text-gray-95 border-gray-95 focus:border-orange-200 rounded-[6px] ${
													field.value && "border-orange-200 text-orange-200"
												}`}>
												<SelectValue
													placeholder="반을 선택해주세요."
													className="placeholder:text-gray-95 text-orange-200"
												/>
											</SelectTrigger>
											<SelectContent className="bg-WHITE shadow-lg rounded-[6px] border-none">
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
					<Button type="submit" className="head4 text-WHITE w-full mt-[12px]" disabled={!isValid}>
						저장하기
					</Button>
				</form>
			</Form>
		</div>
	);
}
