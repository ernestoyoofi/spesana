export default function handler(req, res) {
  res.status(200).json(
    { 
      name_project : 'Spesana',
      author : 'Ernesto Yoofi',
      designer : 'Ernesto Yoofi',
      owner : 'Ernesto Yoofi',
      delpoy_with : 'Vercel App',
      category : 'School',
      location : 'Karang, Jati Sarono, Kec. Nanggulan, Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta',
      engine : 'Next JS'
    }
  )
}
