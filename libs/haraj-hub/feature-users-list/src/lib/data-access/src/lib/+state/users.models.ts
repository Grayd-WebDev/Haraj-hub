/**
 * Interface for the 'Users' data
 */
export interface UsersEntity{
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
  likes: number
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}


export interface IFilterOptions {
  searchFilter: string | null;
}