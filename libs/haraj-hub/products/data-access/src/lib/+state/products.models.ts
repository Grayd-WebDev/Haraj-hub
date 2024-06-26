/**
 * Interface for the 'Products' data
 */
export interface ProductsEntity {
  id: number
  userId: number
  name: string
  brand: string
  price: number
  color: string
  material: string
  availability: boolean
  likes: number
  dislikes: number
  views: number
  child: boolean
  ratingScore: number
  location: Location
  messages: Message[]
  images: string[]
  categoryId: number
}

export interface Location {
  latitude: number
  longitude: number
}

export interface Message {
  fromUserId: number
  message: string
}
