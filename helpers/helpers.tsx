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

export const priceRuIntl = (price: number): string =>
  new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
  }).format(price);

export const declOfNum = (
  number: number,
  titles: [string, string, string]
): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const getDateRuLocal = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return new Intl.DateTimeFormat('ru-Ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};
