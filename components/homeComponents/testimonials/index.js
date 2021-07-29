import Carousel from './carousel'

// Styles
import styles from './testimonials.module.scss'

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <h2>Testimonials</h2>
      <h3>“AiBoost has unlocked AI across all our business lines”</h3>
      <p>Technology Manager,</p>
      <p>GKN</p>

      <Carousel />
    </div>
  )
}
