export interface Character {
  _id: string
  _idAuthor: string
  title: string
  image: string
  body: string
  category: string
  created_At: string
  updated_At: string
}

export interface CreateCharacter {
  title: string
  image: string
  body: string
  category: string
}
