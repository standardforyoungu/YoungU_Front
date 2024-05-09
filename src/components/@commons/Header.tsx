import Image from "next/image";
import React from "react";

function Header() {
	return (
		<header className="flex justify-between px-[20px] py-[16px] bg-WHITE border-b border-[#0000001a] w-full sticky top-0 z-10 ">
			<Image src={"/icons/main_symbol.png"} alt={"symbol"} width={30} height={32} />
			<Image src={"/icons/user.png"} alt={"user"} width={32} height={32} />
		</header>
	);
}

export default Header;
