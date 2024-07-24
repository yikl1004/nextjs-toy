const data = [
	{
		name: 'Electronics',
		slug: 'electronics',
		count: 11,
		parent: null,
	},
	{
		name: 'Clothing',
		slug: 'clothing',
		count: 12,
		parent: null,
	},
	{
		name: 'Books',
		slug: 'books',
		count: 10,
		parent: null,
	},
	{
		name: 'Phones',
		slug: 'phones',
		count: 4,
		parent: 'electronics',
	},
	{
		name: 'Tablets',
		slug: 'tablets',
		count: 5,
		parent: 'electronics',
	},
	{
		name: 'Laptops',
		slug: 'laptops',
		count: 2,
		parent: 'electronics',
	},
	{
		name: 'Tops',
		slug: 'tops',
		count: 3,
		parent: 'clothing',
	},
	{
		name: 'Shorts',
		slug: 'shorts',
		count: 4,
		parent: 'clothing',
	},
	{
		name: 'Shoes',
		slug: 'shoes',
		count: 5,
		parent: 'clothing',
	},
	{
		name: 'Fiction',
		slug: 'fiction',
		count: 5,
		parent: 'books',
	},
	{
		name: 'Biography',
		slug: 'biography',
		count: 2,
		parent: 'books',
	},
	{
		name: 'Education',
		slug: 'education',
		count: 3,
		parent: 'books',
	},
]

export default data
