'use client';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from 'react';
import StarRating from './star-rating.svg';

export const Rating = forwardRef(
  (
    { isEditable, rating, setRating, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );
    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
        return (
          <span
            key={i}
            className={cn(styles['star'], {
              [styles['filled']]: i < currentRating,
              [styles['editable']]: isEditable,
            })}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => onClick(i + 1)}
          >
            <StarRating
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          </span>
        );
      });
      setRatingArray(updatedArray);
    };
    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };
    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };
    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code != 'Space' || !setRating) {
        return;
      }
      setRating(i);
    };
    return (
      <div
        className={cn(styles.ratingWrapper, {
          [styles.error]: error,
        })}
        {...props}
        ref={ref}
      >
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
Rating.displayName = 'Rating';
