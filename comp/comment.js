// Next Modules 
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
// Component
import styles from '../styles/Home.module.css'
const hostDB = "http://localhost:5500"

export default function Comp() {
  const router = useRouter();
  const files = router.pathname.replace(/\//g, "_").slice(1)
  useEffect(() => {
    const form = document.forms['comment-form']
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const params = new URLSearchParams(new FormData(form));
      axios.post(`${hostDB}/comments-post`, params).then(res => { UpdateComments() })
    })
    window.onload = (event) => {
      UpdateComments()
    }
    function UpdateComments() {
      axios.get(`${hostDB}/comments-load?files=${files}`).then(res => {
        let data = ""
        res.data[0]? res.data.map(res => (data += `<div class="user-comments"><div class="images-pp"><img src="/assets/avatar/user/${res.img}" width="100%"></div><div class="text-cmd"><b>${res.name || ""}</b> ~ <i>${res.time || ""}</i><div>${res.text}</div>` )) : ""
        document.getElementById("comments-result").innerHTML = data
      })
    }
  })
  return (
    <div className={styles.comments}>
      <Script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></Script>
      <div className={styles.comments_box_form}>
        <form name="comment-form">
          <input type="name" name="nama" placeholder='Nama Kamu ...' required/>
          <textarea name="text" required placeholder='Ketik Pesan Kamu Disini ...'></textarea>
          <input type="hidden" name="host" value={files}/>
          <button type="submit" id="comments-submit"><FontAwesomeIcon icon={faPaperPlane} className={styles.icon} /> Post</button>
        </form>
        <div className={styles.val_comments} id="comments-result">
        </div>
      </div>
    </div>
  )
}