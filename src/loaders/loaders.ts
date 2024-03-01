import { AxiosResponse } from 'axios';
import { Params } from 'react-router-dom';
import api from '../hooks/api';

const storedToken = localStorage.getItem('jwt');
const token = storedToken ? JSON.parse(storedToken) : '';

const storedUserId = localStorage.getItem('uid');
const userId = storedUserId ? JSON.parse(storedUserId) : '';

export function singleCollectionLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = api.get(
      `${import.meta.env.VITE_API_PATH}collection/${params.id}`
    );
    return promise;
  }
}

export function randomCollectionLoader(): Promise<AxiosResponse<any, any>> {
  const promise = api.get(`${import.meta.env.VITE_API_PATH}collection_random`);
  return promise;
}

export function collectionsLoader(): Promise<AxiosResponse<any, any>> {
  const promise = api.get(`${import.meta.env.VITE_API_PATH}collections`);
  return promise;
}

export function singleObjectLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = api.get(
      `${import.meta.env.VITE_API_PATH}object/${params.id}`
    );
    return promise;
  }
}

export function randomObjectLoader(): Promise<AxiosResponse<any, any>> {
  const promise = api.get(`${import.meta.env.VITE_API_PATH}object_random`);
  return promise;
}

export function userLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = api.get(
      `${import.meta.env.VITE_API_PATH}user/${params.id}`
    );
    return promise;
  }
}

export function userEditLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = api.get(
      `${import.meta.env.VITE_API_PATH}user/${params.id}`
    );
    return promise;
  }
}

export function categoryLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = api.get(
      `${import.meta.env.VITE_API_PATH}category/${params.id}`
    );
    return promise;
  }
}
