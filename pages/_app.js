/**
* Build By    : Ernestoyoofi
* Filetype    : _app.js
* Time Update : 18:29 WIB / Asia/Jakarta
* License     : MIT
**/
import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"9999999999999999999999999999999999999999999"}}>The site will no longer be available after March 12, 2023 !</div>
      <Component {...pageProps} />
      <Head>
        <meta name="keywords" content="Spesana, Spesana Nanggulan, SMPN 1 Nanggulan, smpn1nanggulan.sch.id"/>
        <meta name="subject" content="website pendidikan" />
        <meta name="copyright" content="Spesana" />
        <meta name="language" content="Indonesia" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Ernestoyoofi, Wibowo" />
        <meta name="designer" content="Ernestoyoofi" />
        <meta name="owner" content="Ernestoyoofi, Yosep Ghanny" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="wcC28rNmbYV1lR_OamoSTSVfx87bc4xPFDq_yZt62TA" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <Script src='https://analytics.ernestoyoofi.repl.co/analytics.js?key=k0YNIjFlfZRVspzWcTM2vg94UArUeURNVPbW5nO7&amp;name=spesana'></Script>
      </Head>
    </div>
  )
}

export async function getServerSideProps(context) {

  // set HTTP header
  context.res.setHeader("x-powered-by", "Spesana24B")

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default MyApp
