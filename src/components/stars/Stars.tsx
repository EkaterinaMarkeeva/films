import { FC } from "react"
import { Star } from "./Star";
import "../style/starsStyle.css";

type StarsProps = { count: number };

const Stars: FC<StarsProps> = ({count}) => {
  if (count > 5 || count < 1) return;

  const items = new Array(count).fill('');

  return (
    <ul className="card-body-stars u-clearfix">
      {items.map(() => {
        return <Star />
        })
      }
    </ul>
  )
}

export default Stars;
