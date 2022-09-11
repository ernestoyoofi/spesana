export default function handler(req, res) {
  if (req.method === 'POST') {
    res.send({ msg: "This Page Just Mentod GET" })
    res.status(304).end()
  } else {
    res.send({ page: "4" })
  }
}
