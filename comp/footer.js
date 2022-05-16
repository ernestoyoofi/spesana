import Style from '../styles/Home.module.css'
const Footer = () => {

    const year = new Date().getFullYear();
    return (
      <footer className={Style.footer}>
          <div className={Style.footer_respon}>
            <div className={Style.footer_lu}>
              <div className={Style.footer_item}>
                <b>Tentang Kami</b>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div className={Style.footer_item}>
                <b>Sosial Media</b>
                <ul>
                  <li><a href=''>Instagram</a></li>
                  <li><a href=''>Youtube</a></li>
                  <li><a href=''>InLink</a></li>
                </ul>
              </div>
              <div className={Style.footer_item}>
                <b>Bantuan</b>
                <ul>
                  <li><a href="https://spesana-api.github.io/">Dokumentasi</a></li>
                </ul>
              </div>
            </div>
            <div className={Style.footer_full_page}>
                <b>Copyright © 2021 - {year} Spesana Nanggulan All rights reserved.</b>
            </div>
          </div>
      </footer>
    )
}
  
export default Footer