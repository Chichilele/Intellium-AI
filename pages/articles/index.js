import Layout from '../../components/layout'
import CsCard from '../../components/csCard'
import { fetchAPI } from "../api/api"

// styles
import styles from './articles.module.scss';


export default function Articles({articles}) {

return (
  <Layout dark>
    <div className={styles.header}>
      <h1 className="bigH1">Articles</h1>
      <p>The use cases created using our AI products and services emphasise on exploiting AI in a responsible, transparent and ethical manner.</p>
    </div>
    <div className={styles.articles}>
      {articles.map((article, index) =>
        <CsCard
          key={index}
          column={(index + 1) * 3}
          title={article.title}
          body={article.description ? article.description : article.body.slice(0, 90) + "..."}
        />
      )}
    </div>
  </Layout>
  )
}


export async function getStaticProps() {

  const [articles] = await Promise.all([
    fetchAPI("/articles")
  ])

  return {
    props: { articles },
    revalidate: 1,
  }
}
