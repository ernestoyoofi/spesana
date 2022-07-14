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
    if (document.getElementById("navbar").style.marginBottom === '-2000px') {
      document.getElementById("navbar").style.marginBottom = "0px"
    } else {
      document.getElementById("navbar").style.marginBottom = "-2000px"
    }
  };
  useEffect(() => {
    if(router.pathname === '/search') {
      document.getElementById("searchMinBars").value = router.query.search_name
    }
  })
    return (
      <header className={styles.navbar}>
          <div className={styles.respon}>
              <div className={styles.row_navbar}>
                  <div className={styles.item_navbar}>
                    <span className={styles.btn_navbar} onClick={(e) => Navbar()}>
                        <FontAwesomeIcon icon={faBars} className={styles.icon}/>
                    </span>
                    <p style={{marginLeft: '10px'}}>Spesana</p>
                  </div>
                  <div className={styles.link_navbar} id="navbar">
                    <Link href="/">Beranda</Link>
                    <Link href="/karya">Karya</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/docs/">Dokument</Link>
                    <form action='/search'>
                      <input type="search" name="search_name" placeholder="Cari Disini" style={{
                        padding: "5px"
                      }} id="searchMinBars" />
                      <input type="hidden" name="from_url" value={apper}/>
                    </form>
                  </div>
              </div>
          </div>
      </header>
    )
}