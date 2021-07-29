import Head from 'next/head'

// Components
import Layout from '../components/layout'
import Hero from '../components/homeComponents/homeHero'
import WhatWeDo from '../components/homeComponents/whatWeDo'
import Testimonials from '../components/homeComponents/testimonials'
import LatestCS from '../components/homeComponents/latestCS'

// styles
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (<div className={styles.container}>
    <Head>
      <title>Intellium AI</title>
      <meta name="description" content="Intellium AI homepage"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin"/>
      <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap" rel="stylesheet"/>
    </Head>

    <Layout home="home">
      <Hero />
      <WhatWeDo />
      <Testimonials />
      <LatestCS />
    </Layout>
  </div>)
}
