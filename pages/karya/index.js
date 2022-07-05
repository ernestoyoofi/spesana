import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'

export default function Karya() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Karya - Spesana Nanggulan 8B</title>
        <meta name="description" content="Kumpulan Karya Siswa Siswi" />
      </Head>
      <Navbar />
    </div>
  )
}
