import Style from "../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faBookOpen, faHome, faImages } from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <div className={Style.tamplate}>
            <div className={Style.tamplate_page_error}>
                <b>Pages Error 404</b>
                <p>Halaman Tidak Ditemukan</p>
                <Link href="/">
                    <a href="/">Kembali Ke Halaman Utama</a>
                </Link>
            </div>
        </div>
    )
  }
  
  export default Footer