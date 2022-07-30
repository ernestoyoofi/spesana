const dbjson = require("./db.json")
const getHome = function() {
  return {
    karya: getKarya(),
    gallery: getGallery()
  }
}
const getKarya = function() {
    let resultsBack = []
    for(let i in dbjson.pages.karya) {
      if(dbjson.pages.karya[i].cards.isPublic) {
        resultsBack.push({
          title: dbjson.pages.karya[i].title,
          thubnails: dbjson.pages.karya[i].thubnails,
          description: ShortDesc(dbjson.pages.karya[i].description),
          url: dbjson.pages.karya[i].url,
          create_time: dbjson.pages.karya[i].create_time,
          id_cache: dbjson.pages.karya[i].id_cache,
          user: getUser(dbjson.pages.karya[i].absen)
        })
      }
    }
    return resultsBack
}
const getGallery = function() {
  let resultsBack = []
  for(let i in dbjson.pages.gallery) {
    if(dbjson.pages.gallery[i].cards.isPublic) {
      resultsBack.push({
        title: dbjson.pages.gallery[i].title,
        thubnails: dbjson.pages.gallery[i].thubnails,
        description: ShortDesc(dbjson.pages.gallery[i].description),
        url: dbjson.pages.gallery[i].url,
        create_time: dbjson.pages.gallery[i].create_time,
        id_cache: dbjson.pages.gallery[i].id_cache,
        user: getUser(dbjson.pages.gallery[i].absen)
      })
    }
  }
  return resultsBack
}
const getSearch = function(text) {

  let pushallin = []
  let resultsBack = []

  dbjson.pages.gallery.map(res => (pushallin.push(res)))
  dbjson.pages.karya.map(res => (pushallin.push(res)))

  for(let i in pushallin) {
    if(pushallin[i].description.match(text)) {
      return resultsBack
    } else {
      return resultsBack
    }
  }
}
const getUser = function(absen) {
  const Absen = dbjson.user.map(res => (res.absen))
  const search = Absen.indexOf(absen)
  if(search === -1) {
    return {
      err: "User Not Founded !"
    }
  } else {
    return dbjson.user[search]
  }
}
function ShortDesc(desc) {
  if(!desc) {
    return null
  } else if(desc.length > 120) {
    return desc.slice(0, 120) + " ..."
  } else {
    return desc
  }
}
function RenderJSON(id, type) {
  let data = []
  dbjson.pages[type].map(res => ( data.push(res.id_cache) ))
  const i = data.indexOf(id)
  if(i === -1) {
    return {
      error: "Unknow"
    }
  } else {
    return {
      title: dbjson.pages[type][i].title,
      thubnails: dbjson.pages[type][i].thubnails,
      description: ShortDesc(dbjson.pages[type][i].description),
      url: dbjson.pages[type][i].url,
      create_time: dbjson.pages[type][i].create_time,
      id_cache: dbjson.pages[type][i].id_cache,
      user: getUser(dbjson.pages[type][i].absen)
    }
  }
}
exports.getHome = getHome;
exports.getGallery = getGallery;
exports.getKarya = getKarya;
exports.getUser = getUser;
exports.RenderJSON = RenderJSON;