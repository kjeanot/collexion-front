import { useLoaderData, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { fetchParentCategoryChilds } from '../../store/reducers/categoriesReducer';
import CategoryCard from './CategoryCard';
import { ICategory } from '../../types/types';

export default function CategoryPage() {
  const { id } = useParams();
  
  const numId = id ? parseInt(id) : '';

  const dispatch = useAppDispatch();

  const childs: any = useAppSelector((state) => state.categories.childrenList);
  console.log(childs);
  
  useEffect(() => {
    console.log('effect');
    numId && dispatch(fetchParentCategoryChilds(numId));
  }, [numId]);

  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
    {childs && childs.category && childs.category.map((category: ICategory) => (
      <CategoryCard id={category.id as number} name={category.name as string} image={category.image as string}/>
    ))}
    </div>
    </>
  );
}
