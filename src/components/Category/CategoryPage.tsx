import { useLoaderData, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import {
  fetchParentCategoryChilds,
  fetchSingleCategory,
} from '../../store/reducers/categoriesReducer';
import CategoryCard from './CategoryCard';
import { ICategory } from '../../types/types';

export default function CategoryPage() {
  const { id } = useParams();

  const numId = id ? parseInt(id) : '';

  const dispatch = useAppDispatch();

  const currentCategory = useAppSelector(
    (state) => state.categories.currentCategory
  );

  const objects = useAppSelector((state) => state.objects.list);
  console.log(objects);

  const childs: any = useAppSelector((state) => state.categories.childrenList);
  console.log(childs);

  useEffect(() => {
    numId && dispatch(fetchParentCategoryChilds(numId));
  }, [numId]);

  useEffect(() => {
    numId && dispatch(fetchSingleCategory(numId));
  }, [numId]);

  return (
    <>
      {currentCategory && (
        <h1 className="text-center text-4xl font-bold mt-10">
          {currentCategory.name}
        </h1>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {
          childs && childs.category
            ? childs.category.map((category: ICategory) => (
                <CategoryCard
                  id={category.id as number}
                  name={category.name as string}
                  image={category.image as string}
                />
              ))
            : '' //Todo: display objects of the child category
        }
      </div>
    </>
  );
}
