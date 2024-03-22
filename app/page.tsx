//import styles from './page.module.css';
//import type { Metadata } from 'next';
import { Htag, Button, Paragraph, Tag } from '../components';

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: 'ComputedMeta',
//     icons: {
//       icon: 'asdasd.ico',
//     },
//   };
// }

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Test</Htag>
      <Button appearance='ghost' arrow='down'>
        Test
      </Button>
      <Button appearance='primary' arrow='right'>
        Test
      </Button>
      <Paragraph size='large'>Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='small'>Маленький</Paragraph>
      <Tag color='red'>sdasdass</Tag>
      <Tag color='green'>sdsadasdasdasdass</Tag>
      <Tag color='gray'>sdasdasdsas</Tag>
    </>
  );
}
