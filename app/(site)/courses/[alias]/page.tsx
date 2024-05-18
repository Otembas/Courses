import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/product';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Страница курсов',
};





export async function generateStaticParams() {
  const menu = await getMenu(0);
  if (!menu) {
    notFound();
  }
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias }))
  );
  
}

export default async function Courses({
  params,
}: {
  params: { alias: string };
}) {


  const page = await getPage(params.alias);
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
