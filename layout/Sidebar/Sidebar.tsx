import { Menu } from '@/layout/Menu/menu';
import { SidebarProps } from './Sidebar.props';

//import styles from './Paragraph.module.css';
//import cn from 'classnames';
export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    
    </div>
  );
};
