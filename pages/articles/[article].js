import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import _ from 'lodash'
import Link from 'next/link'

import { fetchAPI } from '../api/api'

import Layout from '../../components/layout'

import styles from './articles.module.scss'

export default function Article({article}) {
 console.log(article);
  return (
    <Layout dark>

      <div className={styles.header}>
        <Link href="/articles">
          <button>back</button>
        </Link>
        <h1>{article.title}</h1>
      </div>
      <div className={styles.article}>
        <ReactMarkdown>{article.body}</ReactMarkdown>

      </div>


    </Layout>
  )
}

export async function getStaticPaths() {

  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({
      params: {
        article: _.kebabCase(article.title)
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {

  const articles = await fetchAPI()
  const article = articles.filter(article => _.kebabCase(article.title) === params.article )

  return {
    props: { article: article[0] },
    revalidate: 1,
  }
}
