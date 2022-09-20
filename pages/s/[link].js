import { shLink } from "../../db/db-v3"
import Head from "next/head"
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ShortLink = (side) => {
  const router = useRouter()
  useEffect( () => {
    router.push(side.url)
  })
  return (
    <div>
        <Head>
          <title>{side.title}</title>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="description" content={side.desc} />
          <meta name="twitter:title" content={side.title} />
          <meta name="twitter:description" content={side.desc} />
          <meta name="twitter:image" content={side.img} />
          <meta name="twitter:url" content={side.link} />
          <meta property="og:title" content={side.title} />
          <meta property="og:description" content={side.desc} />
          <meta property="og:image" content={side.img} />
          <meta property="og:url" content={side.link} />
      </Head>
    </div>
  )
}

export async function getServerSideProps(pr) {
  const to = shLink(pr.params.link)
  return {
    props: to
  }
}

export default ShortLink
