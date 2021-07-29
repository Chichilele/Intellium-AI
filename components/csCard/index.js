
// styles
import styles from './csCard.module.scss';

export default function CsCard(props) {
  return (
    <div className={styles.csCard} style={{gridColumn: props.column + "/ span 4"}} >
      <img src="/cs-icon.svg" alt="save"/>
      <h3>{props.title}</h3>
      <p className="smallt">{props.body}</p>
      <img className={styles.link} src="/cs-arrow.svg" alt="link"/>

    </div>
  )
}
