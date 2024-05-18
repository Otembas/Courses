import { FirstLevelMenuItem } from '@/interfaces/menu.interface';
import CoursesIcon from '@/layout/Menu/Icon/courses.svg';
import BooksIcon from '@/layout/Menu/Icon/books.svg';
import ServisesIcon from '@/layout/Menu/Icon/servises.svg';
import ProductsIcon from '@/layout/Menu/Icon/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServisesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];
