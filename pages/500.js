import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Custom500() {
    return (
        <div>
          <Head>
            <title>Spesana - 500 Error, Halaman Tidak Ditemukan</title>
            <meta name="description" content="Halaman Tidak Diemukan, Mungkin Halaman Tidak Ada Atau Kesalahan URL Yang Kamu Masukan" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <div className={styles.center_error_box}>
               <div className={styles.center_error}>
                   <b className={styles.title_error}><FontAwesomeIcon icon={faCircleInfo} className={styles.icon} style={{ marginRight : '5px'}}/>500 Internal Server Error</b>
                   <span className={styles.info_error}>Oops, Maaf, Server terjadi masalah, Coba refresh halaman ini Kembali, Atau coba kembail ke halaman <Link href="/">beranda</Link></span>
                   <a href="https://vercel.com/ernestoyoofi/spesana/deployments" className={styles.btn_error}>Check Deployments Status</a>
               </div>
            </div>
          </main>
        </div>
    )
}