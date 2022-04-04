import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../comp/navbar"
import Tamplate404 from "../tamplate/tamp404"

export default function Costume404() {
  return (
    <div>
      <Head>
        <title>404 Error | Spesana Nanggulan</title>
        <meta name="description" content="Halaman Tidak Diemukan, Mungkin Halaman Tidak Ada Atau Kesalahan URL Yang Kamu Masukan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Tamplate404 />
      </main>
    </div>
  )
}