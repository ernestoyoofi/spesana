import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
import Comment from '../../comp/comment'
import Footer from '../../comp/footer'
// Modules Import
import db from '../../db/db-v3'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FESTIVAL LANGEN CARITA DEMANG CILIK | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
        <meta itemprop="image" content="https://img.youtube.com/vi/FDS84THZtbY/hqdefault.jpg"/>
        <meta property="og:image" content="https://img.youtube.com/vi/FDS84THZtbY/hqdefault.jpg"/>
        <meta image="twitter:image" content="https://img.youtube.com/vi/FDS84THZtbY/hqdefault.jpg"/>
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
        <Comment id="9wORrP6CtGNOqdbfZRVXSTcfsksxTN-karya"/>
      </div>
      <Footer />
    </div>
  )
}
