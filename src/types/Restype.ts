export type ResType<T> = {
	code: number;
	message: string | null;
	data: T;
};
