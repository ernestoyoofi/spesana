import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
// Component
import Navbar from '../comp/navbar'
import ScrollTop from '../comp/srolltop'

export default function Home() {
  const router = useRouter()
  const p = router.query.search_name
  return (
    <div className={styles.container}>
      <Head>
        <title>{ p || "Cari Halaman" } | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan 7B" />
      </Head>
      <Navbar />
      { p }
      <div className={styles.loading} style={{ height: "100vh" }}>
        <div className={styles.loading_con}>
          <svg className={styles.loading_cyc}><circle cx="25" cy="25" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" className={styles.loading_par}/></svg>
        </div>
        <span>Waiting Process...</span>
      </div>
    </div>
  )
}