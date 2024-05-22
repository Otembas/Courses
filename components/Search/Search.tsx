'use client';
import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { KeyboardEvent, useState } from 'react';
import SeacrhIcon from './search.svg';
import { useRouter, useSearchParams } from 'next/navigation';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('q', search);
    const url = `/search?${params.toString()}`;
    router.push(url);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(styles.search, className)} {...props}>
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance='primary'
        className={styles.button}
        onClick={goToSearch}
      >
        <SeacrhIcon />
      </Button>
    </div>
  );
};
