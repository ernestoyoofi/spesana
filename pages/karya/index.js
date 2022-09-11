import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
import Footer from '../../comp/footer'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';

import db from '../../db/db.js'
import db3 from "../../db/db-v3"

export default function Home() {
  const router = useRouter();

  const apper = router.pathname
  return (
    <div className={styles.container}>
      <Head>
        <title>Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon_pr}>
        <div className={styles.row_view_labels}>Karya</div>
        <div className={styles.row_view_content}>
          {db.getKarya()[0]? db.getKarya().map(res => (
            <a className={styles.content} href={res.url}>
              <div className={styles.content_img}>
                <img src={"/assets/image/karya/"+res.thubnails} width="100%" />
              </div>
              <div className={styles.varter}>
                <b className={styles.content_title}>{res.title}</b>
                <div className={styles.content_desc}>{res.description}</div>
                <div className={styles.content_times}>{res.create_time}</div>
                <div className={styles.content_author_card}>
                  <img src={res.user.avatar} alt={res} width="25px"/>
                  <span>{res.user.name}</span>
                </div>
              </div>
            </a>
          )) : <div>Tidak Ada</div>}
        </div>
      </div>
      <Footer>
      </Footer>
    </div>
  )
}
