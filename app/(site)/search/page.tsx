import { Metadata } from 'next';

//import styles from './page.module.css';

// export const metadata: Metadata = {
//   title: 'Исправленные данные',
// };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Search',
  };
}

export default function Search() {
  return <>Search</>;
}
