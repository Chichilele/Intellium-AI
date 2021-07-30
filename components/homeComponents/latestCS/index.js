import CsCard from '../../csCard'
import { fetchAPI } from "../../../pages/api/api"

// styles
import styles from './latestCS.module.scss'

export default function LatestCS(props) {

  return (
    <div className={styles.latestCS}>
      <h2>Latest Case Studies</h2>
      <p className={styles.center}>We are collaborating with world class organisations to accelerate AI adoption by creating use cases that make businesses more efficient, minimise cost, increase sustainability and reduce waste.</p>
      <div className={styles.caseStudies}>

        {props.articles.slice(0, 3).map((article) => (
          <CsCard
            title={article.title}
            body={article.description ? article.description : article.body.slice(0, 90) + "..."}
          />))}
      </div>
    </div>
  )

}
