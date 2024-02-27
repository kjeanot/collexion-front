export interface ICollection {
  id?: number;
  name?: string;
  image?: string | File;
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
  id?: number;
  nickname?: string;
  username?: string;
  picture?: null | string;
  email?: string;
  roles?: IRole[];
  description?: null | string;
  token?: string;
  password?: string;
  mycollections?: ICollection[];
  myfavoritescollections?: ICollection[];
}

export interface IObject {
  state: string;
  id?: number;
  name?: string;
  image?: string | File;
  description?: string;
  state?: string;
  relatedMyCollections?: ICollection[] | [any];
  myCollections?: ICollection[];
  comments?: IComment[] | [];
  category?: ICategory;
  relatedCategory?: number;
}

export type IRole = string;

export interface IComment {
  id: number;
  content?: string;
  user?: IUser;
}

export interface IAlert {
  message: string;
  type: string;
}
