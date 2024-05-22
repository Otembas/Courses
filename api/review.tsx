import { API } from '@/app/api';
import { IReviewForm } from '@/components/ReviewForm/ReviewForm.interface';

export interface IReviewSentResponse {
  message: string;
}
export async function sendReview(
  formData: IReviewForm,
  productId: string
): Promise<IReviewSentResponse | null> {
  const res = await fetch(API.review.createDemo, {
    method: 'POST',
    body: JSON.stringify({
      ...formData,
      productId,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
    next: { revalidate: 10 },
  });

  return res.json();
}
