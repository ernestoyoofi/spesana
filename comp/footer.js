import styles from '../styles/Home.module.css'

export default function Comp() {
  return (
    <footer className={styles.footer}>
     <div className={styles.respon}>
      <div className={styles.footer_row}>
        <div className={styles.footer_rowcontent}>
          <b>Terimakasih Untuk</b>
          <ul>
            <li>Pak
               <a href="https://instagram.com/bekti_wibowo_/" target="_blank"> Ketua Kelas</a>
            </li>
            <li>Wakil Ketua</li>
            <li>Kontribusi Atas Bantuan</li>
            <li>Dan Semua Siswa Siswi 24B</li>
          </ul>
        </div>
        <div className={styles.footer_rowcontent}>
          <b>Sosial Media</b>
          <ul>
            <li><a href="https://instagram.com/spesana24b/">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@spesana24b">Tiktok</a></li>
            <li><a href="https://youtube.com/c/null">YouTube</a></li>
          </ul>
        </div>
        <div className={styles.footer_rowcontent}>
          <b>Kategori</b>
          <ul>
            <li><i>Belum Ada Kategori :/ </i></li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_counter}>
        <span id="edit-footerdate">Spesana 24B 2022 ©</span>
      </div>
     </div>
    </footer>
  )
}
