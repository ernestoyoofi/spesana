import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
import Navbar_docs from '../../comp/nav-docs'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>Rest API | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon}>
        <div className={styles.docs_css}>
          <div className={styles.docs_bars}>
            <Navbar_docs/>
          </div>
          <div className={styles.docs_read}>
            <div className={styles.docs_img}>
              <img src="/assets/image/docs/rest-api.jpg" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}