import styles from './knowMore.module.scss';

export default function KnowMore() {
  return (
    <div className={styles.container}>
      <h1>Want to know more?</h1>
      <p>Getting started on the AI journey can be challenging. We can help identify appropriate low hanging fruits that can demonstrate value from a Proof of Concept. And support the entire subsequent lifecycle to Production and Monitoring.</p>
      <form>
        <label>I am a <br/>
          <select>
            <option value="Domain Expert">Domain Expert</option>
            <option value="Service Engineer">Service Engineer</option>
            <option value="CIO/CTO">CIO/CTO</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Design Engineer">Design Engineer</option>
            <option value="Quality Assurance">Quality Assurance</option>
          </select>
        </label>
        <label>Looking to <br/>
          <select>
            <option value="Make faster and better decisions">Make faster and better decisions</option>
            <option value="Develop an AI app">Develop an AI app</option>
            <option value="reduce business costs">reduce business costs</option>
            <option value="optimise manufactoring process">optimise manufactoring process</option>
            <option value="reduce scrap/waste/energy consuption">reduce scrap/waste/energy consuption</option>

          </select>
        </label>
        <label>
        working in <br/>
          <select>
            <option value="Defence Industry">Defence Industry</option>
            <option value="Aerospace Industry">Aerospace Industry</option>
            <option value="Automotive Industry">Automotive Industry</option>
            <option value="Energy Industry">Energy Industry</option>
            <option value="Transport Industry">Transport Industry</option>
            <option value="Construction Industry">Construction Industry</option>
          </select>
        </label>
        <input className="button" type="submit" value="Let us help" />
      </form>
    </div>

  )
}
