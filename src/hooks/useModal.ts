import { atom, useRecoilState } from "recoil";

export type ModalType = "login" | "withdrawal" | "maximumChild" | "confirmDeleteChild" | "confirmEmail";

/**
 * ModalStore
 * type: 위에서 등록한 모달의 고유 이름 (type에 고유 이름 전달하여 modalProvider에 있는 모달 중 해당 모달만 뜨도록 함)
 * data: modal에 전달할 데이터
 * isOpen: 모달 오픈 상태 전달
 */
interface ModalStore {
	type: ModalType | null;
	data?: any;
	isOpen: boolean;
}

const modalState = atom<ModalStore>({
	key: "modalState",
	default: {
		type: null,
		data: {},
		isOpen: false,
	},
});

export const useModal = () => {
	const [modal, setModal] = useRecoilState(modalState);

	const onOpen = (type: ModalType, data = {}) => setModal({ isOpen: true, data, type });
	const onClose = () => setModal({ type: null, isOpen: false });
	const setOpenChange = (isOpen: boolean) =>
		setModal({ isOpen, type: isOpen ? modal.type : null, data: isOpen ? modal.data : {} });

	return { ...modal, onOpen, onClose, setOpenChange };
};
