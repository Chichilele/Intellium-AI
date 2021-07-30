
import Advantages from './advantages'
import styles from './wwd.module.scss'

export default function WhatWeDo() {
  return (
    <div className={styles.wwd}>
      <div className={styles.wwdIntro}>
        <h2>What We Do</h2>
        <h4>Intellium has developed AiBoost, a comprehensive end-to-end AI platform, democratizing AI and making complex Data Science technology available to everyone.</h4>
        <p className="smallt">The AiBoost cloud-based software platform automates the process of applying AI to a wide range of business challenges providing valuable data insights that allow our clients to make informed decisions that transform their operations across the organization.</p>
      </div>
      <img src="/biggraph.svg" className={styles.background} />
      <img className={styles.aiBoost} src="AiBoost.svg" alt="AiBoost process graph"  />
      <Advantages />
    </div>
      )
      }
