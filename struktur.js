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
    "link": "https://drive.usercontent.google.com/download?id=1BUedxY1w1KGopqkPRSJTDTxslOFvOVl&export=download&authuser=0"
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