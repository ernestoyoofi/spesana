export default function pages(req, res) {
  const db = require("../../../database.json")
  res.status(200).json({
    status: 200,
    last_update: db.header.last_update,
    karya: db.karya, 
    blog: db.blog,
    gallery: db.gallery,
    docs: db.docs
  })
}