export const ApiCode = { Success: 0, ValidationError: 1000 } as const;

export type ValidationError = { field: string; message: string };

export type ApiResult<T> = { code: number; message: string; data: T };

export type ApiResultOrValidation<T> =
	| { code: 0; message: string; data: T | null }
	| { code: 1000; message: string; data: ValidationError[] };
