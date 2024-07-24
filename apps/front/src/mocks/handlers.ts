import { products, product } from '@mocks/resolvers/products'
import { posts } from '@mocks/resolvers/posts'
import { reviews } from '@mocks/resolvers/reviews'
import { categories, category } from '@mocks/resolvers/categories'

export const handlers = [reviews(), posts(), categories(), category(), products(), product()]
