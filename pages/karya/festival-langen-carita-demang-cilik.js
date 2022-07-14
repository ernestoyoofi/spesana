import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon}>
        <div className={styles.alert_yes}>
          <FontAwesomeIcon icon={faBolt} className={styles.icon} />
          <span>Halaman Ini Tersedia Versi AMP <a href='/amp/karya-9wORrP6CtGNOqdbfZRVXSTcfsksxTN'>Gunakan Halaman AMP</a></span>
        </div>
        <div className={styles.karya_readme}>
          <div className={styles.iframe_respon}>
            <embed src='https://www.youtube.com/embed/FDS84THZtbY'></embed>            
          </div>
        </div>
      </div>
    </div>
  )
}