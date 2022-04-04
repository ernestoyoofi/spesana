import Style from '../styles/Home.module.css'
const Footer = () => {

    const year = new Date().getFullYear();
    return (
      <footer className={Style.footer}>
          <div className={Style.footer_respon}>
            <div className={Style.footer_full_page}>
                <b>Copyright © 2021 - {year} Spesana Nanggulan All rights reserved.</b>
                <p>Create By <a href="https://github.com/ernestoyoofi">Ernestoyoofi</a></p>
            </div>
          </div>
      </footer>
    )
}
  
export default Footer