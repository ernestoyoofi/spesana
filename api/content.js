const axios = require("axios")
const cheerio = require("cheerio")

module.exports = function (path) {
  return new Promise((berhasil, gagal) => {
    const baseURL = `https://www.smpn1nanggulan.sch.id/read${path}`
    axios.get(baseURL, { headers: { "User-Agent": "Spesana 8B - Fetch API" } }).then(a => {
      const $ = cheerio.load(a.data.replace(/\t/g, ""))
      let main = []
      let comments = []
      // Contents
      $("div.thumbnail.no-border p").each((i, el) => {
        if(!$(el).attr("style") && $("img",el).attr("src")) {
          main.push({
            type: "image",
            url: $("img",el).attr("src")
          })
        }
        if(!$(el).attr("style") && $("video",el).attr("src")) {
          main.push({
            type: "video",
            url: $("video",el).attr("src")
          })
        }
        if($("iframe", el) && $("iframe",el).attr("src")) {
          main.push({
            type: "iframe",
            url: $("iframe",el).attr("src")
          })
        }
        if($(el).attr("style")) {
          main.push({
            type: "text",
            align: $(el).attr("style")?.replace(/text-align: /g, "")?.replace(/;/g, ""),
            url: $(el).text()
          })
        }
      })
      // Comments
      $("div.panel-body div.panel-inverse").each((i, el) => {
        comments.push({
          nama: $(".panel-heading strong", el).text(),
          tanggal: $(".panel-heading span.text-muted", el).text(),
          pesan: $(".panel-body p", el).text()
        })
      })
      const contentRes = {
        thumbnail: $("div.thumbnail.no-border img:nth-of-type(1)").attr("src"),
        date: $("div.thumbnail.no-border p.by-author").text()?.split("~")[0]?.replace(/\n/g, ""),
        view: $("div.thumbnail.no-border p.by-author").text()?.split("~")[2]?.replace(/\n/g, ""),
        main,
        comments
      }
      berhasil({
        status: a.status,
        statusCode: a.statusCode,
        items: contentRes
      })
    }).catch(err => {
      gagal({
        status: err.request.res.statusMessage,
        statusCode: err.request.res.statusCode
      })
    })
  })
}