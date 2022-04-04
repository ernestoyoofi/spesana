import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import { faHome, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../comp/navbar"

export default function Karya() {
  const router = useRouter();
  
  const navbarclose = () => {
    document.getElementById("navbar").style.marginLeft = "-320px"
  };
  const navbaropen = () => {
    document.getElementById("navbar").style.marginLeft = "0px"
  };
  return (
    <div>
      <Head>
        <title>Gallery | Spesana Nanggulan</title>
        <meta name="description" content="Website Resmi Siswa Siswi SMPN 1 Nanggulan, Karya Anak Spesana, Inc."/>
      </Head>
      <Navbar />
    </div>
  )
}