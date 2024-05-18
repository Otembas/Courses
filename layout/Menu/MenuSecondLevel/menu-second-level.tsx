import { FirstLevelMenuItem, MenuItem } from '@/interfaces/menu.interface';

import { usePathname } from 'next/navigation';
import styles from '@/layout/Menu/menu.module.css';

import cn from 'classnames';
import { MenuThirdLevel } from '../MenuThirdLevel/menu-third-level';
import { useEffect, useState } from 'react';

interface MenuSecondLevelInterface {
  menu: MenuItem[];
  menuItem: FirstLevelMenuItem;
}

export function MenuSecondLevel({ menu, menuItem }: MenuSecondLevelInterface) {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  useEffect(() => {
    const getFirstMenu = () => {
      const menuPage = menu.map((m) => {
        if (
          m.pages &&
          m.pages.map((p) => p.alias).includes(pathname.split('/')[2])
        ) {
          return { ...m, isOpened: true };
        } else {
          return { ...m };
        }
      });
      setMenuState(menuPage);
    };
    getFirstMenu();
  }, [pathname, menu]);

  const openSecondLevel = (secondCategory: string) => {
    const updatedMenu = menu.map((m) => {
      if (m._id.secondCategory === secondCategory) {
        return { ...m, isOpened: !m.isOpened };
      } else {
        return m;
      }
    });
    setMenuState(updatedMenu);
  };


  return (
    <div className={styles.secondBlock}>
      {menuState.map((m) => {
        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>

            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              <MenuThirdLevel pages={m.pages} route={menuItem.route} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
