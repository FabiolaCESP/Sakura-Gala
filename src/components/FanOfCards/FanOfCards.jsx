import React, { useState, useEffect } from "react";
import styles from "./FanOfCards.module.css";

const FanOfCards = ({ isFanned }) => {
  const numCards = 25;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const baseRotation = isMobile ? 6 : 10;
  const xOffset = isMobile ? 28 : 45;
  const yOffset = isMobile ? 15 : 25;

  return (
    <div className={styles.fanContainer}>
      {[...Array(numCards)].map((_, index) => {
        const angle = isFanned
          ? (index - (numCards - 1) / 2) * baseRotation
          : 0;

        const xTranslate = Math.cos(angle * (Math.PI / 180)) * xOffset;
        const yTranslate = Math.sin(angle * (Math.PI / 180)) * yOffset;

        return (
          <div
            key={index}
            className={styles.card}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
              transform: `translate(${xTranslate}px, ${yTranslate}px) rotate(${angle}deg) 
                          ${hoverIndex === index ? "scale(1.2)" : ""}`,
              transition: "transform 0.3s ease-in-out",
              zIndex: hoverIndex === index ? 10 : 1,
            }}
          />
        );
      })}
    </div>
  );
};

export default FanOfCards;
