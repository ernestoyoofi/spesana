export default function handler(req, res) {

    res.status(200).json(
        {
            widianingtyas : {
                nama : 'Widianingtyas',
                kls : 'Kelas 7B',
                hobi : 'Menari',
                lev : 21,
                verifikasi : true
            },
            yosepghanny : {
                nama : 'Yosep Ghanny',
                kls : 'Kelas 7B',
                hobi : 'Mengambar',
                lev : 19,
                verifikasi : true
            },
            ernestoyoofi : {
                nama : 'Ernestoyoofi',
                kls : 'Kelas 7B',
                hobi : 'Membuat Web',
                lev : 18,
                verifikasi : true
            }
        }
    )
}  