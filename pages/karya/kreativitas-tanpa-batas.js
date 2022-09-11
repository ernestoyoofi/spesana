import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import Footer from "../../comp/footer"
import ScrollTop from '../../comp/srolltop'
import Comment from '../../comp/comment'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KREATIVITAS TANPA BATAS | Spesana Nanggulan 24B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
        <meta itemprop="image" content="" />
        <meta property="og:image" content="" />
        <meta image="twitter:image" content="" />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon_pr}>
        <div className={styles.karya_readme}>
          <div className={styles.karya_responsive}>
            <p style={{ marginBottom: "6px", textAlign: "center" }}>KREATIVITAS TANPA BATAS</p>
            <p style={{ marginBottom: "6px" }}>Judul tersebut mungkin tidaklah berlebihan jika kita menengok sejenak karya-karya Catarina Retno Astuti, siswa kelas VIIB SMP Negeri 1 Nanggulan, yang dengan daya imaginasinya mampu menorehkan harapan, ide, maupun peristiwa dengan goresan indah di atas kanvas.</p>
            <p style={{ maxWidth:"600px", margin:"auto"}}><img style={{ width: "100%" }} src="https://smpn1nanggulan.sch.id/media_library/posts/post-image-1629895393719.jpg"/></p>
            <p style={{ marginBottom: "6px" }}>Harapannya akan Kulon Progo yang kembali sehat dan terhindar dari virus covid-19 tertuang dengan detail yang apik dan menampakkan keunikan kabupaten dengan ciri khas pejuang wanita yang menunggang kuda. Beliau adalah Nyi Ageng Serang. Sebuah nama yang sekarang tersemat pada beberapa fasilitas umum, objek publik, atau pun nama destinasi wisata di Kabupaten Kulon Progo.</p>
            <p style={{ maxWidth:"600px", margin:"auto"}}><img style={{ width: "100%" }} src="https://smpn1nanggulan.sch.id/media_library/posts/post-image-1629895484866.jpg" /></p>
            <p style={{ marginBottom: "6px" }}>Bumi sebagai tempat hidup segala makhluk harus kita rawat dan jaga agar senantiasa asri dan sehat. Bumiku adalah rumahku. Tempat kita kembali setelah seharian beraktivitas, tempat kita belajar membangun keseimbangan, dan menciptakan harmoni antara alam dan penghuninya</p>
          </div>
        </div>
        <Comment id="9wORrP6CtGNOqdbfZRVXSTcfsksxTN-karya"/>
      </div>
      <Footer />
    </div>
  )
}
