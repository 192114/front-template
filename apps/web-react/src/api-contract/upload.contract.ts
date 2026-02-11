export namespace UploadContract {
	export type UploadResponse = { url: string };
	export const upload = { path: "/api/upload", method: "POST" } as const;
}
