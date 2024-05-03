//import styles from './page.module.css';
//import type { Metadata } from 'next';
'use client';
import { useEffect, useState } from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from '../components';

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: 'ComputedMeta',
//     icons: {
//       icon: 'asdasd.ico',
//     },
//   };
// }

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    console.log(counter);
    return function cleanup() {
      console.log('cleanup');
    };
  });
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Test</Htag>
      <Button appearance='ghost' arrow='down'>
        Test
      </Button>
      <Button
        appearance='primary'
        arrow='right'
        onClick={() => setCounter((x) => x + 1)}
      >
        {counter}
        Test
      </Button>
      <Paragraph size='large'>Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size='small'>Маленький</Paragraph>
      <Tag color='red'>sdasdass</Tag>
      <Tag color='green'>sdsadasdasdasdass</Tag>
      <Tag color='gray'>sdasdasdsas</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
}
