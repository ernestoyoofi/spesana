const data = require("../database.json")
import { faAngleDown  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <b><FontAwesomeIcon icon={faAngleDown} className={styles.icon} /> Matematika</b>
          <ul>
          {data.docs.matematika? data.docs.matematika.map((results) => (<li><a href={results.url}>{results.title}</a></li>)) : "" }
          </ul>
        </li>
        <li>
          <b><FontAwesomeIcon icon={faAngleDown} className={styles.icon} /> IPA</b>
          <ul>
            {data.docs.ipa? data.docs.ipa.map((results) => (<li><a href={results.url}>{results.title}</a></li>)) : "" }
          </ul>
        </li>
        <li>
          <b><FontAwesomeIcon icon={faAngleDown} className={styles.icon} /> IPS</b>
          <ul>
            {data.docs.ips? data.docs.ips.map((results) => (<li><a href={results.url}>{results.title}</a></li>)) : "" }
          </ul>
        </li>
        <li>
          <b><FontAwesomeIcon icon={faAngleDown} className={styles.icon} /> Seni Budaya</b>
          <ul>
            {data.docs.seni_budaya? data.docs.seni_budaya.map((results) => (<li><a href={results.url}>{results.title}</a></li>)) : "" }
          </ul>
        </li>
        <li>
          <b><FontAwesomeIcon icon={faAngleDown} className={styles.icon} /> Lainnya</b>
          <ul>
            {data.docs.other? data.docs.other.map((results) => (<li><a href={results.url}>{results.title}</a></li>)) : "" }
          </ul>
        </li>
      </ul>
    </div>
  )
}