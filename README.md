### Spesana Web (8B)

Project Ini Dibuat Menggunakan [Next.js](https://nextjs.org/?utm=spesana.vercel.app?utm_source=spesana.vercel.app)

### Sosial Media
[Tiktok](https://www.tiktok.com/@spesana24b) | [YouTube]() | [Instagram](https://instagram.com/spesana24b/)
### Halaman Tersedia
- [Beranda](https://spesana.vercel.app/?utm_sc=readme.md)
- [Karya](https://spesana.vercel.app/karya?utm_sc=readme.md)
- [Perpustakaan](https://spesana.vercel.app/library?utm_sc=readme.md)
- [Gallery](https://spesana.vercel.app/gallery?utm_sc=readme.md)
- [Dokument](https://spesana.vercel.app/docs?utm_sc=readme.md)

### Untuk APL / API ( Application Programming Interface )
Halaman Belum Rilis Karena Hanya Tersedia Untuk Versi Ke 3

#### Library / Perpustakaan • [Klik](https://spna.vercel.app/api/v3/lib)

> Options 📌
```js
{
  _method: "GET",
  _path: "/api/v3/lib",
  _connection: "close" || "Keep-alive",
  _async: false
}
```
> Results 📝
```js
{
  status: 200,
  statusCode: "Ok",
  ermsg?: [],
  items: [
    {
      name: "Buku Bahasa Indonesia - Kelas 7", // Nama Buku
      cover: "https://spesana.vercel.app/sp-content/lib/no-image.thumb.jpg", // URL Foto Buku
      desc: "Penulis: Titik Harsiati / Agus Trianto / E.Kosasih \nPenerbit: Buku Sekolah Elektronik (BSE) \nISBN: 9786022829683 \nTerbit: Juni 1016 , 312 Halaman ...", // Deskripsi Pendek Tentang Buku
      url: "/perpustakaan/b-indo", // URL Halaman
      other?: {
        originalURL?: null,
        sendByAds?: false,
        typePromotion?: false,
        htmlJS5?: "https://ernestoyoofi.github.io/pdf-perview/dest/pdf.build.js"
      },
      date: {
        format: "2016-05-00T00:00:00.000Z",
        textrn: "Juni 2016"
      },
      post_by: {
        name: "BSE",
        id: "-bse-org",
        type: "org",
        url: "https://www.myedisi.com/bse/"
      }
    }
  ]
}
```
#### Guru Dan Tenaga Kependidikan • [Klik](http://spna.vercel.app/api/v3/karyawan)

> Options 📌
```js
{ 
  _method: "GET",
  _path: "/api/v3/karyawan",
  _connection: "close" || "Keep-alive",
  _async: true
}
```

> Results 📝
```js
{
  status: 200,
  statusCode: "Ok",
  ermsg?: [],
  items: [
    {
      pp_pic: "https://www.smpn1nanggulan.sch.id/media_library/employees/no-image.jpg", // URL Gambar Profile
      name: "-", // Nama
      gender: "Laki - Laki" || "Perempuan", // Gender
      birth_place: "Kulonprogo", // Tempat Lahir
      birth_date: "1 Januari 0", // Tanggal Lahir
      type: "Guru" // Tipe Perkerjaan
      ... 19 Items
    }
  ]
}
```
