import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
// Data Base
import db from '../../db/db.js'

export default function User() {
  const router = useRouter()
  const absenNo = Number(router.query.id)
  const dbret = db.getUser(absenNo)
  return (
    <div className={styles.container}>
      <Head>
        <title>{dbret?.name? || "Unknown"} | Spesana Nanggulan 8B</title>
        <meta name="description" content="Users Profile " />
      </Head>
      <Navbar />
      <ScrollTop />
    </div>
  )
}
