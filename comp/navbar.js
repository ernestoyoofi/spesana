import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Comp() {
  const router = useRouter();

  const apper = router.pathname

  const Navbar = () => {
    if (document.getElementById("navbar").getAttribute("open-nav") === 'false') {
      document.getElementById("navbar").setAttribute("open-nav", "true")
      window.localStorage.setItem("open-nav", true)
      document.getElementById("navbar").style.marginBottom = "0px"
      document.getElementById("navbar_block").style.display = "inline"
      setTimeout(() => {
        document.getElementById("navbar_block").style.opacity = "1"
      }, 100)
    } else {
      document.getElementById("navbar").setAttribute("open-nav", "false")
      window.localStorage.setItem("open-nav", false)
      document.getElementById("navbar").style.marginBottom = "-2000px"
      document.getElementById("navbar_block").style.opacity = "0"
      setTimeout(() => {
        document.getElementById("navbar_block").style.display = "none"
      }, 100)
    }
  };
  useEffect(() => {
    const datanavbar = window.localStorage.getItem("open-nav") || window.localStorage.setItem("open-nav", false) 
    if(router.pathname === '/search') {
      document.getElementById("searchMinBars").value = router.query.search_name
    }
    console.log(apper.split("/")[1] || "index")
    if(datanavbar === "true") {
      document.getElementById("navbar").setAttribute("open-nav", "true")
      document.getElementById("navbar_block").style.display = "inline"
      document.getElementById("navbar").style.marginBottom = "0px"
      document.getElementById("navbar").style.transition = ".0s"
      setTimeout(() => {
        document.getElementById("navbar_block").style.opacity = "1"
        document.getElementById("navbar").style.transition = ".6s"
      }, 100)
    }
  })
    return (
      <header className={styles.navbar}>
          <div className={styles.navbar_block} style={{ opacity: "0", display: "none"}} id="navbar_block"></div>
          <div className={styles.respon}>
              <div className={styles.row_navbar}>
                  <div className={styles.item_navbar}>
                    <span className={styles.btn_navbar} onClick={(e) => Navbar()}>
                        <FontAwesomeIcon icon={faBars} className={styles.icon} style={{ width: '15px', height: '15px' }}/>
                    </span>
                    <p style={{marginLeft: '10px'}}>Spesana{/**<img src="/special-assets/indonesia-flag.png" width="40px" style={{ position: "absolute", marginLeft: "-13px", marginTop: "-13px" }}/>**/}</p>
                  </div>
                  <div className={styles.link_navbar} id="navbar" open-nav="false" style={{ transition: "0" }}>
                    <Link href={`/?from=${apper.replace('/', '%2F')}`}>Beranda</Link>
                    <Link href={`/karya?from=${apper.replace('/', '%2F')}`}>Karya</Link>
                    <Link href={`/blog?from=${apper.replace('/', '%2F')}`}>Blog</Link>
                    <Link href={`/gallery?from=${apper.replace('/', '%2F')}`}>Gallery</Link>
                    <Link href={`/docs?from=${apper.replace('/', '%2F')}`}>Dokument</Link>
                    <form action='/search'>
                      <input type="search" name="search_name" placeholder="Cari Disini" style={{
                        padding: "5px"
                      }} id="searchMinBars" />
                      <input type="hidden" name="from" value={apper}/>
                    </form>
                  </div>
              </div>
          </div>
      </header>
    )
}
