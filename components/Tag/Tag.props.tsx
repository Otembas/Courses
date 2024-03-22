import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface TagProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: 'small' | 'middle';
  children: ReactNode;
  color: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}
