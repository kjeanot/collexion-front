export interface ICollection {
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  rating?: number | null;
  user?: IUser;
  myobjects?: IObject[];
  relatedObjects?: IObject[];
  created_at?: string;
}

export interface ICategory {
  id?: number;
  name?: string;
  image?: string;
  rating?: number | null;
  myobjects?: IObject[];
}

export type CurrentCollection = ICollection & {};
export type CurrentObject = IObject & {};

export interface IUser {
  id: number;
  nickname: string;
  picture: null | string;
  email?: string;
  roles?: IRole[];
  description?: null | string;
}

export interface IObject {
  state: string;
  id?: number;
  name?: string;
  image?: string;
  description?: string;
  state?: string;
  category?: string;
  myCollections?: ICollection[] | [];
  relatedCollections?: ICollection[] | [];
  comments?: IComment[] | [];
  category: ICategory;
}

export interface IRole {
  role: string;
}

export interface IComment {
  id?: number;
  content?: string;
  user?: IUser;
}
