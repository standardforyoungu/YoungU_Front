"use client";
import { useGetRecommendKdgnListQuery } from "@/api/list/list.query";
import { KdgnListInterface } from "@/api/list/list.schema";
import ListItem from "@/components/molcules/ListItem/Index";
import AnimalIcon from "../../../../public/images/animal_hedgehog.svg";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function ResultPage() {
	const { data, isSuccess } = useGetRecommendKdgnListQuery("ISTJ");

	if (isSuccess) {
		console.log(data);
	}
	return (
		<div className="flex flex-col w-full  mt-[20px] ">
			<motion.div
				initial={{
					opacity: 0,
					y: 40,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 1,
				}}
				className="flex flex-col items-center max-h-[367px] w-full px-[2rem]">
				<div className="h-[213px] bg-[url('/images/pattern_background.png')] bg-orange-10 w-full rounded-t-[16px] flex flex-col items-center pt-[24px] px-[40px]">
					<p className="head4 text-gray-40">우리 아이는</p>
					<p className="head2 text-orange-100">창의적인 고슴도치</p>

					<div className=" relative w-full flex justify-center ">
						<Image
							src={"/images/propensity_result_01.png"}
							alt="결과 이미지"
							width={185}
							height={94}
							className="w-[75%] max-h-[126px]"
						/>

						<AnimalIcon className="absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-80%]" />
					</div>
				</div>
				<div className="h-[154px]  bg-orange-5 w-full rounded-b-[16px] flex flex-col items-center px-[40px] pt-[24px] ">
					<p className="body2 text-gray-20">
						우리 아이는 정해진 커리큘럼에 따라 배운 지식을 실생활에 적용하는 학습 방식이 잘 맞아요
					</p>

					<div className="flex flex-row w-full  flex-wrap justify-evenly mt-[10px]">
						<div className="text-orange-100 head6 bg-White text-center px-[10px] py-[5px] rounded-[4px] m-[4px]">
							#창작활동
						</div>
					</div>
				</div>
			</motion.div>

			<div className="mt-[20px] border-t-[6px] pt-[2rem] border-gray-99 flex flex-col px-[2rem]">
				<p className="text-gray-20 head2 ">추천 영어유치부</p>

				{isSuccess &&
					data?.engl_kd_clas_list.map((item: KdgnListInterface) => (
						<ListItem
							title={item.engl_kd_clas_nm}
							phone={item.engl_kd_clas_telno}
							address={item.engl_kd_clas_addr}
							link={item.engl_kd_clas_lnk}
							key={item.engl_kd_clas_id}
						/>
					))}
			</div>
		</div>
	);
}

export default ResultPage;
