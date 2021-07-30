import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

// styles
import styles from '../../styles/Layout.module.scss'

const name = 'Intellium AI'
export const siteTitle = 'Intellium AI'

export default function Layout({ children, home, dark }) {

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

      <div className={dark ? styles.whiteContainer : styles.container}>
        <Header dark={dark} />
        {children ? children : <div style={{
          padding: "200px",
          height: "600px",
          background: "white",
          gridRow: "2",
          gridColumn: "1 / -1",
          textAlign: "center"
        }}>
          <h1 className="bigH1">Under Contruction...</h1>
        </div>}
      </div>
      <Footer />
    </div>
  )
}
