import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
// Component
import Navbar from '../comp/navbar'
import ScrollTop from '../comp/srolltop'
import HeroImage from '../comp/heroimage'

export default function Home() {
  const router = useRouter()
  const p = router.query.search_name
  return (
    <div className={styles.container}>
      <Head>
        <title>{ p } | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan 7B" />
      </Head>
      <Navbar />
      { p }
    </div>
  )
}