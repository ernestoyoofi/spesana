import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// Component
import Navbar from '../comp/navbar'
import ScrollTop from '../comp/srolltop'
import HeroImage from '../comp/heroimage'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

import db from '../database.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <HeroImage />
      <div className={styles.respon}>
        <div className={styles.row_view_labels}>Karya</div>
        <div className={styles.row_view_content}>
          {db.karya[0]? db.karya.map(results => (
            <a className={styles.content} href={results.url}>
              <div className={styles.content_img}>
                <img src={"/assets/image/karya/"+results.thubnails} width="100%" />
              </div>
              <b className={styles.content_title}>{results.title}</b>
              <div className={styles.content_desc}>{results.description}</div>
              <div className={styles.content_times}>{results.details.create_time}</div>
              <div className={styles.content_author_card}>
                <img src={"/assets/avatar"+results.details.author.avatar_url} alt={results.details.author.name} width="25px"/>
                <span>{results.details.author.name}</span>
              </div>
            </a>
          )) : <div className={styles.content_none}>Tidak Ada Halaman</div> }
        </div>
        <div className={styles.row_view_labels}>Blog</div>
        <div className={styles.row_view_content}>
          {db.blog[0]? db.blog.map(results => (
            <a className={styles.content} href={results.url}>
              <div className={styles.content_img}>
                <img src={"/assets/image/blog/"+results.thubnails} width="100%" />
              </div>
              <b className={styles.content_title}>{results.title}</b>
              <div className={styles.content_desc}>{results.description}</div>
              <div className={styles.content_times}>{results.details.create_time}</div>
              <div className={styles.content_author_card}>
                <img src={"/assets/avatar"+results.details.author.avatar_url} alt={results.details.author.name} width="25px"/>
                <span>{results.details.author.name}</span>
              </div>
            </a>
          )) : <div className={styles.content_none}>Tidak Ada Halaman</div> }
        </div>
        <div className={styles.row_view_labels}>Dokument</div>
        <div className={styles.row_view_content}>
          {db.docs?.matematika[0]? db.docs.matematika.map(results => (
            <a className={styles.content} href={results.url}>
              <div className={styles.content_img}>
                <img src={"/assets/image/docs/matematika/"+results.thubnails} width="100%" />
              </div>
              <b className={styles.content_title}>{results.title}</b>
              <div className={styles.content_desc}>{results.description}</div>
              <div className={styles.content_times}>{results.details.create_time}</div>
              <div className={styles.content_author_card}>
                <img src={"/assets/avatar"+results.details.author.avatar_url} alt={results.details.author.name} width="25px"/>
                <span>{results.details.author.name} ~ <i>{results.has.type}</i></span>
              </div>
            </a>
          )) : "" }
        </div>
        <div className={styles.row_view_content}>
          {db.docs?.bahasa_indonesia[0]? db.docs.bahasa_indonesia.map(results => (
            <a className={styles.content} href={results.url}>
              <div className={styles.content_img}>
                <img src={"/assets/image/docs/bahasa_indonesia/"+results.thubnails} width="100%" />
              </div>
              <b className={styles.content_title}>{results.title}</b>
              <div className={styles.content_desc}>{results.description}</div>
              <div className={styles.content_times}>{results.details.create_time}</div>
              <div className={styles.content_author_card}>
                <img src={"/assets/avatar"+results.details.author.avatar_url} alt={results.details.author.name} width="25px"/>
                <span>{results.details.author.name} {results.has.type}</span>
              </div>
            </a>
          )) : ""}
        </div>
        <div className={styles.row_view_content}>
          {db.docs?.bahasa_indonesia[0]? db.docs.bahasa_indonesia.map(results => (
            <a className={styles.content} href={results.url}>
              <div className={styles.content_img}>
                <img src={"/assets/image/docs/bahasa_inggris/"+results.thubnails} width="100%" />
              </div>
              <b className={styles.content_title}>{results.title}</b>
              <div className={styles.content_desc}>{results.description}</div>
              <div className={styles.content_times}>{results.details.create_time}</div>
              <div className={styles.content_author_card}>
                <img src={"/assets/avatar"+results.details.author.avatar_url} alt={results.details.author.name} width="25px"/>
                <span>{results.details.author.name} {results.has.type}</span>
              </div>
            </a>
          )) : ""}
        </div>
        <div className={styles.row_view_labels}>Gallery</div>
        <div className={styles.row_view_content}>
          {db.gallery[0]? db.gallery.map(results => (
            <a className={styles.content} href={results.url}>
              <div className={styles.content_img}>
                <img src={"/assets/image/gallery/"+results.thubnails} width="100%" />
              </div>
              <b className={styles.content_title}>{results.title}</b>
              <div className={styles.content_desc}>{results.description}</div>
              <div className={styles.content_times}>{results.details.create_time}</div>
              <div className={styles.content_author_card}>
                <img src={"/assets/avatar"+results.details.author.avatar_url} alt={results.details.author.name} width="25px"/>
                <span>{results.details.author.name}</span>
              </div>
            </a>
          )) : <div className={styles.content_none}>Tidak Ada Halaman</div> }
        </div>
      </div>
    </div>
  )
}