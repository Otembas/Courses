import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/product';
import { firstLevelMenu } from '@/helpers/helpers';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Страница курсов',
};

export async function generateStaticParams() {
  const paths = [];

  for (const menuLoad of firstLevelMenu) {
    const menu = await getMenu(menuLoad.id);
    if (!menu) {
      notFound();
    }
    paths.push(
      ...menu.flatMap((m) =>
        m.pages.map((p) => ({ category: menuLoad.id, product: p.alias }))
      )
    );
  }
  return paths;
}

export default async function Courses({
  params,
}: {
  params: { category: string; product: string };
}) {
  const firstCategoryItem = firstLevelMenu.find(
    (m) => m.route == params.category
  );
  if (!firstCategoryItem) {
    notFound();
  }
  const page = await getPage(params.product);
  if (!page) {
    notFound();
  }
  const products = await getProducts(page.category);
  if (!products) {
    notFound();
  }
  return (
    <>
      <div>{page.category}</div>
      <div>{products && products.length}</div>
    </>
  );
}
