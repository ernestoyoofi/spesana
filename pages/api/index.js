export default function pages(req, res) {
  const db = require("../../db/db.js")
  const host = `${req.headers["x-forwarded-proto"] || req.connection.encrypted? "https://": "http://"}${req.headers.host}`
  res.status(200).json({
    error: false,
    message: ``,
    pages: {
      karya: `${host}/api/karya`,
      gallery: `${host}/api/gallery`
    },
    result: db.getHome()
  })
}