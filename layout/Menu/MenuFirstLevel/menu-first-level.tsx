'use client';

import { MenuItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { usePathname } from 'next/navigation';
import styles from '@/layout/Menu/menu.module.css';
import Link from 'next/link';
import cn from 'classnames';
import { MenuSecondLevel } from '../MenuSecondLevel/menu-second-level';
import { firstLevelMenu } from '@/helpers/helpers';
type AllMenuType = {
  courses: MenuItem[];
  services: MenuItem[];
  books: MenuItem[];
  products: MenuItem[];
};

interface MenuFirstLevelInterface {
  menu: AllMenuType;
  firstCategory: TopLevelCategory;
}

type PathnameSliced = 'courses' | 'serveces' | 'books' | 'products';

export function MenuFirstLevel({
  menu,
  firstCategory,
}: MenuFirstLevelInterface) {
  const pathname = usePathname();
  const pathnameSliced = pathname.split('/')[1] as PathnameSliced;
  return (
    <>
      {firstLevelMenu.map((m) => (
        <div key={m.route}>
          <Link href={`/${m.route}`} className={styles.link}>
            <div
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == firstCategory,
              })}
            >
              {m.icon}
              <span>{m.name}</span>
            </div>
          </Link>

          {m.id == firstCategory && (
            <MenuSecondLevel
              menu={menu[`${pathnameSliced}` as keyof AllMenuType]}
              menuItem={m}
            />
          )}
        </div>
      ))}
    </>
  );
}
