import Style from "../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const Blog = () => {

    return (
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
    )
  }
  
  export default Blog