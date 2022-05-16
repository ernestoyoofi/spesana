import Style from "../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const Buku = () => {

    return (
    <div className={Style.content_label}>
        <span className={Style.content_label_text}>Buku</span>
        <div className={Style.content_col_3}>
            <div className={Style.content_box}>
                <div className={Style.content_cardpost}>
                    <div className={Style.content_img}>
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
  
  export default Buku