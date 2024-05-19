import { getMenu } from '@/api/menu';

import { notFound } from 'next/navigation';

import { TopLevelCategory } from '@/interfaces/page.interface';
import { MenuFirstLevel } from './MenuFirstLevel/menu-first-level';


export async function Menu(): Promise<JSX.Element> {
  const firstCategory = TopLevelCategory.Courses;
  const menu0 = await getMenu(0);
  const menu1 = await getMenu(1);
  const menu2 = await getMenu(2);
  const menu3 = await getMenu(3);

  if (!menu0 || !menu1 || !menu2 || !menu3) {
    notFound();
  }

  return (
    <MenuFirstLevel
      menu={{ courses: menu0, services: menu1, books: menu2, products: menu3 }}
      firstCategory={firstCategory}
    />
  );
}
