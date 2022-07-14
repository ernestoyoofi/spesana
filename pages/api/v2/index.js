import { useRouter } from 'next/router'

export default function pages(req, res) {
  const db = require("../../../database.json")
  res.status(200).json({
    status: 200,
    last_update: db.header.last_update,
    pages: {
      karya: db.karya, 
      blog: db.blog,
      gallery: db.gallery,
      docs: db.docs
    },
    instagram_post: db.smpn_post,
    headers_user: {
      hostname: req.headers.host,
      fullname: req.headers["x-forwarded-proto"] || req.connection.encrypted? "https://": "http://" + req.headers.host,
      connection: req.headers.connection,
      platform: req.headers['sec-ch-ua-platform'],
      user_agent: req.headers['user-agent'],
      referer: req.headers.referer,
      times: new Date()
    }
  })
}