import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleCollection } from '../store/reducers/collectionsReducer';

const singleCollectionLoader = async ({ params }) => {
  console.log(parseInt(params.id));
  const dispatch = useDispatch();
  const currentCollection = useSelector(
    (state) => state.collections.currentCollection
  );
  dispatch(fetchSingleCollection(parseInt(params.id)));
  if (currentCollection === null) {
    return null;
  }
  return currentCollection;
};

export default singleCollectionLoader;
