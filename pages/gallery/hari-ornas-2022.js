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
        <title>Hari Olahraga Nasional 2022 | Spesana Nanggulan 24B</title>
        <meta name="description" content="null"/>
        <meta itemprop="image" content=""/>
        <meta property="og:image" content=""/>
        <meta image="twitter:image" content=""/>
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon_pr}>
        <div className={styles.karya_readme}>
          <div className={styles.karya_responsive}>
            <p style={{ maxWidth: "600px", margin: "auto" }}>
              <video style={{ width: "100%" }} src="/sp-content/video/hari-ornas-2022.content.mp4" controls></video>
            </p>
          </div>
        </div>
        <Comment id="0wORrp6CtGLOqdbAZRASSTcfsksxGA-gallery"/>
      </div>
      <Footer />
    </div>
  )
}
