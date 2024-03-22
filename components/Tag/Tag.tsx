import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
export const Tag = ({
  size = 'small',
  children,
  color = 'ghost',
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles['tag'], className, {
        [styles['small']]: size === 'small',
        [styles['middle']]: size === 'middle',
        [styles['ghost']]: color === 'ghost',
        [styles['green']]: color === 'green',
        [styles['gray']]: color === 'gray',
        [styles['red']]: color === 'red',
        [styles['primary']]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
