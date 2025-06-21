const images = [
  "https://i.pinimg.com/736x/27/1c/b0/271cb08f398b17419ad02011c3c25400.jpg",
  "https://i.pinimg.com/736x/66/17/fc/6617fc537d1b098887cefbf71c10e69f.jpg",
  "https://images4.alphacoders.com/136/1369866.png"
];

let index = 0;
const slideshow = document.getElementById("slideshow");

function changeBackground() {
  slideshow.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 4000);

const defaultAnimeData = [
    {
    "id": "anime-1749570932473854",
    "title": "Koe no Katachi",
    "image": "https://cdn.myanimelist.net/images/anime/6/79634l.jpg?_gl=1*s476dh*_gcl_au*MTcwOTg0ODAzMS4xNzQ4MzM2OTg4*_ga*OTIyMjIyMDgxLjE3NDgzMzY5ODY.*_ga_26FEP9527K*czE3NDk1Njk3MjgkbzgkZzEkdDE3NDk1NzA4NTMkajQwJGwwJGgw",
    "genre": "Drama, Movie",
    "description": "Sebagai anak muda yang liar, siswa sekolah dasar, Shouya Ishida berusaha mengalahkan kebosanan dengan cara yang paling kejam. Ketika Shouko Nishimiya yang tuli pindah ke kelasnya, Shouya dan teman-teman sekelasnya tanpa berpikir panjang menggertaknya untuk bersenang-senang. Namun, ketika ibunya memberi tahu pihak sekolah, dia dikucilkan dan disalahkan atas semua yang terjadi padanya. Dengan pindahnya Shouko dari sekolah, Shouya menjadi korban belas kasihan teman-teman sekelasnya. Dia dikucilkan tanpa belas kasihan di seluruh sekolah dasar dan menengah, sementara para guru menutup mata.",
    "uploadDate": "2025-06-10",
    "link": "https://pixeldrain.com/u/Xe4MAnM2"
  },
  {
    "id": "anime-1749571067177431",
    "title": "Sousou no Frieren",
    "image": "https://cdn.myanimelist.net/images/anime/1553/137254l.jpg?_gl=1*1j11obf*_gcl_au*MTcwOTg0ODAzMS4xNzQ4MzM2OTg4*_ga*OTIyMjIyMDgxLjE3NDgzMzY5ODY.*_ga_26FEP9527K*czE3NDk1Njk3MjgkbzgkZzEkdDE3NDk1NzEwNTAkajQkbDAkaDA.",
    "genre": "Adventure, Drama, Fantasy, Shounen",
    "description": "Selama satu dekade pencarian mereka untuk mengalahkan Raja Iblis, para anggota kelompok pahlawan - Himmel sendiri, pendeta Heiter, prajurit kurcaci Eisen, dan penyihir peri Frieren - menjalin ikatan melalui petualangan dan pertempuran, menciptakan kenangan berharga yang tak terlupakan bagi sebagian besar dari mereka.",
    "uploadDate": "2025-06-10",
    "link": "https://drive.usercontent.google.com/download?id=14B2v8cWkFeF0Nvcn1N06yWrQDWagD6Kv&export=download&authuser=0"
  },
  {
    "id": "anime-1749571321719934",
    "title": "Rakudai Kishi no Cavalry",
    "image": "https://cdn.myanimelist.net/images/anime/9/76493l.jpg",
    "genre": "Action, Fantasy, Romance, Ecchi, School",
    "description": "Hanya ada sedikit manusia di dunia ini yang memiliki kemampuan untuk memanipulasi jiwa mereka untuk membentuk senjata yang kuat. Dijuluki \"Blazer\", orang-orang ini belajar dan berlatih di Akademi Hagun yang bergengsi untuk menjadi Ksatria Penyihir; di antara para siswa, ada yang disebut sebagai kegagalan, yaitu Ikki Kurogane, satu-satunya Blazer berperingkat F. Namun, ketika murid terburuk di akademi tersebut melihat Stella Vermillion, seorang Blazer dengan peringkat A yang juga seorang putri, dalam keadaan telanjang, ia menantangnya untuk berduel dengan pertaruhan yang mengerikan - yang kalah akan menjadi budak sang pemenang. Tidak mungkin Stella bisa kalah, bukan?",
    "uploadDate": "2025-06-10",
    "link": "https://drive.usercontent.google.com/download?id=1AwjQ4QXh9xkSw2IiuIS8h-NNAN5kOepW&export=download&authuser=0"
  },
  {
    "id": "anime-1749571458143584",
    "title": "Bocchi the Rock!",
    "image": "https://cdn.myanimelist.net/images/anime/1119/149091l.jpg",
    "genre": "Comedy, Music",
    "description": "Merindukan untuk berteman dan tampil secara langsung dengan sebuah band, Hitori \"Bocchi\" Gotou yang kesepian dan cemas secara sosial mencurahkan waktunya untuk bermain gitar. Pada suatu hari yang menentukan, Bocchi bertemu dengan drummer yang ramah, Nijika Ijichi, yang mengundangnya untuk bergabung dengan Kessoku Band saat gitaris mereka, Ikuyo Kita, melarikan diri sebelum pertunjukan pertama mereka. Tak lama kemudian, Bocchi bertemu dengan teman satu bandnya yang terakhir, yaitu bassis keren Ryou Yamada.",
    "uploadDate": "2025-06-10",
    "link": "https://drive.usercontent.google.com/download?id=1YyC3XN6X9F0LiyPeBU30XnLspsfawP8y&export=download&authuser=0"
  },
  {
    "id": "anime-1749571750177517",
    "title": "Tensei Oujo to Tensai Reijou no Mahou Kakumei",
    "image": "https://cdn.myanimelist.net/images/anime/1960/126928l.jpg?_gl=1*1iez9ku*_gcl_au*MTcwOTg0ODAzMS4xNzQ4MzM2OTg4*_ga*OTIyMjIyMDgxLjE3NDgzMzY5ODY.*_ga_26FEP9527K*czE3NDk1Njk3MjgkbzgkZzEkdDE3NDk1NzE3MjgkajYwJGwwJGgw",
    "genre": "Fantasy, Girls Love",
    "description": "Putri Anisphia \"Anis\" Wynn Palletia selalu bermimpi untuk terbang melintasi langit, meskipun orang-orang di kerajaannya menganggapnya sebagai ambisi yang konyol. Yang juga bertentangan dengan cita-citanya adalah kenyataan bahwa Anis tidak mampu menggunakan sihir meskipun berstatus bangsawan. Menolak untuk menyerah begitu saja, ia melepaskan haknya atas takhta, dan berfokus untuk mengembangkan \"ilmu sihir\" dengan menggabungkan berbagai sumber daya dengan pengetahuan dari kehidupan sebelumnya di Bumi.",
    "uploadDate": "2025-06-10",
    "link": "https://drive.usercontent.google.com/download?id=19kfaHS4g2Ln8m5ljjsBRoEIK5huWCqo0&export=download&authuser=0"
  },
  {
    "id": "anime-1749623431997722",
    "title": "Hellsing ultimate",
    "image": "https://cdn.myanimelist.net/images/anime/2/8674l.jpg",
    "genre": "Action, Horror, Supernatural, Military, Vampire",
    "description": "Ada makhluk kegelapan dan kejahatan yang mengganggu malam, melahap manusia yang cukup malang untuk terperangkap dalam cengkeraman mereka. Di sisi lain ada Hellsing, sebuah organisasi yang didedikasikan untuk menghancurkan kekuatan supernatural yang mengancam eksistensi umat manusia. Pemimpinnya adalah Integra Fairbrook Wingates Hellsing, yang memimpin militer yang kuat dan menghabiskan hidupnya untuk memerangi mayat hidup.",
    "uploadDate": "2025-06-11",
    "link": "https://drive.usercontent.google.com/download?id=1i2qdZ12NI8Z0OtOaUdhrXgXO8O6mbDFP&export=download&authuser=0"
  },
  {
    "id": "anime-1749623659290441",
    "title": "Cyberpunk: Edgerunners",
    "image": "https://cdn.myanimelist.net/images/anime/1562/108236l.jpg",
    "genre": "Action, Sci-Fi, Drama, Crime",
    "description": "Mimpi ditakdirkan untuk mati di Night City, sebuah kota metropolitan California yang futuristik. Sebagai seorang remaja yang tinggal di daerah kumuh di kota ini, David Martinez berusaha memenuhi harapan ibunya untuk mencapai puncak Arasaka, perusahaan keamanan terkemuka di dunia. Untuk itu, ia bersekolah di Akademi Arasaka yang bergengsi, sementara ibunya bekerja tanpa lelah untuk mempertahankan kelangsungan hidup keluarga mereka.",
    "uploadDate": "2025-06-11",
    "link": "https://drive.usercontent.google.com/download?id=1-Hni8SJuZxawYAVYXkj28-lmDvOLZspy&export=download&authuser=0"
  },
  {
    "id": "anime-174962394839556",
    "title": "Yuukoku no Moriarty",
    "image": "https://cdn.myanimelist.net/images/anime/1464/108330l.jpg",
    "genre": "Mystery, Historical, Crime, Psychological",
    "description": "Pada akhir abad ke-19, Britania Raya telah menjadi kerajaan terbesar yang pernah dikenal dunia. Di balik kesuksesannya, hirarki ekonomi yang kaku di negara ini mendikte nilai kehidupan seseorang hanya berdasarkan status dan kekayaan. Tidak mengherankan jika sistem ini menguntungkan kaum aristokrat di puncak dan membuat kelas pekerja tidak mungkin naik pangkat.",
    "uploadDate": "2025-06-11",
    "link": "https://giantcosedu-my.sharepoint.com/personal/jjru7296_giant_cos_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fjjru7296%5Fgiant%5Fcos%5Fedu%2FDocuments%2F2%2FYuukoku%20no%20Moriarty%2F%5BAlqanime%5D%5FMoriarty%5F720p%2Erar&parent=%2Fpersonal%2Fjjru7296%5Fgiant%5Fcos%5Fedu%2FDocuments%2F2%2FYuukoku%20no%20Moriarty&ga=1"
  },
  {
    "id": "anime-1749724915349462",
    "title": "Sasayaku You ni Koi wo Utau",
    "image": "https://cdn.myanimelist.net/images/anime/1518/137892l.jpg",
    "genre": "Drama, Girls Love, Romance",
    "description": "Himari Kino adalah gadis yang periang dan supel yang mampu berteman dengan siapa pun yang diinginkannya. Saat mendaftar di sekolah menengah atas dan menghadiri upacara pembukaan mahasiswa baru, Himari jatuh cinta pada Yori Asanagi, seorang kakak kelas yang pendiam, saat Yori tampil di band. Setelah pertunjukan, Himari mengungkapkan cintanya, tetapi Yori tidak berpengalaman dalam hal percintaan.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1e9QKSEu7hE02uuFhFuxKbH4NUPBX_zOD&export=download&authuser=0"
  },
  {
    "id": "anime-1749725199439877",
    "title": "Koori Zokusei Danshi to Cool na Douryou Joshi",
    "image": "https://cdn.myanimelist.net/images/anime/1546/126451l.jpg",
    "genre": "Comedy, Romance, Slice of Life, Supernatural",
    "description": "Kisah romansa antara seorang pria keturunan yokai salju yang secara tidak sengaja membekukan sekitarnya saat gugup, dan rekan kerjanya yang tenang dan baik hati.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1BUedxY1w1KGopqkPRJTDtPTxslOFvOVl&export=download&authuser=0"
  },
  {
    "id": "anime-1749725515074839",
    "title": "Otonari no Tenshi-sama ni Itsu no Ma ni ka Dame Ningen ni Sareteita Ken",
    "image": "https://cdn.myanimelist.net/images/anime/1804/120371l.jpg",
    "genre": "Romance, Slice of Life, School",
    "description": "-Iklan-\nMahiru Shiina pantas dijuluki \"Malaikat\": dia adalah wanita cantik yang dicintai semua orang, dan dia unggul dalam bidang akademik dan atletik. Shiina hidup di dunia yang sama sekali berbeda dari Amane Fujimiya, tetangga sebelahnya. Meskipun tinggal sangat dekat, mereka tidak pernah berbicara satu kali pun. Namun, keheningan mereka pecah ketika Fujimiya melihat Shiina duduk dengan murung di ayunan di tengah hujan badai yang lebat dan meminjamkan payungnya",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=19XlIcMXUA2cWjalfyqifhjFilZ0WJz0y&export=download&authuser=0"
  },
  {
    "id": "anime-1749725859228699",
    "title": "Chainsaw Man",
    "image": "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
    "genre": "Action, Fantasy, Shounen",
    "description": "Denji dirampok dari kehidupan remajanya yang normal, tidak punya apa-apa selain hutang ayahnya yang sangat besar. Satu-satunya temannya adalah hewan peliharaannya, iblis gergaji mesin Pochita, yang dengannya dia membunuh iblis demi uang yang pasti berakhir di kantong yakuza. Yang bisa dilakukan Denji hanyalah memimpikan kehidupan yang baik dan sederhana: kehidupan dengan makanan lezat dan pacar yang cantik di sisinya. Tetapi tindakan pengkhianatan serakah oleh yakuza menyebabkan kematian Denji yang brutal dan sebelum waktunya, menghancurkan semua harapannya untuk mencapai kebahagiaan.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1-bWYilCKutitGPnMCqj7Ldad8D_CGCDh&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000001",
    "title": "Mushoku Tensei (Season 1 part 1)",
    "image": "https://cdn.myanimelist.net/images/anime/1236/103585l.jpg",
    "genre": "Adventure, Fantasy, Isekai, Ecchi",
    "description": "Reinkarnasi sebagai bayi tanpa ingatan masa lalu, Rudeus Greyrat memutuskan untuk menjalani kehidupan barunya dengan sepenuh hati dan mengejar impiannya: menjadi penyihir terkuat.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=12rt2SjmU69SjmeYbBQ5sJMrjcw7hsk-0&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000002",
    "title": "Jujutsu Kaisen (Season 1)",
    "image": "https://cdn.myanimelist.net/images/anime/1046/107701l.jpg",
    "genre": "Action, Supernatural, Shounen, School, Demons",
    "description": "Yuji Itadori menelan jari Sukuna untuk menyelamatkan teman dan menjadi inkan Sukuna, dimulailah petualangannya sebagai murid sekolah jujutsu.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1D00SGJ28wcquVDLI1uA-sr291H_Y7R6B&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000003",
    "title": "Spy × Family (Season 1)",
    "image": "https://cdn.myanimelist.net/images/anime/1148/119119l.jpg",
    "genre": "Action, Comedy, Spy, Slice of Life",
    "description": "Misi mengumpulkan intelijen membuat mata-mata Twilight harus membentuk keluarga palsu—ibu adalah pembunuh bayaran, anak adalah telepatis, dan mereka harus berperan normal!",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1QgK0KCjbWsaghl8sAnC9oEERU1WjudW6&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000004",
    "title": "Lycoris Recoil",
    "image": "https://cdn.myanimelist.net/images/anime/1392/124401l.jpg",
    "genre": "Action, Slice of Life",
    "description": "Tim gadis agen rahasia yang menjalankan polisi swasta untuk menjaga keamanan Tokyo, melalui keseharian sambil menghadapi ancaman kriminal.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1nVazYmerLBqoXfagtN8NVmBHNRXhTvdR&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000005",
    "title": "Oshi no Ko",
    "image": "https://cdn.myanimelist.net/images/anime/1077/124345l.jpg",
    "genre": "Drama, Supernatural, Slice of Life",
    "description": "Sebagai dokter fans berat idola, Ai Hoshino, kehidupan Gorou berubah setelah dirinya bereinkarnasi sebagai anak idola itu—memulai kisah baru penuh intrik dunia hiburan.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1B__o1a5O22Z7ESui_qAZfkmzoHnJH-rb&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000006",
    "title": "Vinland Saga (Season 1)",
    "image": "https://cdn.myanimelist.net/images/anime/1048/102249l.jpg",
    "genre": "Action, Historical, Seinen",
    "description": "Thorfinn, anak seorang Viking, tumbuh terobsesi dengan balas dendam terhadap pembunuh ayahnya—namun perjalanan panjang menuntunnya memahami arti kehidupan dan perang.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1bNAVq5wu6Sa4zHt9-ZtUBLJ-TTWCH7wK&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000007",
    "title": "Made in  (Season 1)",
    "image": "https://cdn.myanimelist.net/images/anime/6/86733l.jpg",
    "genre": "Adventure, Fantasy, Mystery",
    "description": "Riko, gadis kecil yang mau menyelidiki rahasia Abyss demi menemukan ibunya. Bersama robot bocah Reg, mereka menjelajah jurang yang penuh bahaya sekaligus keajaiban.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1myDRQxt53x395WgrCESImTh9G4M9s6yw&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000008",
    "title": "Tensei shitara Slime Datta Ken",
    "image": "https://cdn.myanimelist.net/images/anime/1694/93337l.jpg",
    "genre": "Action, Fantasy, Isekai",
    "description": "Mati dibunuh, Satoru bereinkarnasi sebagai slime di dunia fantasi—menggunakan kekuatannya untuk membangun komunitas makhluk kuat.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1ZKLaRV0mjVDmgrRVWl5W-V89SS-KZDC8&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000009",
    "title": "Attack on Titan",
    "image": "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    "genre": "Action, Military, Mystery, Super Power",
    "description": "Humanity fights for bertahan hidup dari raksasa pemakan manusia. Eren Yeager bersumpah memusnahkan setiap Titan setelah menyaksikan kehancuran kota dan kematian ibunya.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1pOcemNbncA_Z3b49V1ZvAV8CRboDAn_X&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000010",
    "title": "The Promised Neverland",
    "image": "https://cdn.myanimelist.net/images/anime/1903/96943l.jpg",
    "genre": "Mystery, Psychological, Thriller",
    "description": "Emma, Norman, dan Ray menemukan rahasia mengerikan panti asuhan mereka—membuat mereka merencanakan pelarian dan perjuangan bersama untuk kebebasan.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1SbIDcQPyZdGzit92-ea7ucuXWaYYmwX1&export=download&authuser=0"
  },
  {
    "id": "anime-1749824825433564",
    "title": "Citrus",
    "image": "https://cdn.myanimelist.net/images/anime/11/89985l.jpg",
    "genre": "Drama, Girls Love, Romance",
    "description": "Selama musim panas tahun pertamanya di sekolah menengah atas, ibu Yuzu Aihara menikah lagi, memaksanya untuk pindah ke sekolah baru. Bagi seorang sosialita modis seperti Yuzu, kejadian yang tidak mengenakkan ini hanyalah kesempatan lain untuk mendapatkan teman baru, jatuh cinta, dan akhirnya merasakan ciuman pertama. Sayangnya, impian dan gaya Yuzu tidak sesuai dengan sekolah barunya yang sangat ketat, khusus perempuan, yang dipenuhi dengan siswa yang penurut dan anak-anak yang tidak naik kelas. Penampilannya yang mencolok berhasil menarik perhatian Mei Aihara, ketua OSIS yang cantik dan mengesankan, yang segera membelai tubuh Yuzu dengan sensual dalam upaya untuk menyita ponselnya.",
    "uploadDate": "2025-06-13",
    "link": "https://drive.usercontent.google.com/download?id=13nznz9eSt4NRTL8NqykJMj1xS4zplsaT&export=download&authuser=0"
  },
  {
    "id": "anime-1749825257960976",
    "title": "Shinsekai yori",
    "image": "https://cdn.myanimelist.net/images/anime/12/36775l.jpg",
    "genre": "Drama, Fantasy, Horror, Mystery, Sci-Fi, Supernatural",
    "description": "Pada tahun 2011, sebagian kecil manusia mulai menunjukkan kemampuan psikokinetik yang dikenal sebagai \"Cantus.\" Lebih dari satu milenium kemudian, di kota kecil Kamisu 66, Saki Watanabe adalah teman terakhirnya yang membangkitkan kekuatannya dan bergabung dengan Sage Academy, sekolah untuk paranormal sepertinya. Meskipun semua orang di lembaga itu memiliki Cantus, mereka tidak semuanya setara; tak lama setelah Saki mendaftar, salah satu teman sekelasnya yang dianggap lebih lemah dari yang lain tiba-tiba menghilang.",
    "uploadDate": "2025-06-13",
    "link": "https://drive.usercontent.google.com/download?id=1HK_lTOFOFEY5OTqY-6AlypjTyF4qNecd&export=download&authuser=0"
  },
  {
    "id": "anime-1749825450765436",
    "title": "Charlotte",
    "image": "https://cdn.myanimelist.net/images/anime/5/72941l.jpg",
    "genre": "School, Super Power, Drama",
    "description": "Jika bukan karena kemampuannya untuk menguasai pikiran dan tubuh orang lain, Yuu Otosaka akan menjadi siswa SMA biasa. Meskipun hanya berlangsung selama lima detik, kekuatan misterius Yuu memungkinkannya untuk menipu dan menjadi siswa terbaik di kelasnya dan masuk ke SMA bergengsi, tempat ia melanjutkan tindakan tidak jujurnya.",
    "uploadDate": "2025-06-13",
    "link": "https://drive.usercontent.google.com/download?id=1ITzkp1sQ23ghYiBgLBq5ztUmEFX0ghY9&export=download&authuser=0"
  },
  {
    "id": "anime-1749825670035123",
    "title": "Guilty Crown",
    "image": "https://cdn.myanimelist.net/images/anime/1085/93983l.jpg?_gl=1*macsm2*_gcl_au*MTcwOTg0ODAzMS4xNzQ4MzM2OTg4*_ga*OTIyMjIyMDgxLjE3NDgzMzY5ODY.*_ga_26FEP9527K*czE3NDk4MjQ1ODQkbzEyJGcxJHQxNzQ5ODI1NTczJGo2MCRsMCRoMA..",
    "genre": "Action, Drama, Sci-Fi",
    "description": "Pada tanggal 24 Desember 2029—hari yang secara umum dikenal sebagai \"Natal yang Hilang\"—Virus Kiamat menyebar ke seluruh Jepang, menyebabkan kematian bagi warganya dan menjerumuskan negara tersebut ke dalam kekacauan total. Dalam upaya untuk menegakkan ketertiban, Perserikatan Bangsa-Bangsa mengirim GHQ untuk membantu mengatasi krisis dengan menahan wabah tersebut sambil mencabut semua otonomi politik dalam prosesnya. Satu dekade kemudian, negara tersebut masih hidup di bawah kendali mereka, tidak dapat melepaskan diri dari kekuasaan kejam mereka.",
    "uploadDate": "2025-06-13",
    "link": "https://drive.usercontent.google.com/download?id=1oXu69GqIiD_gaNII8NLBXmzWzVw4Clrh&export=download&authuser=0"
  },
  {
    "id": "anime-17498260837147",
    "title": "Plastic Memories",
    "image": "https://cdn.myanimelist.net/images/anime/11/71039l.jpg",
    "genre": "Drama, Romance, Sci-Fi",
    "description": "Tsukasa Mizugaki yang berusia delapan belas tahun gagal dalam ujian masuk perguruan tinggi, tetapi setelah berusaha keras, ia berhasil mendapatkan pekerjaan di Sion Artificial Intelligence Corporation. SAI Corp bertanggung jawab atas penciptaan \"Giftias\"—android yang sangat canggih yang hampir tidak dapat dibedakan dari manusia normal. Namun, tidak seperti manusia, Giftia memiliki rentang hidup maksimum 81.920 jam, atau sekitar sembilan tahun empat bulan. Terminal Service One, stasiun tempat Tsukasa ditugaskan, bertanggung jawab untuk mengumpulkan Giftia yang telah melewati tanggal kedaluwarsa, sebelum mereka kehilangan ingatan dan menjadi agresif.",
    "uploadDate": "2025-06-13",
    "link": "https://drive.usercontent.google.com/download?id=15ye4thX1LbYUB_hL1Hetpfgv9YhwhEwB&export=download&authuser=0"
  },
  {
    "id": "anime-1749980461734765",
    "title": "Vinland Saga (Season 2)",
    "image": "https://cdn.myanimelist.net/images/anime/1227/124318l.jpg",
    "genre": "Action, Adventure, Drama, Historical",
    "description": "Setelah ayahnya meninggal dan desanya hancur di tangan para perampok Inggris, Einar menginginkan kehidupan yang damai bersama keluarganya di pertanian mereka yang baru dibangun kembali. Namun, takdir berkata lain: desanya diserbu sekali lagi. Einar menyaksikan dengan tak berdaya saat para perampok Denmark membakar tanahnya dan membantai keluarganya. Para penyerbu menangkap Einar dan membawanya kembali ke Denmark sebagai budak.",
    "uploadDate": "2025-06-15",
    "link": "https://drive.usercontent.google.com/download?id=1HzNf44KMfSkZgCipQ5FMDKqfEyza_WpK&export=download&authuser=0"
  },
  {
    "id": "anime-174998065256243",
    "title": "Adachi to Shimamura",
    "image": "https://cdn.myanimelist.net/images/anime/1586/124943l.jpg",
    "genre": "Girls Love, Slice of Life, School",
    "description": "Adachi dan Shimamura adalah dua siswi SMA yang menghabiskan waktu bersama di lantai dua gym. Seiring berjalannya waktu, persahabatan mereka mulai berkembang menjadi sesuatu yang lebih dalam.",
    "uploadDate": "2025-06-15",
    "link": "https://drive.usercontent.google.com/download?id=1NWaTH_uxNCPiPX-SX66sma_pyghCpz2K&export=download&authuser=0"
  },
  {
    "id": "anime-1749980996373189",
    "title": "Yagate Kimi ni Naru",
    "image": "https://cdn.myanimelist.net/images/anime/1338/93419l.jpg",
    "genre": "Drama, Romance, Girl Love",
    "description": "Yuu Koito selalu terpesona dengan manga shoujo romantis dan lirik lagu cinta. Dia dengan sabar menunggu sayap cinta tumbuh dan membuat hatinya berdebar-debar pada hari ketika dia akhirnya menerima pengakuan cinta. Namun, ketika teman sekelasnya dari SMP menyatakan cintanya padanya saat kelulusan mereka, dia tiba-tiba merasa hampa. Kesadaran itu menghantamnya: dia memahami romansa sebagai sebuah konsep, tetapi dia tidak mampu merasakan perasaan itu secara langsung.",
    "uploadDate": "2025-06-15",
    "link": "https://drive.usercontent.google.com/download?id=1tE-kwns7h7Z2RlnwtroRlhS-QCLWIRqz&export=download&authuser=0"
  },
  {
    "id": "anime-jujutsu-kaisen-s2",
    "title": "Jujutsu Kaisen (Season 2)",
    "image": "https://cdn.myanimelist.net/images/anime/1792/138022l.jpg",
    "genre": "Action, Dark Fantasy, Supernatural",
    "description": "Melanjutkan kisah Yuji Itadori dan teman-temannya dalam menghadapi kutukan-kutukan berbahaya.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1YlUmvqB67ao4jqblD7rC1ZXrP6IJvNif&export=download&authuser=0"
  },
  {
    "id": "anime-spy-family-s2",
    "title": "Spy × Family (Season 2)",
    "image": "https://i0.wp.com/www.rukita.co/stories/wp-content/uploads/2023/10/spy-x-family-sumber-comicbook-com.webp?resize=600%2C1000&ssl=1",
    "genre": "Action, Comedy, Slice of Life",
    "description": "Keluarga Forger melanjutkan misi mereka untuk menjaga perdamaian dunia, sambil menghadapi tantangan sehari-hari yang lucu.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1D9lZ9WRyb2CiXawAqz1BQUojIkJo2oGC&export=download&authuser=0"
  },
  {
    "id": "anime-made-in-abyss-s2",
    "title": "Made in Abyss (Season 2)",
    "image": "https://cdn.myanimelist.net/images/anime/1864/122519l.jpg",
    "genre": "Adventure, Fantasy, Sci-Fi",
    "description": "Riko, Reg, dan Nanachi melanjutkan petualangan mereka ke kedalaman Abyss yang semakin berbahaya.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=131QRmEBfMwt6Yp24OvQGwXDTD-0iUZmz&export=download&authuser=0"
  },
  {
    "id": "anime-attack-on-titan-s2-3-4",
    "title": "Attack on Titan (Season 2)",
    "image": "https://upload.wikimedia.org/wikipedia/id/a/ab/Attack_on_Titan_Season_2_vol_1.jpg",
    "genre": "Action, Dark Fantasy, Drama",
    "description": "Musim kedua ini melanjutkan cerita setelah pertempuran melawan Female Titan, di mana Eren dan pasukannya harus menghadapi ancaman baru dari gerombolan Titan yang mendekati Wall Rose. Musim ini juga menampilkan kemunculan Beast Titan dan memperkenalkan karakter baru seperti Historia Reiss. Selain itu, musim ini juga mengeksplorasi lebih dalam tentang sejarah dan asal-usul para Titan",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=11joI-UA3Oox1j8U6Zfyp4zmRNQLi9zbr&export=download&authuser=0"
  },
  {
    "id": "anime-the-promised-neverland-s2",
    "title": "The Promised Neverland (Season 2)",
    "image": "https://cdn-myanimelist-net.translate.goog/images/anime/1663/110627l.jpg?_x_tr_sl=en&_x_tr_tl=id&_x_tr_hl=id&_x_tr_pto=imgs",
    "genre": "Dark Fantasy, Sci-Fi, Thriller",
    "description": "Musim kedua dari anime \"The Promised Neverland\" melanjutkan cerita tentang sekelompok anak yatim yang melarikan diri dari panti asuhan, Grace Field House. Mereka berusaha bertahan hidup di dunia luar yang penuh dengan bahaya, termasuk iblis dan ancaman lainnya. Musim kedua ini juga menampilkan petualangan mereka dalam mencari tempat aman dan mengungkap misteri di balik dunia tempat mereka tinggal",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1uzEQDGm1Ix-wW_jMuGhFS-BA5H6ZTKFI&export=download&authuser=0"
  },
  {
    "id": "anime-kimi-no-na-wa",
    "title": "Kimi no Na wa",
    "image": "https://cdn.myanimelist.net/images/anime/9/77484l.jpg",
    "genre": "Romance, Supernatural, Drama, Movie",
    "description": "Mengisahkan dua orang remaja yang lahir dan hidup di tempat yang berbeda. Mitsuha adalah seorang gadis SMA yang tinggal di daerah pedesaan di pegunungan. Ayahnya yang jarang pulang ke rumah membuat Mitsuha hanya hidup bersama nenek dan adiknya yang masih SD. Mitsuha sering berkeinginan untuk pergi ke Tokyo karena bosan hidup di pedesaan. Sementara itu, Taki adalah seorang siswa SMA di kota Tokyo. Dalam kesehariannya, ia menghabiskan waktu untuk bermain dengan teman-temannya dan bekerja paruh waktu di restoran Italia. Dia juga tertarik dengan kesenian dan arsitektur. Suatu hari mereka mengalami pengalaman aneh di mana Mitsuha bermimpi dirinya menjadi seorang laki-laki. Dan sebaliknya, Taki bermimpi dirinya menjadi perempuan yang tinggal di daerah pegunungan yang tak pernah ia datangi.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1lwdcwGmnLOTh-d2M4yTFFfXwZWjV-7Om&export=download&authuser=0"
  },
  {
    "id": "anime-shigatsu-wa-kimi-no-uso",
    "title": "Grand Blue",
    "image": "https://cdn.myanimelist.net/images/anime/1302/94882l.jpg",
    "genre": "Comedy",
    "description": "Seorang pianis muda yang kehilangan kemampuannya untuk bermain setelah trauma, bertemu dengan seorang pemain biola bebas yang mengubah dunianya.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1W2_TYh1dGbkZoY8n_IRQTprLnywr9BGP&export=download&authuser=0"
  },
  {
    "id": "anime-fruits-basket-2019",
    "title": "Fruits Basket",
    "image": "https://cdn.myanimelist.net/images/anime/1050/99826l.jpg",
    "genre": "Romance, Slice of Life, Drama",
    "description": "Setelah kecelakaan yang menyebabkan ibunya meninggal, Tooru yang berusia 16 tahun pindah bersama kakeknya, tetapi karena rumahnya sedang direnovasi, ia tidak dapat terus tinggal bersamanya. Berdalih akan menemukan seseorang untuk tinggal bersamanya tetapi juga takut akan kritikan dari keluarganya dan tidak ingin membebani teman-temannya, Tooru memutuskan untuk tinggal sendiri secara diam-diam di sebuah tenda di hutan.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1zayo3omoxhS5WS1Q1AonHm1liNVxa2RY&export=download&authuser=0"
  },
  {
    "id": "anime-horimiya",
    "title": "Horimiya",
    "image": "https://cdn.myanimelist.net/images/anime/1727/109235l.jpg",
    "genre": "Romance, Slice of Life, Comedy",
    "description": "Di permukaan, pikiran tentang Kyouko Hori dan Izumi Miyamura yang akur akan menjadi hal terakhir dalam pikiran orang-orang. Bagaimanapun, Hori memiliki kombinasi sempurna antara kecantikan dan otak, sementara Miyamura tampak lemah lembut dan jauh dari teman-teman sekelasnya. Namun, pertemuan yang menentukan antara keduanya mengungkap jati diri mereka yang tersembunyi. Meskipun dia populer di sekolah, Hori hanya punya sedikit waktu untuk bersosialisasi dengan teman-temannya karena pekerjaan rumah. Di sisi lain, Miyamura hidup di bawah hidung teman-temannya, tubuhnya dipenuhi tato dan tindikan rahasia yang membuatnya tampak seperti berandalan yang lembut.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=10anjh1ZHU9FrEOssq8mhJ6_bvDoNskzo&export=download&authuser=0"
  },
  {
    "id": "anime-1749800000000004",
    "title": "Lycoris Recoil (perlu di edit)",
    "image": "https://cdn.myanimelist.net/images/anime/1392/124401l.jpg",
    "genre": "Action, Slice of Life",
    "description": "Tim gadis agen rahasia yang menjalankan polisi swasta untuk menjaga keamanan Tokyo, melalui keseharian sambil menghadapi ancaman kriminal.",
    "uploadDate": "2025-06-12",
    "link": "https://drive.usercontent.google.com/download?id=1nVazYmerLBqoXfagtN8NVbBHNRXhTvdR&export=download&authuser=0"
  },
  {
    "id": "anime-175034868526849",
    "title": "Kiznaiver",
    "image": "https://cdn.myanimelist.net/images/anime/2/76887l.jpg",
    "genre": "Drama, Romance, Sci-Fi",
    "description": "Katsuhira Agata adalah seorang remaja laki-laki yang pendiam dan tertutup yang rasa sakitnya telah hilang. Temannya, Chidori Takashiro, hanya bisa mengingat samar-samar hari-hari sebelum Katsuhira mengalami perubahan yang mendalam ini. Sekarang, sikapnya yang kalem dan puas diri membuat Katsuhira menjadi sasaran para pengganggu, yang mengeksploitasinya untuk mendapatkan sejumlah uang yang sangat besar. Namun, tinju mereka hanya berhasil membuatnya berkedip, karena bahkan emosi pun jauh dari jangkauannya.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1Y1Q84SXPvAoPbtX_rqWtqbn_Dk9JIsl3&export=download&authuser=0"
  },
  {
    "id": "anime-175034909481620",
    "title": "Classroom Of The Elite (Season 1)",
    "image": "https://cdn.myanimelist.net/images/anime/5/86830l.jpg?_gl=1*4bho8x*_gcl_au*MTcwOTg0ODAzMS4xNzQ4MzM2OTg4*_ga*OTIyMjIyMDgxLjE3NDgzMzY5ODY.*_ga_26FEP9527K*czE3NTAzNDg5NjgkbzE1JGcxJHQxNzUwMzQ5MDc3JGo1NyRsMCRoMA..",
    "genre": "Drama, Suspense, School, Psychological",
    "description": "Di permukaan, SMA Koudo Ikusei adalah utopia. Para siswa menikmati kebebasan yang tak tertandingi, dan sekolah ini mendapat peringkat tinggi di Jepang. Namun, kenyataannya tidaklah ideal. Empat kelas, A hingga D, diberi peringkat berdasarkan prestasi, dan hanya kelas teratas yang menerima perlakuan yang baik.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1B6ZQkr2FV57VD6eN1UKPHMQ9cupsQLEV&export=download&authuser=0"
  },
  {
    "id": "anime-1750349270581325",
    "title": "Classroom Of The Elite (Season 2)",
    "image": "https://cdn.myanimelist.net/images/anime/1279/121251l.jpg",
    "genre": "Drama, Suspense, School, Psychological",
    "description": "Season ke 2 dari anime-C;assroom Of The Elite",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1ti4LNTcJ5RAA5yIAtURoy2kp0BXDVOcn&export=download&authuser=0"
  },
  {
    "id": "anime-175034954809266",
    "title": "Classroom Of The Elite (Season 3)",
    "image": "https://cdn.myanimelist.net/images/anime/1280/137323l.jpg",
    "genre": "Drama, Suspense, School, Psychological",
    "description": "Season 3 dari anime-Classroom Of The Elite",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1hgAr0zm81L0AnF6FUOgvZYiiwByrhFgI&export=download&authuser=0"
  },
  {
    "id": "anime-17503497246482",
    "title": "Tasogare Otome x Amnesia",
    "image": "https://cdn.myanimelist.net/images/anime/12/64435l.jpg?_gl=1*l37lyt*_gcl_au*MTcwOTg0ODAzMS4xNzQ4MzM2OTg4*_ga*OTIyMjIyMDgxLjE3NDgzMzY5ODY.*_ga_26FEP9527K*czE3NTAzNDg5NjgkbzE1JGcxJHQxNzUwMzQ5Njk0JGo5JGwwJGgw",
    "genre": "Horror, Mystery, Romance, Supernatural, School",
    "description": "Akademi Swasta Seikyou, yang dibangun berdasarkan intrik mitos-mitos okultisme tradisional, memiliki masa lalu yang kelam—selama 60 tahun, sekolah ini dihantui oleh hantu yang dikenal sebagai Yuuko, seorang wanita muda yang meninggal secara misterius di ruang bawah tanah gedung sekolah lama. Tanpa ingatan tentang kehidupan atau kematiannya, Yuuko diam-diam menemukan dan mengepalai Klub Investigasi Paranormal untuk mencari jawaban.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1jdCh7nRE-NGMTj_1VkJf_Kt2FLsdPUrL&export=download&authuser=0"
  },
  {
    "id": "anime-1750350063186437",
    "title": "Vanitas No Carte",
    "image": "https://cdn.myanimelist.net/images/anime/1808/113764l.jpg",
    "genre": "Action, Fantasy, Mystery, Historical, Fantasy, Vampire",
    "description": "Dicemooh oleh kaumnya karena dilahirkan di bawah bulan biru, vampir Vanitas menjadi takut dan kesepian. Menurut legenda, ia menciptakan sebuah grimoire terkutuk yang dikenal sebagai \"Kitab Vanitas\", dan dikatakan bahwa suatu hari nanti ia akan menggunakannya untuk membalas dendam pada semua vampir di bulan merah.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1joZc9PPUqxQHyyeUbeq9JxvaAZCv9nxn&export=download&authuser=0"
  },
  {
    "id": "anime-17503502112746",
    "title": "Vanitas No Carte (Part 2)",
    "image": "https://cdn.myanimelist.net/images/anime/1785/120021l.jpg",
    "genre": "Action, Fantasy, Mystery, Historical, Fantasy, Vampire",
    "description": "Part 2 dari anime-Vanitas No Carte",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=12hKGW2tA2hvT6mej-euaxEw6scKc2SKW&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467008",
    "title": "Shokugeki no Soma (Food Wars!)",
    "image": "https://cdn.myanimelist.net/images/anime/5/76426l.jpg",
    "genre": "Comedy, Ecchi, School, Shounen",
    "description": "Soma Yukihira memiliki impian besar untuk menjadi koki penuh waktu di restoran milik ayahnya dan melampaui keterampilan kuliner ayahnya yang legendaris. Namun, takdir berkata lain ketika ayahnya memutuskan untuk menutup restoran dan pergi berpetualang kuliner keliling dunia. Sebagai gantinya, Soma didaftarkan ke Akademi Kuliner Totsuki, sebuah institusi elit yang terkenal sangat sulit dan hanya meluluskan sedikit siswa. Di sana, Soma harus menghadapi tantangan \"Shokugeki\" (perang makanan) yang intens, bersaing dengan koki-koki muda berbakat lainnya dari seluruh dunia dengan gaya dan filosofi kuliner yang berbeda-beda. Dengan semangat pantang menyerah dan ide-ide masakan yang tak terduga, Soma bertekad untuk menjadi yang terbaik di akademi ini dan suatu hari nanti, membuka kembali restoran keluarganya.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=18AzJ6gp-xaKY_7kCOKlMKJvILfKseyYS&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467009",
    "title": "March Comes in Like a Lion",
    "image": "https://cdn.myanimelist.net/images/anime/12/82901l.jpg",
    "genre": "Drama, Game, Slice of Life",
    "description": "Rei Kiriyama adalah seorang pemain shogi profesional berusia 17 tahun yang masih dibebani oleh tragedi kematian keluarganya. Hidupnya terasa hampa dan kesepian, hanya ditemani oleh papan shogi dan rutinitas pertandingan yang padat. Namun, kehidupannya mulai berubah ketika ia bertemu dengan tiga saudari Kawamoto: Akari, Hinata, dan Momo, yang memiliki toko manisan tradisional. Keluarga Kawamoto menyambut Rei dengan kehangatan dan kasih sayang yang telah lama hilang dari hidupnya. Melalui interaksi dengan mereka dan juga dengan lawan-lawannya di dunia shogi, Rei perlahan belajar untuk membuka diri, mengatasi traumanya, dan menemukan kembali makna hidup, sambil terus berjuang di dunia shogi yang kompetitif.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1_9-reobkImOaN1S-bgJA0JHbJ4Q86lhN&export=download&authuser=0https://drive.usercontent.google.com/download?id=1_9-reobkImOaN1S-bgJA0JHbJ4Q86lhN&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467010",
    "title": "Hyouka",
    "image": "https://cdn.myanimelist.net/images/anime/4/39025l.jpg",
    "genre": "Mystery, School, Slice of Life",
    "description": "Houtarou Oreki adalah seorang siswa SMA dengan moto hidup 'jika tidak perlu, jangan lakukan, jika perlu, persingkat'. Atas desakan kakaknya, ia terpaksa bergabung dengan Klub Sastra Klasik yang terancam dibubarkan. Di sana, ia bertemu dengan Eru Chitanda, seorang gadis yang sangat ingin tahu dan tidak bisa menahan diri untuk tidak menyelidiki misteri apa pun yang menarik perhatiannya. Bersama dengan teman-teman klub lainnya, Satoshi Fukube yang ceria dan Mayaka Ibara yang tegas, Houtarou yang malas dipaksa untuk menggunakan kemampuan deduksinya yang luar biasa untuk memecahkan berbagai misteri kecil dan teka-teki yang muncul di kehidupan sehari-hari mereka, terutama yang berkaitan dengan sejarah Klub Sastra Klasik itu sendiri.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=14brM-7S6IuNI5wQ2pvjXB2veA5U-ezV8&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467011",
    "title": "Ghost Stories",
    "image": "https://cdn.myanimelist.net/images/anime/1414/112029l.jpg",
    "genre": "Horror, Mystery, Supernatural",
    "description": "Setelah pindah ke kota tempat ibunya pernah tinggal, Satsuki Miyanoshita dan adiknya, Keiichirou, mulai bersekolah di sebuah sekolah lama yang kemudian terungkap dibangun di atas tanah kuburan. Mereka bersama teman-teman baru mereka, termasuk Hajime Aoyama yang pemberani, Reo Kakinoki yang penakut, dan Momoko Koigakubo yang spiritual, sering kali terlibat dalam insiden supernatural yang menakutkan. Untuk melawan roh-roh jahat yang muncul, mereka harus menggunakan buku harian ibunya Satsuki yang berisi petunjuk tentang cara menyegel hantu. Anime ini terkenal dengan dubbing bahasa Inggris-nya yang sangat bebas dan kocak, mengubah nuansa horor menjadi komedi gelap yang tak terduga, sehingga tetap seru untuk ditonton bahkan bagi mereka yang tidak terlalu suka horor.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1dHR4B_Ebp2AXbgsob24h0RqwarpQo4UW&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467012",
    "title": "Yona of the Dawn (Akatsuki no Yona)",
    "image": "https://cdn.myanimelist.net/images/anime/4/68391l.jpg",
    "genre": "Action, Adventure, Comedy, Fantasy, Romance, Shoujo",
    "description": "Hidup Putri Yona yang mewah dan damai di Kerajaan Kouka hancur dalam semalam ketika sepupunya, Su-won, melakukan kudeta dan membunuh ayahnya, Raja Il. Yona terpaksa melarikan diri dari istana bersama pengawal setianya, Son Hak. Untuk merebut kembali kerajaannya dan menyelamatkan rakyatnya, Yona harus mencari empat naga legendaris yang konon akan bangkit untuk melayani seorang raja yang ditakdirkan. Perjalanan ini mengubah Yona dari seorang putri manja menjadi seorang wanita muda yang kuat, bertekad, dan mampu bertarung, sambil mengumpulkan sekutu dan menghadapi berbagai tantangan di sepanjang jalan.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1dQsvpuvAJ4dBPWnqarMJ_BVR0wbKmk4l&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467013",
    "title": "Akame ga Kill!",
    "image": "https://cdn.myanimelist.net/images/anime/1115/97001l.jpg?_gl=1*qnytue*_gcl_au*MTcwOTg0ODAzMS4xNzQ4MzM2OTg4*_ga*OTIyMjIyMDgxLjE3NDgzMzY5ODY.*_ga_26FEP9527K*czE3NTAzNTIxODQkbzE2JGcwJHQxNzUwMzUyMTg0JGo2MCRsMCRoMA..",
    "genre": "Action, Dark Fantasy, Adventure",
    "description": "Tatsumi, seorang petarung muda dari desa, melakukan perjalanan ke ibukota kekaisaran dengan harapan bisa mendapatkan uang untuk menyelamatkan desanya dari kemiskinan. Namun, ia segera menemukan bahwa ibukota yang ia impikan adalah sarang korupsi, kekejaman, dan ketidakadilan yang merajalela. Setelah hampir menjadi korban penipuan, Tatsumi diselamatkan oleh Night Raid, sebuah kelompok pembunuh yang bekerja untuk Tentara Revolusioner dengan tujuan menggulingkan pemerintahan yang korup. Terkejut dengan kenyataan pahit, Tatsumi bergabung dengan Night Raid dan menggunakan keahlian bertarungnya untuk melawan rezim jahat, menghadapi bahaya mematikan, dan membuat keputusan sulit di tengah pertempuran yang brutal.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1lPZcJEKT0YHEHXimna1-0_nT2CQvLZBL&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467014",
    "title": "Hataraku Saibō",
    "image": "https://cdn.myanimelist.net/images/anime/1270/95221l.jpg",
    "genre": "Comedy, Shounen",
    "description": "Pernah bertanya-tanya apa yang terjadi di dalam tubuh kita setiap hari? Cells at Work! membawa kita ke dalam dunia mikroskopis tubuh manusia, di mana miliaran sel bekerja keras 24/7 untuk menjaga kita tetap hidup dan sehat. Anime ini dengan cerdas mengantropomorfisasi berbagai jenis sel, mulai dari Sel Darah Merah yang ceroboh tapi pekerja keras, Sel Darah Putih (Neutrofil) yang gigih melawan kuman, hingga T-Sel Pembunuh yang kejam, dan Platelet yang imut. Setiap episode menampilkan tantangan baru bagi para sel, seperti invasi bakteri, alergi, atau bahkan luka, yang mereka hadapi dengan dedikasi dan terkadang, sedikit kekacauan lucu. Ini adalah cara yang menyenangkan dan mendidik untuk memahami bagaimana tubuh kita berfungsi.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=11zPqJIeRcFVvYbVsWiPns0DhiQNn6Kh1&export=download&authuser=0"
  },
  {
    "id": "anime-17188154467015",
    "title": "No Game No Life",
    "image": "https://cdn.myanimelist.net/images/anime/12/59115l.jpg",
    "genre": "Comedy, Fantasy, Ecchi, Isekai",
    "description": "Enam belas ras makhluk hidup mendiami Disboard, sebuah dunia yang diawasi oleh Tet. Ras terendah dari keenam belas ras tersebut-Imanity-terdiri dari manusia, ras yang tidak memiliki ketertarikan terhadap sihir. Di tempat di mana segala sesuatunya diputuskan melalui permainan sederhana, umat manusia tampaknya tidak memiliki jalan keluar dari kesulitan mereka-tetapi kedatangan dua orang luar menimbulkan perubahan.",
    "uploadDate": "2025-06-19",
    "link": "https://drive.usercontent.google.com/download?id=1MEmTyptRnuWGH6jyiiSPrnE4rrMqqDPW&export=download&authuser=0"
  }
];


