export type User = { id: number; name: string };

export namespace UserContract {
	export type ListRequest = { page: number; pageSize: number };
	export type ListResponse = { list: User[]; total: number };
	export const list = { path: "/api/users", method: "GET" } as const;

	export type CreateRequest = Omit<User, "id">;
	export type CreateResponse = User | null;
	export const create = { path: "/api/users", method: "POST" } as const;
}
