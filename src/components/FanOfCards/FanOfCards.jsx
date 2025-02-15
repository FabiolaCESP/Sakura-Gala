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
        const angle = isFanned ? (index - (numCards - 1) / 2) * baseRotation : 0;

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





/*import React, { useState, useRef, useEffect } from "react";
import ApiTarot from "../../apiservice/ApiTarot";
import styles from "./FanOfCards.module.css";


function FanOfCards() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [cardsData, setCardsData] = useState([]);

  /*useEffect(() => {
    fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
      .then((res) => res.json())
      .then((data) => {
        setCardsData(data);
      })
      .catch((err) => {
        console.error('Error fetching cards:', err);
      });
  }, []);*/

  // For a real app, you might want to measure the container size dynamically.
  // Here we pick something static for simplicity.
 /* const radius = 300;

  // We'll position the circle center near the bottom of the screen,
  // so we only see the top arc of the circle.
  // Adjust these values as needed:
 /* const centerX = window.innerWidth / 2;     // horizontally center
  const centerY = window.innerHeight + 200;  // well below the bottom

  // Optional ratio that converts horizontal drag distance into rotation degrees.
  // Tweak to feel good for your UI.
 /* const DRAG_TO_DEG = 0.3; // degrees per pixel of drag

  // MOUSE DOWN
  /*const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  // MOUSE MOVE
 /* const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    // Update rotation by some ratio
    setRotation((prev) => prev + dx * DRAG_TO_DEG);

    // Reset startX so we can accumulate incremental drags
    setStartX(e.clientX);
  };

  // MOUSE UP / LEAVE
 /* const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Build the array of card elements
 /* const cards = [];
  for (let i = 0; i < cardsData.length; i++) {
    const card = cardsData[i];
    const angle = (360 / cardsData.length) * i + rotation;
    const rad = (angle * Math.PI) / 180;

    // We'll offset the card by half its width/height so it is centered
   /* const cardWidth = 80;
    const cardHeight = 120;

    const x = centerX + radius * Math.cos(rad) - cardWidth / 2;
    const y = centerY + radius * Math.sin(rad) - cardHeight / 2;

    // If you want the card to rotate *with* the arc, do `transform: rotate(${angle}deg)`.
    // If you want them upright, omit the rotate or set it to 0deg. Below, we keep them upright.
   /* cards.push(
      <div
        key={card.id}
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: cardWidth,
          height: cardHeight,
          backgroundImage: `url(${card.cardsReverse.sakuraReverse})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid #999',
          borderRadius: 4,
          // Keep upright:
          transformOrigin: "center center",
          transform: "rotate(0deg)",*/
          // If you want them to tilt along the circle, do: transform: `rotate(${angle}deg)`
       /* }}
      ></div>
    );
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {cards}
    </div>
  );


export default FanOfCards;*/