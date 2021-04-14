import { BlogPost } from './blogPost'
import { Image } from './image'
import { Product } from './product'

type Slice =
  | SliceBlogPostLatest
  | SliceCarousel
  | SliceImage
  | SliceListOfProducts
  | SliceTeaser

type SliceBlogPostLatest = {
  sliceType: 'blog_posts__latest'
  items: BlogPost[]
}

type SliceCarousel = {
  sliceType: 'carousel'
  items: {
    image: Image
    text: string
    buttonText: string
    buttonLink: string
  }[]
}

type SliceImage = {
  sliceType: 'image'
  image: Image
}

type SliceListOfProducts = {
  sliceType: 'list_of_products'
  title: string
  items: Product[]
}

type SliceTeaser = {
  sliceType: 'teaser'
  title: string
  subtitle: string
  image: Image
}
