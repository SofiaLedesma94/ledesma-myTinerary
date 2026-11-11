//Cities
export interface City {
  _id: string;
  cityCountItineraries: number,
  cityName: string,
  url: string,
  cityCountryName: string,
  __v: number
}
//User
export interface UserSignUp {
  userName: string,
  userPic: string,
  name: string,
  lastName: string,
  userPhone: string,
  token: string,
  rol: string
}

export interface UserSignIn {
  userName: string,
  userPic: string,
  rol: string,
  token: string
}

//Itineraries