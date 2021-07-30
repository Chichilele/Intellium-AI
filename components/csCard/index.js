import Link from 'next/link'
import _ from 'lodash';
// styles
import styles from './csCard.module.scss';

export default function CsCard(props) {

  const columns = props.columns ? props.columns : "span 1"

  const pageLink = "articles/" + _.kebabCase(props.title)

  return (
    <Link href={pageLink}>
      <div className={styles.csCard} style={{gridColumn: columns}} >
        <img src="/cs-icon.svg" alt="save"/>
        <h3>{props.title}</h3>
        <p className="smallt">{props.body}</p>
        <img className={styles.link} src="/cs-arrow.svg" alt="link"/>

      </div>
    </Link>
  )
}
