import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import Footer from "../../comp/footer"
import ScrollTop from '../../comp/srolltop'
import Comment from '../../comp/comment'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foto Kelas, Hari Olahraga Nasional | Spesana Nanggulan 24B</title>
        <meta name="description" content="8 Foto Tersedia /sp-content/image/foto-kelas..." />
        <meta itemprop="image" content="/sp-content/perview/foto-kelas-ornas.perview.jpg" />
        <meta property="og:image" content="/sp-content/perview/foto-kelas-ornas.perview.jpg" />
        <meta image="twitter:image" content="/sp-content/perview/foto-kelas-ornas.perview.jpg" />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon_pr}>
        <div className={styles.karya_readme}>
          <div className={styles.karya_responsive}>
            <p style={{ textAlign: "center", marginBottom: "5px" }}>Foto Kelas Hari Olahraga Nasional</p>
            <img src="/sp-content/image/foto-kelas-ornas.content.jpg" className={styles.karya_ppt}/>
            <img src="/sp-content/image/foto-kelas-ornas_1.content.jpg" className={styles.karya_ppt}/>
            <img src="/sp-content/image/foto-kelas-ornas_2.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-kelas-ornas_3.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-kelas-ornas_4.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-kelas-ornas_5.content.jpg" className={styles.karya_ppt}/>
            <img src="/sp-content/image/foto-kelas-ornas_6.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-kelas-ornas_7.content.jpg" className={styles.karya_ppt}/>
          </div>
        </div>
        <Comment id="0wORrp6CtGLOqdbAZRASSTcfsksxGA-gallery"/>
      </div>
      <Footer />
    </div>
  )
}
