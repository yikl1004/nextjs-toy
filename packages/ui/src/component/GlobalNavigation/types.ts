export interface Item {
	name: string
	slug: string
	description?: string
}

export interface Menu {
	name: string
	items: Item[]
}
