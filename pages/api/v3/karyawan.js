async function apiv3(req, res) {
  const data = await require("../../../api/karyawan.js")()
  res.send(data)
};
export default apiv3
