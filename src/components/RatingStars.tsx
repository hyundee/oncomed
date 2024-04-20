interface IRatingStars {
  rating: number;
}

export const RatingStars = ({ rating }: IRatingStars) => {
  const ratingStar = (rating / 2).toFixed(1);
  return <div>{ratingStar}</div>;
};