let animeData = defaultAnimeData;
animeData = animeData.map(anime => {
  if (!anime.id) {
    anime.id = 'anime-' + Date.now() + Math.floor(Math.random() * 1000);
  }
  return anime;
});

const container = document.getElementById("animeList");
const searchInput = document.getElementById("searchInput");
const toggleAdminModeBtn = document.getElementById("toggleAdminModeBtn");
const editSelectedBtn = document.getElementById("editSelectedBtn");
const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");

const deleteConfirmationModal = document.getElementById("deleteConfirmationModal");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");

const editAnimeModal = document.getElementById("editAnimeModal");
const editTitleInput = document.getElementById("editTitleInput");
const editImageInput = document.getElementById("editImageInput");
const editGenreInput = document.getElementById("editGenreInput");
const editLinkInput = document.getElementById("editLinkInput");
const editDescInput = document.getElementById("editDescInput");
const saveEditBtn = document.getElementById("saveEditBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
let currentEditingAnimeId = null;

let adminMode = false;
let selectedAnimeIds = new Set();

// SECTION: Elemen Umpan Balik UI (Tidak terkait server)

const messageContainer = document.getElementById("messageContainer");
const messageText = document.getElementById("messageText");

function showMessage(message, type) {
  if (messageContainer && messageText) {
    messageText.textContent = message;
    messageContainer.className = `message-container ${type} show`;
    setTimeout(() => {
      messageContainer.classList.remove('show');
    }, 3000);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("animeData", JSON.stringify(animeData));
}

// SECTION: Render Daftar Anime

function renderAnimeList(filterGenre = null, searchTerm = null) {
  if (container) container.innerHTML = "";
  selectedAnimeIds.clear();

  let filteredData = filterGenre
    ? animeData.filter(anime =>
      anime.genre.toLowerCase().includes(filterGenre.toLowerCase()))
    : [...animeData];

  if (searchTerm) {
    filteredData = filteredData.filter(anime =>
      anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anime.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anime.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  filteredData.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

  if (container) {
    if (filteredData.length === 0 && (filterGenre || searchTerm)) {
      container.innerHTML = `<p style="color: #aaa; text-align: center; width: 100%;">Tidak ada anime yang ditemukan dengan kriteria tersebut.</p>`;
    } else if (filteredData.length === 0) {
      container.innerHTML = `<p style="color: #aaa; text-align: center; width: 100%;">Belum ada anime.</p>`; // Dihapus "Tambahkan yang baru!"
    }
  }


  filteredData.forEach((anime) => {
    const box = document.createElement("div");
    box.className = "anime-box";

    const shortDesc = anime.description.length > 100
      ? anime.description.substring(0, 100) + "..."
      : anime.description;

    const needsReadMore = anime.description.length > 100;

    box.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}" class="anime-img" onerror="this.src='https://via.placeholder.com/200x300?text=No+Image';">
      <div class="anime-info">
        <div class="anime-title">
          ${anime.link ? `<a href="${anime.link}" target="_blank" class="anime-title-link">${anime.title}</a>` : anime.title}
        </div>
        <div class="anime-genre">
          ${anime.genre.split(', ').map(g =>
            `<a class="anime-genre-link" data-genre="${g}">${g}</a>`).join(', ')}
        </div>
        <div class="anime-desc" id="desc-${anime.id}">${shortDesc}</div>
        ${needsReadMore ? `<a href="#" class="read-more" data-target-id="${anime.id}">Baca selengkapnya</a>` : ""}
        <div class="anime-actions">
          ${adminMode ? `<input type="checkbox" class="delete-checkbox" data-id="${anime.id}" ${selectedAnimeIds.has(anime.id) ? 'checked' : ''}>` : ''}
          ${adminMode ? `<button class="edit-button" data-id="${anime.id}">Edit</button>` : ''}
        </div>
      </div>
    `;

    if (container) container.appendChild(box);
  });

  if (adminMode) {
    if (editSelectedBtn) editSelectedBtn.style.display = "inline-block";
    if (deleteSelectedBtn) deleteSelectedBtn.style.display = "inline-block";
    // Tidak ada lagi tombol "Tambah Anime Baru" di admin mode
    if (toggleAdminModeBtn) toggleAdminModeBtn.textContent = "Selesai Mode Admin";
  } else {
    if (editSelectedBtn) editSelectedBtn.style.display = "none";
    if (deleteSelectedBtn) deleteSelectedBtn.style.display = "none";
    // Tidak ada lagi tombol "Tambah Anime Baru" di admin mode
    if (toggleAdminModeBtn) toggleAdminModeBtn.textContent = "Mode Admin";
  }

  const readMoreLinks = document.querySelectorAll(".read-more");
  readMoreLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.dataset.targetId;
      const targetAnime = animeData.find(anime => anime.id === targetId);
      if (targetAnime) {
        const descElement = document.getElementById(`desc-${targetId}`);
        if (descElement) descElement.textContent = targetAnime.description;
        link.remove();
      }
    });
  });

  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const animeId = e.target.dataset.id;
      openEditModal(animeId);
    });
  });

  const genreLinks = document.querySelectorAll(".anime-genre-link");
  genreLinks.forEach(link => {
    link.addEventListener("click", () => {
      const selectedGenre = link.dataset.genre;
      renderAnimeList(selectedGenre, searchInput.value.trim());
    });
  });

  const deleteCheckboxes = document.querySelectorAll(".delete-checkbox");
  deleteCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) {
        selectedAnimeIds.add(id);
      } else {
        selectedAnimeIds.delete(id);
      }
    });
  });
}

// SECTION: Event Listener

document.addEventListener("DOMContentLoaded", () => {
  renderAnimeList();
  // Memastikan populateGenreButtons dipanggil setelah animeData siap
  // (diasumsikan populateGenreButtons ada di menubaris.js dan diekspor melalui window)
  if (typeof populateGenreButtons === "function") {
    populateGenreButtons();
  }
});

const showAllButton = document.getElementById("showAll");
if (showAllButton) {
  showAllButton.addEventListener("click", () => {
    searchInput.value = "";
    renderAnimeList();
  });
}

// Event listener untuk tombol "Tambah Anime Baru" telah dihapus karena formnya sudah dihapus

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.trim();
    renderAnimeList(null, searchTerm);
  });
}

if (toggleAdminModeBtn) {
  toggleAdminModeBtn.addEventListener("click", () => {
    adminMode = !adminMode;
    renderAnimeList(null, searchInput.value.trim());
  });
}

if (deleteSelectedBtn) {
  deleteSelectedBtn.addEventListener("click", () => {
    if (selectedAnimeIds.size === 0) {
      alert("Pilih anime yang ingin dihapus terlebih dahulu.");
      return;
    }
    if (deleteConfirmationModal) deleteConfirmationModal.style.display = "flex";
  });
}

if (editSelectedBtn) {
  editSelectedBtn.addEventListener("click", () => {
    if (selectedAnimeIds.size === 0) {
      alert("Pilih anime yang ingin diedit terlebih dahulu.");
      return;
    }
    if (selectedAnimeIds.size > 1) {
      alert("Anda hanya bisa mengedit satu anime sekaligus. Silakan pilih satu saja.");
      return;
    }
    const firstSelectedId = selectedAnimeIds.values().next().value;
    openEditModal(firstSelectedId);
  });
}

if (confirmDeleteBtn) {
  confirmDeleteBtn.addEventListener("click", () => {
    // const idsToDelete = Array.from(selectedAnimeIds); // Tidak perlu dikirim ke server

    animeData = animeData.filter(anime => !selectedAnimeIds.has(anime.id));
    saveToLocalStorage();
    if (deleteConfirmationModal) deleteConfirmationModal.style.display = "none";
    selectedAnimeIds.clear();
    renderAnimeList(null, searchInput.value.trim());

    // sendDeleteRequestToServer(idsToDelete); // Panggilan ke server dihapus
  });
}

if (cancelDeleteBtn) {
  cancelDeleteBtn.addEventListener("click", () => {
    if (deleteConfirmationModal) deleteConfirmationModal.style.display = "none";
    selectedAnimeIds.clear();
    renderAnimeList(null, searchInput.value.trim());
  });
}

if (deleteConfirmationModal) {
  window.addEventListener("click", (event) => {
    if (event.target == deleteConfirmationModal) {
      deleteConfirmationModal.style.display = "none";
      selectedAnimeIds.clear();
      renderAnimeList(null, searchInput.value.trim());
    }
  });
}

// SECTION: Fungsi Modal Edit Anime

function openEditModal(animeId) {
  currentEditingAnimeId = animeId;
  const animeToEdit = animeData.find(anime => anime.id === animeId);

  if (animeToEdit && editTitleInput && editImageInput && editGenreInput && editLinkInput && editDescInput && editAnimeModal) {
    editTitleInput.value = animeToEdit.title;
    editImageInput.value = animeToEdit.image;
    editGenreInput.value = animeToEdit.genre;
    editLinkInput.value = animeToEdit.link || '';
    editDescInput.value = animeToEdit.description;
    editAnimeModal.style.display = "flex";
  }
}

if (saveEditBtn) {
  saveEditBtn.addEventListener("click", () => {
    const updatedTitle = editTitleInput.value.trim();
    const updatedImage = editImageInput.value.trim();
    const updatedGenre = editGenreInput.value.trim();
    const updatedLink = editLinkInput.value.trim();
    const updatedDescription = editDescInput.value.trim();

    if (updatedTitle && updatedImage && updatedGenre && updatedDescription && currentEditingAnimeId) {
      const animeIndex = animeData.findIndex(anime => anime.id === currentEditingAnimeId);
      if (animeIndex !== -1) {
        animeData[animeIndex].title = updatedTitle;
        animeData[animeIndex].image = updatedImage;
        animeData[animeIndex].genre = updatedGenre;
        animeData[animeIndex].link = updatedLink;
        animeData[animeIndex].description = updatedDescription;
        saveToLocalStorage();
        if (editAnimeModal) editAnimeModal.style.display = "none";
        selectedAnimeIds.clear();
        renderAnimeList(null, searchInput.value.trim());

        // sendUpdateRequestToServer(currentEditingAnimeId, animeData[animeIndex]); // Panggilan ke server dihapus
      }
    } else {
      alert("Judul, Gambar, Genre, dan Deskripsi harus diisi!");
    }
  });
}

if (cancelEditBtn) {
  cancelEditBtn.addEventListener("click", () => {
    if (editAnimeModal) editAnimeModal.style.display = "none";
    selectedAnimeIds.clear();
    renderAnimeList(null, searchInput.value.trim());
  });
}

if (editAnimeModal) {
  window.addEventListener("click", (event) => {
    if (event.target == editAnimeModal) {
      editAnimeModal.style.display = "none";
      selectedAnimeIds.clear();
      renderAnimeList(null, searchInput.value.trim());
    }
  });
}

// Ekspor fungsi agar bisa diakses dari menubaris.js
window.renderAnimeList = renderAnimeList;
window.animeData = animeData;
