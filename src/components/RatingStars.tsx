import { useEffect, useState } from "react";

interface IRatingStars {
  rating: number;
  movieId: number;
}

export const RatingStars = ({ rating, movieId }: IRatingStars) => {
  const ratingStar = Number(rating.toFixed(2));
  const starIds = ["fi1rst", "second", "third", "fourth", "last"];
  const [starWidthArr, setStarWidthArr] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const calcStarRates = () => {
      let tempStarWidthArr = [0, 0, 0, 0, 0];
      let starVerScore = (ratingStar * 70) / 10;
      let idx = 0;
      while (starVerScore > 14) {
        tempStarWidthArr[idx] = 14;
        idx += 1;
        starVerScore -= 14;
      }
      tempStarWidthArr[idx] = starVerScore;
      return tempStarWidthArr;
    };

    setStarWidthArr(calcStarRates());
  }, [ratingStar]);

  return (
    <div className="flex justify-start items-center gap-x-2">
      <div className="flex">
        {starIds.map((item, idx) => {
          return (
            <div className="star_icon" key={`${idx}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 14 13"
                fill="#cacaca"
              >
                <clipPath id={`${item}StarClip_${movieId}`}>
                  <rect width={`${starWidthArr[idx]}`} height="39" />
                </clipPath>
                <path
                  id={`${item}Star`}
                  d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                  transform="translate(-2 -2)"
                />
                <use
                  clipPath={`url(#${item}StarClip_${movieId})`}
                  href={`#${item}Star`}
                  fill="#ff5866"
                />
              </svg>
            </div>
          );
        })}
      </div>
      {ratingStar}
    </div>
  );
};
