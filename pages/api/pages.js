export default function handler(req, res) {
    const BASE_URL = process.env.BASE_URL || '';
    res.status(200).json(
        { 
            name : 'Spesana',
            desc : 'Ernesto Yoofi',
            details : 'Harap Lihat Dokumentasi Jika Belum Mengerti',
            pages : [
                {
                    name : `Gallery`,
                    pageUrl : `${BASE_URL}/gallery`,
                    value : [
                        {
                            name : '',
                            desc : null,
                            idContent : '12C031',
                            tgl : '',
                            url : ''
                        },
                        {
                            name : 'Praktek IPA',
                            desc : null,
                            idContent : '12C001',
                            tgl : '',
                            url : `${BASE_URL}/gallery/praktek-ipa`
                        }
                    ]
                },
                {
                    name : `Karya`,
                    pageUrl : `${BASE_URL}/karya`,
                    value : [
                        {
                            name : 'Alaramku Mendisiplinkanku',
                            desc : 'Sebuah komitmen dalam teks deskripsi',
                            idContent : '12C049',
                            tgl : 'Sabtu, 11 September 2021',
                            url : `${BASE_URL}/karya/alaramku-mendisiplinkanku`
                        },
                        {
                            name : 'Kreativitas Tanpa Batas',
                            desc : 'Bumi sebagai tempat hidup segala makhluk harus kita rawat dan jaga agar senantiasa asri dan sehat. Bumiku adalah ru...',
                            idContent : '12C043',
                            tgl : 'Rabu, 25 Agustus 2021',
                            url : `${BASE_URL}/karya/kreativitas-tanpa-batas`
                        },
                        {
                            name : 'FESTIVAL LANGEN CARITA "DEMANG CILIK"',
                            desc : 'Sutradara : suhari Ratmoko, S.Pd Penata Tari : Dwi P Penata busana : Pelangi entertaiment DEMANG CILIK July 1904, Berawal ketika K....',
                            idContent : '12C041',
                            tgl : 'Kamis, 7 Oktober 2021',
                            url : `${BASE_URL}/karya/festival-langen-carita-demang-cilik`
                        }
                    ]
                }
            ],
            content : null
        }
    )
}  
