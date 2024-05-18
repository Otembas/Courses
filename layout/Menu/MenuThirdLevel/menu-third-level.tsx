'use client';

import { PageItem } from '@/interfaces/menu.interface';
import styles from '@/layout/Menu/menu.module.css';
import cn from 'classnames';
import Link from 'next/link';

interface MenuThirdLevelInterface {
  pages: PageItem[];
  route: string;
}
export function MenuThirdLevel({ pages, route }: MenuThirdLevelInterface) {
  return pages.map((p) => (
    <Link
      key={p._id}
      href={`/${route}/${p.alias}`}
      className={cn(styles.thirdLevel, {
        [styles.thirdLevelActive]: false,
      })}
    >
      {p.category}
    </Link>
  ));
}
