import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
import Navbar_docs from '../../comp/nav-docs'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>Pola Bilangan | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon}>
        <div className={styles.docs_css}>
          <div className={styles.docs_bars}>
            <Navbar_docs/>
          </div>
          <div className={styles.docs_read}>
            <center>
              <b>Pola Bilangan</b>
            </center>
            <div className={styles.docs_img}>
              <img src="/assets/image/docs/pola-bilangan.jpg" alt="Pola Bilangan ~ Pengertian Pola Bilangan" width="100%" />
            </div>
            <div className={styles.docs_user_card}>
              <img src='/assets/avatar/user/ernestoyoofi.jpg' width="25px" />
              <div className={styles.docs_ptt}>
                <b>Ernestoyoofi</b> ~ 12 Juni 2022
              </div>
            </div>
            <p className={styles.space_text}></p>
            <b>Pengertian</b>
            <p className={styles.space_text}></p>
            <p>Dalama belajar matematika, kalian akan menemui banyak pola. Setiap pola tersebut mempunyai karakteristik rumus masing-masing. Pola dapat berupa bentuj geometri atau relasi matematika. Berikut ini contoh bentuk pola yang disajikan dalam bentuk titik dan bangun datar</p>
            <p className={styles.space_text}></p>
            <center>
              <img src='/assets/image/blog/matematika/contoh-pola-yang-disajikan-dalam-bentuk-titik-dan-bangun-datar.jpg' style={{ width: "100%", maxWidth: "600px" }} />
            </center>
            <center>Gambar 1.1 Berbagai betuk pola</center>
            <p className={styles.space_text}></p>
            <p>Pola mengandung makna bentuk atau susunan yang tetap dan Bilangan mengandung makna satuan jumlah yang merujuk pada angka. Jadi Pola Bilangan adalah bentuk atau susunan yang tetap pada suatu angka.</p>
            {/* <p>Pola mengandung makna bentuk atau susunan yang tetap dan Bilangan mengandung makna satuan jumlah yang merujuk pada angka. Jadi Pola Bilangan adalah bentuk atau susunan yang tetap pada suatu angka.</p> */}
            <p className={styles.space_text}></p>
            <b>Contoh Soal</b>
            <p style={{ position: "absolute", marginLeft: "15px", backgroundColor: "#ffffff" }}>Refrensi</p>
            <details>
              <ul style={{ marginLeft: "30px" }}>
                <li><a href='/books/kelas-8/Buku-paket-Matematika-semester-1-2017.pdf' target="_blank">Kelas 8 Kurikulum 2013 | Buku paket Matematika semester 1 2013.pdf</a></li>
                <li><a href='https://akupintar.id/info-pintar/-/blogs/pola-bilangan-pengertian-jenis-jenis-dan-rumus-serta-contoh-soal' target="_blank">Pola Bilangan: Pengertian, Jenis-Jenis dan Rumus, Serta Contoh Soal</a></li>
              </ul>
            </details>
            <p className={styles.space_text}></p>
            <iframe src='https://comments.ernestoyoofi.repl.co/chat?host=spesana-vercel-app&amp;filepath=/_docs_pola-bilangan&amp;maxwidth=false' frameBorder="none" width="100%" height="561px"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}