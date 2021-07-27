import Head from 'next/head'
import Image from 'next/image'

// Components
import Layout from '../components/layout'

// styles
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intellium AI</title>
        <meta name="description" content="Intellium AI homepage" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <Layout home>
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1>The Power of AI in Your Hands - Now!</h1>
            <p className="smallt">Empower Designers to Develop Sustainable Products With Generative Design</p>
            <p>Intellium simplifies the use of AI across your organization, enabling you to start monetizing your data assets.</p>
            <button>Let's Talk</button>
          </div>
          <div className={styles.heroRight}>
            <img src="/home.jpg" alt="plane landing" />
          </div>
        </div>

        <div className={styles.wwd}>
          <h2>What We Do</h2>
          <h4>Intellium has developed AiBoost, a comprehensive end-to-end AI platform, democratizing AI and making complex Data Science technology available to everyone.</h4>
          <p className="smallt">The AiBoost cloud-based software platform automates the process of applying AI to a wide range of business challenges providing valuable data insights that allow our clients to make informed decisions that transform their operations across the organization.</p>
        </div>
      </Layout>
    </div>
  )
}
