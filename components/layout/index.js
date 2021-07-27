import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

// styles
import styles from '../../styles/Layout.module.scss'

const name = 'Intellium AI'
export const siteTitle = 'Intellium AI'

export default function Layout({ children, home }) {

  return (
    <div>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Task for job application"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>

      <div className={styles.container}>
        <Header />
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}
