export default function pages(req, res) {
  res.status(200).json({ error: false, message: `Rest Api Change To V2`, url: `${req.headers["x-forwarded-proto"] || req.connection.encrypted? "https://": "http://"}${req.headers.host}/api/v2/` })
}