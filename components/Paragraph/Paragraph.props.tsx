import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'small' | 'middle' | 'large';
  children: ReactNode;
}
