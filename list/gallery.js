import Style from "../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const Gallery = () => {

    return (
    <div className={Style.content_label}>
        <span className={Style.content_label_text}>Gallery</span>
        <div className={Style.content_col_3}>
            <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                    <div className={Style.content_img}>
                        <img src="/gallery/test-pcr.jpg" width="100%"/>
                    </div>
                    <div className={Style.content_text}>
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
                        <a href="" className={Style.content_readlink}>Lihat Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Gallery