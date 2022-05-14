import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import Script from 'next/script'
import Style from '../styles/Home.module.css'
import { faHome, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../comp/navbar"
import Footer from '../comp/footer'

export default function Karya() {
  const router = useRouter();
  
  const navbarclose = () => {
    document.getElementById("navbar").style.marginLeft = "-320px"
  };
  const navbaropen = () => {
    document.getElementById("navbar").style.marginLeft = "0px"
  };
  return (
    <div>
      <Head>
        <title>Gambar - Yosep Ghanny | Karya Spesana Nanggulan</title>
        <meta name="twitter:title" content="Gambar - Yosep Ghanny | Karya Spesana Nanggulan" />
        <meta name="description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana, Inc."/>
        <meta name="twitter:description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana, Inc." />
        <meta name="og:description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana, Inc." />
        <meta name="twitter:image" content="/img/tumb/22-04-2022_wa-images-gambar.jpg" />
        <meta name="og:image" content="/img/tumb/22-04-2022_wa-images-gambar.jpg" />
      </Head>
      <Navbar />
      <div className={Style.nipUp}></div>
      <main className={Style.content_select}>
        <div className={Style.content_respon}>
          <article className={Style.main_karya}>
            <span className={Style.profile_read}>
              <icon className={Style.icons_profile}>
                <img src="/user/yosepghanny/profile.jpg" className={Style.icons_profile_img}/>
              </icon>
              <span>
                <b>Yosep Ghanny</b>
                <p>Create on 22 April 2022 ~</p>
              </span>
            </span>
            <div className={Style.karya_respon_img}>
              <img src="/img/contents/wa-images-gambar.jpg" className={Style.karya_img_item} />
            </div>
          </article>
          <div style={{
            marginTop: '20px'
          }}>
            <iframe src="https://comments.ernestoyoofi.repl.co/chat?host=spesana-vercel-app&amp;filepath=/karya_gambar" style={{width: '100%', height: '800px', border: 'none', outline: 'none'}} className={Style.comment_box}></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
