import React from "react";
import styles from "./TarotReading.module.css";
import Footer from "../../components/footer/Footer";
import Reading from "../../pages/reading/Reading";
import FanOfCards from "../../components/fanOfCards/FanOfCards";

const ReadingTarot = () => {
  return (
    <main className={styles.mainSectionReading}>
   {/** <Header /> */}  
      <Reading />
      <FanOfCards />
      <Footer />
    </main>
  );
};

export default ReadingTarot;