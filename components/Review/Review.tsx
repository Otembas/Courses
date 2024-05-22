import { ReviewProps } from './Review.props';
import styles from './Review.module.css';
import cn from 'classnames';
import UserIcon from './review-icon.svg';
import { getDateRuLocal } from '@/helpers/helpers';
import { Rating } from '../Rating/Rating';


export const Review = ({
  review,
  className,
  ...props
}: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div {...props} className={cn(styles.review, className)}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>{getDateRuLocal(createdAt)}</div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
