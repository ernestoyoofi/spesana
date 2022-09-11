import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from "react"
import styles from '../styles/Home.module.css'
// Component
import Navbar from '../comp/navbar'
import ScrollTop from '../comp/srolltop'

function searchList(props, path, apa) {
  const router = useRouter()
  const p = router.query.search_name
  console.log(path)
  useEffect(() => {
   document.querySelector("#autoinput").value = router.query.search_name || ""
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>{ p } | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan 7B" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.respon_pr}>
          <form action="/search" method="get" style={{ width: "100%", display: "flex" }}>
            <input type="search" id="autoinput"  name="search_name" style={{ marginRight: "20px", width: "100%" }} placeholder="Ketik disini untuk mencari..." />
            <button><FontAwesomeIcon icon={faSearch} className={styles.icon}/></button>
          </form>
          <ul>
            {p? "": <li><center>Apa Yang Ingin Kamu Cari?</center></li>}
          </ul>
        </div>
      </main>
      <div className={styles.loading} style={{ height: "100vh" }}>
        <div className={styles.loading_con}>
          <svg className={styles.loading_cyc}><circle cx="25" cy="25" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" className={styles.loading_par}/></svg>
        </div>
        <span>Waiting Process...</span>
      </div>
    </div>
  )
}

export default searchList
