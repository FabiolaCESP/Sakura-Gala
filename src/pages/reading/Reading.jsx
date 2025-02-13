import { useState } from 'react'
import FanOfCards from '../../components/FanOfCards/FanOfCards'
import FanOfCards from '../../components/FanOfCards/FanOfCards.css'
import Footer from '../../components/footer/Footer'

function Reading() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className={styles.mainSectionReading}>
      <FanOfCards />
      </main>
    </>
  )
}

export default FanOfCards
