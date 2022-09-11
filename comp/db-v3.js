const fileDB = require("./sp.db.json")

const shLink = function (id) {
  const search = fileDB.shortlink.map(data => (data.id)).indexOf(id)
  if(search === -1) {
    return "https://spna.vercel.app/shlink-err"
  } else {
    return fileDB.shortlink.map(a => (a.url))[search]
  }
}

/**
* @name listPage
* @param page 
* @param row
*/
const listPage = function (page, row) {
  let pageselect = null,
      rowselect  = null
  switch(page) {
    case "karya": { pageselect = "karya" }
    break
    case "perpustakaan": { pageselect = "lib" }
    break 
    case "gallery": { pageselect = "gallery" }
    break
    case "docs": { pageselect = "docs" }
    break
    case page: { pageselect = null }
  }
  if(!row? true : false) {
    rowselect = 5
  } else {
    rowselect = row
  }
  if(!pageselect) {
    return {
      karya: viewContent(fileDB.page.karya, rowselect),
      buku: viewContent(fileDB.page.buku, rowselect),
      gallery: viewContent(fileDB.page.gallery, rowselect),
      docs: viewContent(fileDB.page.docs, rowselect)
    }
  } else {
    return fileDB.page[pageselect]? { [pageselect]: viewContent(fileDB.page[pageselect], rowselect) } : {
      karya: viewContent(fileDB.page.karya, rowselect),
      buku: viewContent(fileDB.page.buku, rowselect),
      gallery: viewContent(fileDB.page.gallery, rowselect),
      docs: viewContent(fileDB.page.docs, rowselect)
    }
  }
}

const getContent = function (id) {
  let appendedAll = []

  viewContent(fileDB.page.karya, "*").map(a => (appendedAll.push(a)))
  viewContent(fileDB.page.buku, "*").map(a => (appendedAll.push(a)))
  viewContent(fileDB.page.gallery, "*").map(a => (appendedAll.push(a)))
  viewContent(fileDB.page.docs, "*").map(a => (appendedAll.push(a)))

  const search = appendedAll.map(p => (p.id)).indexOf(id)
  if(!(search === -1)) {
    return appendedAll[search]
  } else {
    return []
  }
}

module.exports = {
  shLink,
  listPage,
  getContent
}

function isTypeByPost(type, nutype) {
  if(nutype === type) {
    return true
  } else {
    return false
  }
}

function viewContent(json, row) {
  try {
    let content = [],
        rwpage = 4,
        rtdata = []

    if(row === "*") {
      rwpage = 40
    }
    json.forEach((a, index) => {
      if(a.details["post-type"] === "public") {
        content.push({
          index: index,
          title: a.title,
          thumb: a.thumb,
          desc:  a.desc,
          id: a.details["post-id"],
          extension: {
            isSendByAds: isTypeByPost("ads", a.details["post-ex"]?.ads),
            isSendByBot: isTypeByPost("ads", a.details["post-ex"]?.bot)
          },
          date: {
            format: a.details["post-date"]
          },
          post_by: a.details["post-by"],
          comments: a.details["post-comment"],
          link: a.details["page"]
        })
      }
    });
    for (let i = 0; i < rwpage; i++) {
      content[i]? rtdata.push(content[i]) : ""
    }
    return rtdata
  } catch(err) {
    return {
      err: true,
      msg: err.stack,
    }
  }
}
