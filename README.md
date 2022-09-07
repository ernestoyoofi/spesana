### Spesana Web (8B)

Project Ini Dibuat Menggunakan [Next.js](https://nextjs.org/?utm=spesana.vercel.app?utm_source=spesana.vercel.app)

### Halaman Tersedia
- [Beranda](https://spesana.vercel.app/?utm_sc=readme.md)
- [Karya](https://spesana.vercel.app/karya?utm_sc=readme.md)
- [Perpustakaan](https://spesana.vercel.app/library?utm_sc=readme.md)
- [Gallery](https://spesana.vercel.app/gallery?utm_sc=readme.md)
- [Dokument](https://spesana.vercel.app/docs?utm_sc=readme.md)

### Untuk APL / API ( Application Programming Interface )
Halaman Belum Rilis Karena Hanya Tersedia Untuk Versi Ke 2

[List Halaman](https://github.com/ernestoyoofi/spesana#list-halaman-get) • 

#### List Halaman **[GET]**
> Header Atau Parameter Khusus
```js
{
  tp: "v2" || "v1", // Tidak Selalu (?)
  row_items: "rmd" || "10" || "all", // Tidak Selalu (?)
  items: "karya" || "buku" || "gallery" || "docs" // Tidak selalu
}
```

> Results / Hasil 📂
```js
{
  "beranda": {
    "karya": [
      {
        "title": "FESTIVAL LANGEN CARITA DEMANG CILIK",
        "desc": "Sutradara : suhari Ratmoko, S.Pd Penata Tari : Dwi P Penata busana : Pelangi entertaiment DEMANG CILIK July 1904, Bera ...",
        "date": {
          "value": "Jumat 8 Oktober 2021",
          "index": 4,
          "raw": "2021-10-08"
        },
        "upload_by": {
          "name": "Widianingtyas",
          "pic_id": "339a6a94-a568-4718-8cb3-45e37685616a"
          "absen": 23,
          "fork": false
        },
        "link": "/karya/festival-langen-carita",
        "pagescrap": "/v2/main/festival-langen-carita?tp=v2"
      }
      ... View 4 Raw / View By Parameters
    ],
    "buku": [
      {
        "title": "Pendidikan Pancasila dan Kewarganegaraan",
        "date": {
          "value": "Januari 2017",
          "index": 4,
          "raw": "2017-01"
        },
        "upload_by": {
          "name": "BSE",
          "host": "https://www.myedisi.com/"
          "org": true
        },
        "link": "/library/kelas8/ppkn-2017"
      }
      ... View 4 Raw / View By Parameters
    ]
  }
}
```
