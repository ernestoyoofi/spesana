import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <div>
      <Component {...pageProps} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="SMPN1Nanggulan, Spesana, Spesana Nanggulan, Ernesto Yoofi, ernestyoofi, Buku, Jadwal Sekolah, Sekolah Menengah Pertama, karya anak smp n 1 nanggulan, SMPN 1 Nanggulan, SMP Negeri 1 Nanggulan"/>
        <meta name="subject" content="website pendidikan" />
        <meta name="copyright" content="Spesana, Ernestoyoofi" />
        <meta name="language" content="Indonesia" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Ernestoyoofi, Ernesto yoofi" />
        <meta name="designer" content="Ernestoyoofi, Ernesto yoofi" />
        <meta name="owner" content="Ernesto Yoofi" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="LrdTUW9psUAMbh4Ia074-BPEVmcpBxF6Gwf0MSgQXZs" />
        <meta name="google" content="notranslate"/>
      </Head>
    </div>
  )
}

export default MyApp