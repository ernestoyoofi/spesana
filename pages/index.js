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
        <title>Beranda | Spesana Nanggulan</title>
        <link rel="icon" href="https://spesana.vercel.app/favicon.ico" />
        <meta property="og:image" href="httpe://spesana.vercel.app/gallery/praktek-ipa-penyaringan.jpg" />
        <meta name="description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana, Inc."/>
      </Head>
      <Navbar />
      <main className={Style.content_select}>
        <div className={Style.content_respon}>
          <div className={Style.content_label}>
            <span className={Style.content_label_text}>Karya</span>
            <div className={Style.content_col_3}>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="/img/tumb/18-08-2021_yt-hddefault.jpg" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}>Alaramku Mendisiplinkanku</p>
                    <span className={Style.content_desc}>Sebuah komitmen dalam teks deskripsi</span>
                    <a href="/karya/alarmku-mendisiplinkanku" className={Style.content_readlink}>Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="/img/tumb/08-09-2021_yt-mqdefault.jpg" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}>FESTIVAL LANGEN CARITA &quot;DEMANG CILIK&quot;</p>
                    <span className={Style.content_desc}>Sutradara : suhari Ratmoko, S.Pd Penata Tari : Dwi P Penata busana : Pelangi entertaiment DEMANG CILIK July 1904...</span>
                    <a href="/karya/festival-langen-carita-demang-cilik" className={Style.content_readlink}>Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="/img/tumb/25-07-2021_internal-tumb.jpg" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}>Kreativitas Tanpa Batas</p>
                    <span className={Style.content_desc}>Bumi sebagai tempat hidup segala makhluk harus kita rawat dan jaga agar senantiasa asri dan sehat. Bumiku adalah ru...</span>
                    <a href="/karya/kreativitas-tanpa-batas" className={Style.content_readlink}>Baca Selengkapnya</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.content_label}>
            <span className={Style.content_label_text}>Gallery</span>
            <div className={Style.content_col_3}>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="/img/tumb/" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}></p>
                    <span className={Style.content_desc}></span>
                    <a href="" className={Style.content_readlink}>Lihat Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="/gallery/test-pcr.jpg" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}></p>
                    <span className={Style.content_desc}></span>
                    <a href="" className={Style.content_readlink}>Lihat Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="/gallery/praktek-ipa-penyaringan.jpg" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}></p>
                    <span className={Style.content_desc}></span>
                    <a href="" className={Style.content_readlink}>Lihat Selengkapnya</a>
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
                    <p className={Style.content_title}></p>
                    <span className={Style.content_desc}></span>
                    <a href="" className={Style.content_readlink}>Lihat Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}></p>
                    <span className={Style.content_desc}></span>
                    <a href="" className={Style.content_readlink}>Lihat Selengkapnya</a>
                  </div>
                </div>
              </div>
              <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                  <div className={Style.content_img}>
                    <img src="" width="100%"/>
                  </div>
                  <div className={Style.content_text}>
                    <p className={Style.content_title}></p>
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
