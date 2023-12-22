> **Informasi**
>
> Respository ini telah ditutup dan tidak digunakan kembali, repository baru telah kami pindah ke private

## 📚 Spesana24B
Selalu berbeda dari lainnya dan tetap bersatu

## 📱 Sosial Media
[Tiktok @spesana24b](https://www.tiktok.com/@spesana24b) <br />
[Instagram spesana24b](https://instagram.com/spesana24b/) <br />

## 📦 Modules Untuk API's
```js
const Spesana = require("@spesana24b/spesana")

const spna = new Spesana()
```
## 🔖 Contoh Penggunaan
> Login / Oauth by script
```js
const fs = require("fs")
const Spesana = require("@spesana24b/spesana")

const spna = new Spesana()

async function oauth() {
  const setup = await spna.teams({
    uuid_team: "TEAM-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" // Berikan UUID Team
  })
  
  return setup.data.url
}
function oauthotp() {
  const setup = await spna.teams({
    uuid_team: "TEAM-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX", // Berikan UUID Team
    ontimekey: true // Tambahkan on time key untuk mendapatkan kunci client
  })
  
  setup.on("realtime", (data) => {
    if(data.giveurl) {
      console.log(`Masuk melalu link ini :${data.giveurl}`)
    }
    if(data.getcode) {
      fs.writeFileSync("./token.json", JSON.stringify(data.getcode), "utf-8")
      console.log(`Berhasil mendapatkan code, tekan keyword "CTRL"+"C" untuk memberhentikan / membunuh proses script ini !`)
    }
  })
  setup.on("exit", (data) => {
    console.log("Client keluar dengan code:" + data)
    process.exit()
  })
}

// Dapatkan dan copy token yang diberikan
oauth().then((results) => {
  console.log(`Lanjutkan login ke ${results}`)
  // Setelah mendapatkan keys build client.
  // Simpan keys tersebut
})
// Dapatkan secara otomatis dan tersimpan kedalam file
oauthotp()
```
> Buat halaman via file atau variable
```js
const fs = require("fs")
const Spesana = require("@spesana24b/spesana")

const spna = new Spesana()

async function darifile() {
  const files = fs.readFileSync("./myblog.md").toString()
  
  const config = {
    token: `USER-KEY-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX | KEY-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`,
    namefile: "myblog", // Jangan akhiri dengan dot extension seperti myblog.md, namun myblog karena server tidak merekomendasikannya
    content: files,
    type: "blog" // Ubah tipe yang diinginkan [Warn] untuk tipe pages hanya terdapat 2 tipe yaitu "blog" dan "karya"
  }
  
  const hasil = await spna.createpage(config)
  
  return hasil.data
}

async function darivariable(content) {
  const config = {
    token: `USER-KEY-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX | KEY-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`,
    namefile: "myblog-1", // Jangan akhiri dengan dot extension seperti myblog.md, namun myblog karena server tidak merekomendasikannya
    content: content,
    type: "blog" // Ubah tipe yang diinginkan [Warn] untuk tipe pages hanya terdapat 2 tipe yaitu "blog" dan "karya"
  }
  
  const hasil = await spna.createpage(config)
  
  return hasil.data
}

darifile().then(console.log)
darivariable("Test !").then(console.log)
```
