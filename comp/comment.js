// Next Modules 
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Script from 'next/script';
import axios from "axios";
// Component
import styles from '../styles/Home.module.css'
import db from "../db/db-v3"
const hostDB = "https://spesana-comments.ernestoyoofi.repl.co"

export default function Comp({ id }) {
  const router = useRouter();
  const files = router.pathname.replace(/\//g, "_").slice(1)

  useEffect(() => {
/*    const aped = `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`
    document.getElementById("comment-by-load").innerHTML += aped*/
    setTimeout(() =>{ UpdateComments() },1000)
    let userComments = 0
    const form = document.forms['comment-form']
    form?.addEventListener("submit", (e) => {
      UpdateComments()
      e.preventDefault()
      const params = new URLSearchParams(new FormData(form));
      axios.post(`${hostDB}/comments-post`, params, { spna: { hs: window.location.hostname } }).then(res => { UpdateComments() }).catch(err => { alert(err) })
    })
    window.addEventListener("load", () => {
      console.log("Loading...")
      UpdateComments()
    })
    document.addEventListener("DOMContentLoaded", () => {
      console.log("Loading...")
      UpdateComments()
    })
    function UpdateComments() {
      axios.get(`${hostDB}/comments-load?files=${files}`).then(res => {
        for(let i in res.data) { userComments = Number(i) + 1}
        document.querySelector(".draw-value").innerText = `${userComments} Komentar`
        let data = ""
        let df = 0
        for(let i in res.data) {
        let a = res.data[i]
        data += `<div class="comments-user">
          <div class="headers"><b class="name">${a.name}</b><span class="date">${a.time}</span></div>
          <div class="bodyC">${a.text?.replace(/</g, "&lt;")?.replace(/>/g, "&gt;")?.replace(/(https?:\/\/[^\s]+)/g, function(url) { return '<a href="' + url + '" target="_blank">' + url + '</a>'; })?.replace(/\n/g, "<br />")?.replace(/:acumalaka:/g, '<img src="https://ernestoyoofi.github.io/ernestoyoofi/img/stk/acumalaka.jpg" width="17px"/>')}</div>
        </div>`
         df++
        }
        document.getElementById("comments-result").innerHTML = data
      }).catch(err => {
        console.log(err)
        document.getElementById("ater-comments").innerHTML = `<div class="comments-ac ac-err">Kesalahan Pada Server Bagian <i>${err.message?.replace("AxiosError","")}</i></div>`
      })
    }
  })
  console.log(db.getContent(id))
  const dbAccess = db.getContent(id).comments
  return (
    <div className={styles.comments} id="comment-by-load">
      {/*<Script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></Script>*/}
      <div className={styles.comments_box_form} id="ater-comments">
        { dbAccess? <form name="comment-form">
            <label>Nama</label>
            <input type="name" name="nama" placeholder='Nama Kamu ...' required/>
            <label>Pesan</label>
            <div id="viewDisplayReplys"></div>
            <textarea name="text" required placeholder='Ketik Pesan Kamu Disini ...'></textarea>
            <input type="hidden" name="host" value={files}/>
            <button type="submit" id="comments-submit"><FontAwesomeIcon icon={faPaperPlane} className={styles.icon} /> Post</button>
          </form>
         : <div className="comments-ac ac-err">Komentar Dinonaktifkan</div> }
          <p className="draw-value" style={{ marginLeft: "4px" }}>0 Komentar</p>
          <div id="comments-result">
            <div style={{ width: "100%", height: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div className={styles.loading_con}>
                <svg className={styles.loading_cyc}><circle cx="25" cy="25" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" className={styles.loading_par}/></svg>
              </div>
              <span>Loading...</span>
            </div>
          </div>
      </div>
    </div>
  )
}
