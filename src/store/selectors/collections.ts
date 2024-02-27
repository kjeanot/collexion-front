import { ICollection } from '../../types/types';

export function findCollection(collections: ICollection[], searchedId: number) {
  const collection = collections.find((el) => {
    return el.id === searchedId;
  });
  return collection;
}
