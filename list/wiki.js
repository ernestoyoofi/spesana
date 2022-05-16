import Style from "../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const Footer = () => {

    return (
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
    )
  }
  
  export default Footer