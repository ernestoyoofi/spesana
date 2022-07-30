import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
import Comment from '../../comp/comment'
import Footer from '../../comp/footer'
// Modules Import
import db from '../../db/db'

export default function Home() {
  console.log(db.RenderJSON("9wORrP6CtGNOqdbfZRVXSTcfsksxTN-karya", "karya"))
  return (
    <div className={styles.container}>
      <Head>
        <title>FESTIVAL LANGEN CARITA DEMANG CILIK | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon_pr}>
        <div className={styles.karya_readme}>
          <div className={styles.karya_responsive}>
            <div className={styles.box_iframe}>
              <iframe className={styles.iframe} src="https://www.youtube.com/embed/FDS84THZtbY" title='FESTIVAL LANGEN CARITA "DEMANG CILIK"' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"></iframe>
            </div>
          </div>
        </div>
        <Comment />
      </div>
      <Footer />
    </div>
  )
}