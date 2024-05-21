import Image from "next/image";
import Link from "next/link";
import React from "react";

function MainHeader() {
	return (
		<header className="flex justify-between items-center px-[20px] py-[16px] bg-WHITE border-b border-[#0000001a] w-full sticky top-0 z-10 ">
			<Link href={"/"}>
				<Image src={"/icons/main_symbol.svg"} alt={"symbol"} width={30} height={32} />
			</Link>
			<Link href={"/my-page"}>
				<Image src={"/icons/icn_person.svg"} alt={"user"} width={26} height={26} />
			</Link>
		</header>
	);
}

export default MainHeader;
