import axios, { AxiosResponse } from 'axios';
import { LoaderFunction, Params } from 'react-router-dom';

const token = JSON.parse(localStorage.getItem('jwt') ?? '');

export function singleCollectionLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = axios.get(
      `${import.meta.env.VITE_API_PATH}collection/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return promise;
  }
}

export function collectionsLoader(): Promise<AxiosResponse<any, any>> {
  const promise = axios.get(`${import.meta.env.VITE_API_PATH}collections`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return promise;
}

export function singleObjectLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = axios.get(
      `${import.meta.env.VITE_API_PATH}object/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return promise;
  }
}

export function userLoader({ params }: { params: Params }): any {
  if (params.id) {
    const promise = axios.get(
      `${import.meta.env.VITE_API_PATH}user/${params.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return promise;
  }
}
