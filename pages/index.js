import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
// Component
import Navbar from '../comp/navbar'
import ScrollTop from '../comp/srolltop'
import HeroImage from '../comp/heroimage'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  useEffect(() => {
    function DateNow() {
      const d = new Date()
      const year = d.getFullYear()
      const mounth = d.getMonth()
      const day = d.getDay()
      const hour = d.getHours()
      const minute = d.getMinutes()
      const second = d.getSeconds()
  
      document.getElementById("time").innerText = second +":"+ minute +":"+ hour +" "+ day +"/"+ mounth +"/"+ year
      setTimeout(DateNow, 1000)
    }
    DateNow()
  })
  return (
    <div className={styles.content}>
      <Head>
        <title>Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan 8B" />
      </Head>
      <Navbar />
      <ScrollTop />
      <HeroImage />
      <div className={styles.respon}>
        <div className={styles.sidebar_and_content}>
          <div className={styles.sidebar_view}>
            <b id="time"></b>
            <ul>
              <b>Karya Terbaru</b>
              <li><a href="/karya/gambar">Gambar</a></li>
              <li><a href="/karya/gambar">kreativitas tanpa</a></li>
            </ul>
          </div>
          <div className={styles.content_view}>
            <div className={styles.labels}>
              <b>Halaman Terpopuler</b> <FontAwesomeIcon icon={faChartLine} className={styles.icon}/>
            </div>
            <div className={styles.article_rows}>
              <article>
                <a href="/karya/gambar">
                  <div className={styles.image_article}>
                    <img width="100%" src="/assets/image/karya/gambar.thumb.jpg" />
                  </div>
                  <div className={styles.text_article}>
                    <b className={styles.title_article}>Gambar</b>
                    <p className={styles.desc_article}>-</p>
                  </div>
                </a>
              </article>
              <article>
                <a href="/karya/festival-langen-carita-demang-cilik">
                  <div className={styles.image_article}>
                    <img width="100%" src="/assets/image/karya/festival-langen-carita-demang-cilik.thumb.jpg" />
                  </div>
                  <div className={styles.text_article}>
                    <b className={styles.title_article}>FESTIVAL LANGEN CARITA "DEMANG CILIK"</b>
                    <p className={styles.desc_article}>Sutradara : suhari Ratmoko, S.Pd Penata Tari : Dwi P Penata busana : Pelangi entertaiment DEMANG...</p>
                  </div>
                </a>
              </article>
              <article>
                <a href="/karya/kreativitas-tanpa-batas">
                  <div className={styles.image_article}>
                    <img width="100%" src="/assets/image/karya/kreativitas-tanpa-batas.thumb.jpg" />
                  </div>
                  <div className={styles.text_article}>
                    <b className={styles.title_article}>Kreativitas Tanpa Batas</b>
                    <p className={styles.desc_article}>Bumi sebagai tempat hidup segala makhluk harus kita rawat dan jaga agar senantiasa asri dan sehat. Bumiku adalah ru...</p>
                  </div>
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
