const axios = require("axios")
const cheerio = require("cheerio")

const options = {
  headers: {
    "User-Agent": "Spesana 8B - Fetch API",
    "Time-Track": new Date(),
    connection: "Keep-Alive"
  }
}

module.exports = function () {
  return new Promise((berhasil, gagal) => {
    axios.get("https://www.smpn1nanggulan.sch.id/employee-directory", options).then(a => {
      const $ = cheerio.load(a.data.replace(/\t/g, ""))
      let value = []
      $("table tbody tr").each((i, el) => {
        let valpush = {
          pp_pic: $("td:nth-of-type(2) img", el).attr("src"),
//        nik: $("td:nth-of-type(3)", el).text(),
          name: $("td:nth-of-type(4)", el).text(),
          gender: RGender($("td:nth-of-type(5)", el).text()),
          birth_place: $("td:nth-of-type(6)", el).text(),
          birth_date: $("td:nth-of-type(7)", el).text(),
          type: $("td:nth-of-type(8)", el).text()
        }
        value.push(valpush)
      })
      berhasil({
        status: a.status,
        value: value
      })
    })
  })
}
function RGender(val) {
  if(val === "L") {
   return "Laki - Laki"
  }
  if(val === "P") {
   return "Perempuan"
  }
}
