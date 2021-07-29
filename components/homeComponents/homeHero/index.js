import Image from 'next/image'

// styles

import styles from './homeHero.module.scss'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>The Power of AI in Your Hands - Now!</h1>
        <p className="smallt">Empower Designers to Develop Sustainable Products With Generative Design</p>
        <p>Intellium simplifies the use of AI across your organization, enabling you to start monetizing your data assets.</p>
        <button>Let's Talk</button>
      </div>
      <div className={styles.heroRight}>
        <Image
          src="/home.jpg"
          alt="plane landing"
          width={696}
          height={624}
          layout="intrinsic"
        />
      </div>
    </div>
  )
}
