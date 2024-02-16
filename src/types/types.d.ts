export interface ICollection {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  rating?: number | null;
  user?: IUser;
  myobjects?: IObject[];
  created_at?: string;
}

export interface ICategory {
  id?: number;
  name?: string;
  image?: string | File;
  rating?: number | null;
  myobjects?: IObject[];
}

export type CurrentCollection = ICollection & {};

export interface IUser {
  id: number;
  nickname: string;
  picture: null | string;
  email: string;
  roles: IRole[];
  description: null | string;
}

export interface IObject {
  id: number;
  name: string;
  image: string;
}

export interface IRole {
  role: string;
}
