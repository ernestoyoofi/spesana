import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="Spesana, Spesana Nanggulan, SMPN 1 Nanggulan, smpn1nanggulan.sch.id"/>
        <meta name="subject" content="website pendidikan" />
        <meta name="copyright" content="Spesana" />
        <meta name="language" content="Indonesia" />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Ernestoyoofi" />
        <meta name="designer" content="Ernestoyoofi" />
        <meta name="owner" content="Ernestoyoofi, Yosep Ghanny" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="wcC28rNmbYV1lR_OamoSTSVfx87bc4xPFDq_yZt62TA" />
        <link rel="icon" href="/assets/image/icon.jpg" />
        <script src='https://analytics.ernestoyoofi.repl.co/analytics.js?key=k0YNIjFlfZRVspzWcTM2vg94UArUeURNVPbW5nO7&amp;name=spesana'></script>
      </Head>
    </div>
  )
}

export default MyApp
