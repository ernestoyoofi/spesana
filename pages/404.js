import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
// Component
import Navbar from '../comp/navbar'
import ScrollTop from '../comp/srolltop'

export default function Home() {
  const router = useRouter()
    return (
      <div className={styles.container}>
        <Head>
          <title>404 Halaman Tidak Ditemukan | Spesana 8B</title>
          <meta name="description" content="Website Siswa SMPN 1 Nanggulan 7B" />
        </Head>
        <Navbar />
        <container className={styles.error_container}>
          <article className={styles.error_info}>
            <div className={styles.error_img}>
              <img src="/404.jpg" width="100%"/>
            </div>
            <div className={styles.error_text}>
              <b>404 Halaman Tidak Ditemukan</b>
              <p>Halaman ini tidak dapat ditemukan, mungkin sudah diganti atau dihapus dari website</p>
              <a href="/" >Kembali Ke Halaman Induk <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{
                width:'10px'
              }}/></a>
            </div>
          </article>
        </container>
      </div>
    )
}