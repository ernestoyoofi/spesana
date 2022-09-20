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
        <title>Foto Upacara | Spesana Nanggulan 24B</title>
        <meta name="description" content="_Tidak Dapat Memberi Informasi Dari Web!_"/>
        <meta itemprop="image" content="https://spna.vercel.app/sp-content/perview/foto-upacara.perview.jpg"/>
        <meta property="og:image" content="https://spna.vercel.app/sp-content/perview/foto-upacara.perview.jpg"/>
        <meta image="twitter:image" content="https://spna.vercel.app/sp-content/perview/foto-upacara.perview.jpg"/>
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon_pr}>
        <div className={styles.karya_readme}>
          <div className={styles.karya_responsive}>
            <img src="/sp-content/image/foto-upacara.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-upacara_1.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-upacara_2.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-upacara_3.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-upacara_4.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-upacara_5.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-upacara_6.content.jpg" className={styles.karya_ppt} />
            <img src="/sp-content/image/foto-upacara_7.content.jpg" className={styles.karya_ppt} />
          </div>
        </div>
        <Comment id="0wORrp6CtGLOqdbAZRASSTcfsksxGA-gallery"/>
      </div>
      <Footer />
    </div>
  )
}
