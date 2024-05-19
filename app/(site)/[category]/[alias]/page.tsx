import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/product';
import { firstLevelMenu } from '@/helpers/helpers';
import { TopPageComponent } from '@/page-components';

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
        m.pages.map((p) => ({ category: menuLoad.route, product: p.alias }))
      )
    );
  }
  return paths;
}

export default async function TopPage({
  params,
}: {
  params: { category: string; alias: string };
}) {
  const firstCategoryItem = firstLevelMenu.find(
    (m) => m.route == params.category
  );

  if (!firstCategoryItem) {
    notFound();
  }

  console.log(params);
  

  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }
  const products = await getProducts(page.category);
  if (!products) {
    notFound();
  }
  return <TopPageComponent firstCategory={firstCategoryItem.id} page={page} products={products}/>
}
