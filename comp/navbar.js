import Style from "../styles/Home.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faBookOpen, faHome, faImages } from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

    return (
        <nav className={Style.navbar}>
        <div className={Style.navbar_respon}>
          <div className={Style.navbar_icons}>
            <img src="/favicon.ico" style={{width : '45px'}} />
          </div>
          <div className={Style.navbar_links}>
            <Link href="/">
              <a href="/">Beranda</a>
            </Link>
            <Link href="/perpustakaan">
              <a href="/perpustakaan">Perpustakaan</a>
            </Link>
            <Link href="/wiki">
              <a href="/wiki">Wiki</a>
            </Link>
            <Link href="/gallery">
              <a href="/gallery">Gallery</a>
            </Link>
            <Link href="/karya">
              <a href="/karya">Karya</a>
            </Link>
            <a className={Style.navbar_search}>
              <form action="/search.html">
                <input type="search" name="q" placeholder="Pencarian" />
                <input type="hidden" name="format" value="UTF-8" />
              </form>
            </a>
          </div>
          <div className={Style.navbar_links_m}>
            <Link href="/">
              <a href="/" title="Beranda"><FontAwesomeIcon icon={faHome} className={Style.icon} /></a>
            </Link>
            <Link href="/perpustakaan">
              <a href="/perpustakaan" title="Perpustakaan"><FontAwesomeIcon icon={faBook} className={Style.icon} /></a>
            </Link>
            <Link href="/wiki">
              <a href="/wiki" title="Wiki"><FontAwesomeIcon icon={faBookOpen} className={Style.icon} /></a>
            </Link>
            <Link href="/gallery">
              <a href="/gallery" title="Gallery"><FontAwesomeIcon icon={faImages} className={Style.icon} /></a>
            </Link>
            <Link href="/karya">
              <a href="/karya" title="Karya"><FontAwesomeIcon icon={faCreativeCommons} className={Style.icon} /></a>
            </Link>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Footer