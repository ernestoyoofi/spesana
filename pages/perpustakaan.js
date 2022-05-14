import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Style from '../styles/Home.module.css'
import { useRouter } from "next/router"
import { faBars, faAngleLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
import Footer from '../comp/footer'
import Navbar from "../comp/navbar"

export default function Home() {
  const router = useRouter();
  
  const info = () => {
    console.log("Have a great day! 📣🐢 \nThis Project Create With: NextJS! https://nextjs.org/")
  };

  return (
    <div>
      <Head>
        <title>Perpustakaan | Spesana Nanggulan</title>
        <meta name="description" content="Perpustakaan Siswa Siswi SMPN1Nanggulan"/>
      </Head>
      <Navbar />
      <main className={Style.content_select}>
        <div className={Style.content_respon}>
          <div className={Style.content_label}>
            <span className={Style.content_label_text}>Blog</span>
            <div className={Style.content_col_3}>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="/img/tumb/25-07-2021_internal-tumb.jpg" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}>Test</p>
                    <span className={Style.content_desc}>Testing</span>
                    <a href="/blog_test" className={Style.content_readlink}>Baca Blog Berikut</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.content_label}>
            <span className={Style.content_label_text}>Wiki</span>
            <div className={Style.content_col_3}>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}>Nyi Ageng Serang</p>
                    <span className={Style.content_desc}></span>
                    <a href="" className={Style.content_readlink}>Lihat Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}