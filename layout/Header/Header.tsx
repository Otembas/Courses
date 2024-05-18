import { HeaderProps } from './Header.props';
//import styles from './Paragraph.module.css';
//import cn from 'classnames';
export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <>
      <div {...props}>Header</div>
    </>
  );
};
