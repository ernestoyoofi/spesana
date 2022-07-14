import { useAmp } from 'next/amp'

export const config = { amp: 'hybrid' }

import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'

export default function AMPpage() {
  const isAmp = useAmp()
  return (
    <div className={styles.container}>
      <Head>
        <title>Festival Langen Carita Demang Cilik | AMP - Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon}>
        <div className={styles.karya_readme}>
          <div className={styles.iframe_respon}>
            <embed src='https://www.youtube.com/embed/FDS84THZtbY'></embed>            
          </div>
        </div>
      </div>
    </div>
  )
}