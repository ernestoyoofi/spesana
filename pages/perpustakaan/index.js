import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
// Import Module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Perpustakaan() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Perpustakaan - Spesana Nanggulan 8B</title>
        <meta name="description" content="Perpustakaan" />
      </Head>
      <Navbar />
      <container className={styles.error_container}>
        <article className={styles.error_info}>
          <div className={styles.error_img}>
            <img src="/maintance.jpg" width="100%"/>
          </div>
          <div className={styles.error_text}>
            <b>Halaman Sedang Update !</b>
            <p>Halaman ini Sedang Tahap Update, Mungkin Anda Dapat Mengunjungi Setelah Halaman Siap Dipublikasi</p>
            <a href="/" >Kembali Ke Halaman Induk <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{
              width:'10px'
            }}/></a>
          </div>
        </article>
      </container>
    </div>
  )
}
