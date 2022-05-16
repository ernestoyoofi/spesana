import Style from "../styles/Home.module.css"
import Link from "next/link"

const ListKarya = () => {

    return (
        <div className={Style.content_label}>
        <span className={Style.content_label_text}>Karya</span>
        <div className={Style.content_col_3}>
          <div className={Style.content_box}>
            <div className={Style.content_cardpost}>
              <div className={Style.content_img}>
                <img src="/img/tumb/22-04-2022_wa-images-gambar.jpg" width="100%"/>
              </div>
              <div className={Style.content_text}>
                <p className={Style.content_title}>Gambar</p>
                <span className={Style.content_desc}>-</span>
                <Link href="/karya_gambar"><a className={Style.content_readlink}>Baca Selengkapnya</a></Link>
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
                <a href="/karya_festival-langen-carita-demang-cilik" className={Style.content_readlink}>Baca Selengkapnya</a>
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
                <a href="/karya_kreativitas-tanpa-batas" className={Style.content_readlink}>Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ListKarya