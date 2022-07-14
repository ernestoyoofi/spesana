import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// Component
import Navbar from '../../comp/navbar'
import ScrollTop from '../../comp/srolltop'
import Navbar_docs from '../../comp/nav-docs'
// Modules Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

import db from '../../database.json'

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title>Dokument | Spesana Nanggulan 8B</title>
        <meta name="description" content="Website Siswa SMPN 1 Nanggulan " />
      </Head>
      <Navbar />
      <ScrollTop />
      <div className={styles.respon}>
        <div className={styles.docs_css}>
          <div className={styles.docs_bars}>
            <Navbar_docs/>
          </div>
          <div className={styles.docs_read}>
            <b>List Dokument</b>
            <ul>
              <li>
                <b>Matematika</b>
                <ul>
                  {db.docs.matematika? db.docs.matematika.map(results => (
                    <li><a href={results.url}>{results.title} - {results.description}</a></li>
                  )) : ""}
                </ul>
              </li>
              <li>
                <b>IPA</b>
                <ul>
                  {db.docs.ipa? db.docs.ipa.map(results => (
                    <li><a href={results.url}>{results.title} - {results.description}</a></li>
                  )) : ""}
                </ul>
              </li>
              <li>
                <b>IPS</b>
                <ul>
                  {db.docs.ips? db.docs.ips.map(results => (
                    <li><a href={results.url}>{results.title} - {results.description}</a></li>
                  )) : ""}
                </ul>
              </li>
              <li>
                <b>Seni Budaya</b>
                <ul>
                  {db.docs.seni_budaya? db.docs.seni_budaya.map(results => (
                    <li><a href={results.url}>{results.title} - {results.description}</a></li>
                  )) : ""}
                </ul>
              </li>
              <li>
                <b>Lainnya</b>
                <ul>
                  {db.docs.other? db.docs.other.map(results => (
                    <li><a href={results.url}>{results.title} - {results.description}</a></li>
                  )) : ""}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}