// 'use client';
//import { Htag, Button, Paragraph, Tag, Rating } from '@/components';
// import { getMenu } from '@/api/menu';
// import { MenuItem } from '@/interfaces/menu.interface';
import { Search, Textarea } from '@/components';
import { Input } from '@/components/Input/Input';
import { Metadata } from 'next';

//import styles from './page.module.css';

// export const metadata: Metadata = {
//   title: 'Исправленные данные',
// };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Owl-Top',
  };
}

export default async function Home() {
  return (
    <>
      Главная Страница
      <Input placeholder='test' />
      <Textarea placeholder='test' />
      <Search />
    </>
  );
}
