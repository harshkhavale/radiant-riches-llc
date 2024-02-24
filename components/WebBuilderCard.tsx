// components/WebBuilderCard.js

import React from "react";
import { GoTrophy } from "react-icons/go";
import { IoDiamondOutline } from "react-icons/io5";
import styles from "../styles/webbuildercard.module.scss";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const WebBuilderCard = ({ data, index }: any) => {
  const { image, tag, title, description, rating, highlight } = data;
  const renderStars = (starCount: any) => {
    const stars = [];
    const fullStars = Math.floor(starCount);
    const hasHalfStar = starCount % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className={styles.star} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={stars.length} className={styles.star} />);
    }

    return stars;
  };
  return (
    <div className={styles.card}>
      <p className={styles.index}>{index + 1}</p>
      <div>
        <img src={image} alt={title} className={styles.image} />
        {tag && (
          <div className={styles.tag}>
            {tag.icon}
            {tag.title}
          </div>
        )}
      </div>
      <div className="info">
        <p>
          <strong>{title} - </strong>
          {description}
        </p>
        <div className={styles.highlight}>
          <p className={styles.heading}>Main Highlight</p>

          <p>{highlight.description}</p>
        </div>
        <p className="">show more</p>
      </div>

      <div className={styles.rating}>
        <span className={styles.score}>{rating.score}</span>
        <span>{rating.tag}</span>
        <div className={styles.stars}>{renderStars(rating.star)}</div>
        <button>View</button>
      </div>
    </div>
  );
};

export default WebBuilderCard;
