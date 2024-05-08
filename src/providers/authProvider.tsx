"use client"

import { usePathname, useRouter } from "next/navigation"
import React, { useEffect } from "react"

export default function AuthProvider() {
	const pathname = "/" + usePathname().split("/")[1]
	const router = useRouter()

	useEffect(() => {
		/**
		 * TODO_JIYEON:
		 * 로그인 상태면 return
		 * 로그인 하지 않으면 접근할 수 없는 페이지들 처리
		 */
	}, [])

	return <></>
}
