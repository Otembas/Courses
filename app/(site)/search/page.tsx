import { getMenu } from '@/api/menu';
import { firstLevelMenu } from '@/helpers/helpers';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Owl-Top',
  };
}

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
export default function Search() {
  return <>Search</>;
}
