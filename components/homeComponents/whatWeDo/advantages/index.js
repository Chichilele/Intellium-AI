import styles from './advantages.module.scss'
export default function Advantages() {
  return (
    <div className={styles.advantages}>
      <div className={styles.c1}>
        <h4>Without AiBoost</h4>
        <img src="/high.svg" alt="high"></img>
        <img src="/high.svg" alt="high"></img>
        <img src="/high.svg" alt="high"></img>
      </div>
      <div className={styles.c2}>
        <p className={styles.row2}>AI Infrastructure Set Up Costs</p>
        <p className={styles.row3}>AI Solutions Development Lead Time</p>
        <p className={styles.row4}>AI Team Size</p>
      </div>
      <div className={styles.c3}>
        <h4>Without AiBoost</h4>
        <img src="/low.svg" alt="low"></img>
        <img src="/low.svg" alt="low"></img>
        <img src="/low.svg" alt="low"></img>
      </div>
    </div>
  )
}
