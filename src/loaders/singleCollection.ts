import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchSingleCollection } from '../store/reducers/collections';

const singleCollectionLoader = async ({ params }) => {
  console.log(parseInt(params.id));
  const dispatch = useAppDispatch;
  const currentCollection = useAppSelector(
    (state) => state.collections.currentCollection
  );
  dispatch(fetchSingleCollection(parseInt(params.id)));
  if (currentCollection === null) {
    return null;
  }
  return currentCollection;
};

export default singleCollectionLoader;
