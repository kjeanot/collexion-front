export interface ICollection {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number | null;
  user: IUser;
  myobjects: IObject[];
}

export interface IUser {
  id: number;
  nickname: string;
  picture: null | string;
}

export interface IObject {
  id: number;
  name: string;
  image: string;
}
