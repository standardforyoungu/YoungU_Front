"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { loadKakaoSdk } from "@/utils/loadKakaoSdk";

import { Button } from "../ui/button";

export default function KakaoShareBtn() {
	const [kakaoLoaded, setKakaoLoaded] = useState(false);

	useEffect(() => {
		loadKakaoSdk()
			.then(() => setKakaoLoaded(true))
			.catch((error) => console.error(error));
	}, []);

	const shareKakao = () => {
		if (!kakaoLoaded || !window.Kakao) {
			console.error("Kakao SDK not initialized");
			return;
		}

		window.Kakao.Link.sendDefault({
			objectType: "feed",
			content: {
				title: "영유 스탠다드",
				description: "영어 유치부가 고민될땐? 성향검사를 통해 아이에게 맞는 학습법을 찾아보세요!",
				imageUrl: "https://youngu-s3-bucket.s3.ap-northeast-2.amazonaws.com/propensity_result/kakaoShare.png",
				link: {
					mobileWebUrl: "http://young-u-standard.site",
					webUrl: "http://young-u-standard.site",
				},
			},
			buttons: [
				{
					title: "웹으로 보기",
					link: {
						mobileWebUrl: "http://young-u-standard.site",
						webUrl: "http://young-u-standard.site",
					},
				},
			],
		});
	};
	return (
		<Button
			onClick={shareKakao}
			disabled={!kakaoLoaded}
			className="bg-White text-gray-60 flex justify-center items-center gap-2 rounded-b-none !body1 !h-[56px]">
			<Image src={"/icons/kakao_disabled.svg"} alt="kakao" width={16} height={16} />
			<span>카카오톡으로 공유하기</span>
		</Button>
	);
}
