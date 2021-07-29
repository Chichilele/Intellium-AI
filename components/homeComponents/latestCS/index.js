import CsCard from '../../csCard'
// styles
import styles from './latestCS.module.scss'

export default function LatestCS() {
  return (
    <div className={styles.latestCS}>
      <h2>Latest Case Studies</h2>
      <p>We are collaborating with world class organisations to accelerate AI adoption by creating use cases that make businesses more efficient, minimise cost, increase sustainability and reduce waste.</p>
      <CsCard
        column="2"
        title="Data Scientist internship with frontend development..."
        body="Apply by emailing CV to info@ai-labs.co.uk"
      />
      <CsCard
        column="6"
        title="Data Scientist internship with backend development..."
        body="Apply by emailing CV to info@ai-labs.co.uk"
      />
      <CsCard
        column="10"
        title="AI for Industrial Inspection"
        body="An use case demonstrating application of Artificial Intelligence algorithms to automate industrial inspection activities"
      />
    </div>
  )
}
